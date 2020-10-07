const dailyChartTemp = document.getElementById("dailyChartTemp");

const defaultOptions = {
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


var createGraph = (sensorValues, categories) => {
  let options = Object.assign({}, defaultOptions);
  options.xaxis.categories=categories;
  let rendered = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
  rendered.render();
  console.log(sensorValues);
  rendered.appendData([{
    data: sensorValues
  }]);
}


window.onload = function() {
  today();
}

// function which does it all for today charts
function today(range, sensor) {
    $.get("./php/getJsonFromDb/today/today.php", function(data, status){
     let convertedData = convertData(JSON.parse(data));
     createGraph(convertedData.values, convertedData.categories);
      }
      )}

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


