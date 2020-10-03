

window.onload = function() {
  today();
}

// function which does it all for today charts
function today(range, sensor) {
    $.get("./php/getJsonFromDb/today/today.php", function(data, status){
     let convertedData = convertData(JSON.parse(data));
     createChart(convertData);
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

function createChart(data) {
dailyChartDataOptionsTemp.title = "pico";
}


const dailyChartTemp = document.getElementById("dailyChartTemp");

  var dailyChartDataOptionsTemp = {
    colors:['#F44336'],
    title: {
    //  text: 'Graf teploty za posledních 24 hodin',\
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
      data: ["188", "511"]
    }],
    xaxis: {
      labels: {
        show: true
    },
    categories: []
  }
  }


var renderedDailyChartTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), dailyChartDataOptionsTemp);
renderedDailyChartTemp.render();