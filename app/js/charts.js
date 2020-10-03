import {options, createGraph} from './modules/createChartOptions.js';

window.onload = function() {
  today();
}

// function which does it all for today charts
function today(range, sensor) {
    $.get("./php/getJsonFromDb/today/today.php", function(data, status){
     let convertedData = convertData(JSON.parse(data));
     console.log(createGraph(convertedData.values));
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
  var renderedDailyChartTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
  renderedDailyChartTemp.render();
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

const dailyChartTemp = document.getElementById("dailyChartTemp");

class Graph {
  constructor(sensor, range) {

  }
}

