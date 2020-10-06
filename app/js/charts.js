const dailyChartTemp = document.getElementById("dailyChartTemp");

// basic configuration
export const defaultOptions = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty za posledních 24 hodin',
    align: 'center',
    show: 'false'
  },
  tools: {
    download: false
  },
  chart: {
    type:'line',
    zoom: {
      enabled: false
  },
  toolbar: {
    show: false
  }
  },
  series: [{
    name: 'Teplota (°C)',
    data: []
  }],
  xaxis: {
    labels: {
      show: true
  },
  categories: []
}
}

export var sensorValues = ["21.16", "21.05", "20.92", "20.76", "20.62", "20.51", "20.41", "20.46"];

var options = Object.assign({}, defaultOptions);
options.series.data=sensorValues;
options.categories=sensorValues;

var renderedTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
renderedTemp.render();

/*
export var createGraph = (sensorValues) => {
  var options = defaultOptions;
  options.series.data=sensorValues;
  options.categories=sensorValues;
  console.log("data appended");
  console.log(options);
  var renderedTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
  renderedTemp.render();
  console.log(options);
}
*/







window.onload = function() {
  today();
}

// function which does it all for today charts
function today(range, sensor) {
    $.get("./php/getJsonFromDb/today/today.php", function(data, status){
     let convertedData = convertData(JSON.parse(data));
  })
}

function convertData(data) {
  let result = {
    values: [],
    categories: []
  }
for (let i=0; i < data.length; i++) {
  result.values[i] = data[i].split(",")[0];
  result.categories[i] = data[i].split(",")[2];
}
return result;
}



let config = {
  sensors: ['temp', 'humidity', 'pressure', 'light'],
  ranges: ['today', 'yesterday', 'lastWeek', 'lastMonth'],
  todayDOM: {
    temp: document.getElementById("dailyChartTemp"),
  },
  yesterdayDOM: {

  }
}



/*
    tempYesterday: document.getElementById("yesterdayChartTemp"),
    tempLastWeek: document.getElementById("tempLastWeek")
*/


