// DEFAULT APEXCHART CONFIG
const defaultOptions = {
  colors: ['#F44336'],
  title: {
    text: 'Graf teploty - dnes',
    align: 'center',
    show: 'false'
  },
  tools: {
    download: false
  },
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  series: [{
    name: 'Teplota (°C)',
    data: [] //["20.49", "19.95", "19.64", "19.28", "18.96", "18.7", "18.82", "19.13",]
  }],
  xaxis: {
    labels: {
      show: true
    },
    categories: [] //["00:00:00", " 01:00:00", " 02:00:00", " 03:00:00", " 04:00:00", " 05:00:00", " 06:00:00", " 07:00:00"]
  }
}

// DOM Config - where to inject charts
var DOMConfig_CreateCharts = {
      today: {
        temp: "dayChart_temp",
        pressure: "dayChart_pressure",
        humidity: "dayChart_humidity",
        light: "dayChart_light"
      },
      yesterday: {
        temp: "yesterdayChart_temp",
        pressure: "yesterdayChart_pressure",
        humidity: "yesterdayChart_humidity",
        light: "yesterdayChart_light"
      },
      lastWeek: {
        temp: "weekChart_temp",
        pressure: "weekChart_pressure",
        humidity: "weekChart_humidity",
        light: "weekChart_light"
      },
      lastMonth: {
        temp: "monthChart_temp",
        pressure: "monthChart_pressure",
        humidity: "monthChart_humidity",
        light: "monthChart_light"
      }
  }


// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}


// function which does it all
export function renderChart(timeRange, sensorType, ) {
  $.get(`./php/getJsonFromDb/${timeRange}/${sensorType}.php`, function (data, status) {
    let convertedData = convertData(JSON.parse(data));
    // not the problem here, working right:   console.log(convertedData.categories.length + " = " + convertedData.values.length);
    createChart(convertedData.values, convertedData.categories, timeRange, sensorType);
  })
}

// sub functions

// Convert data from DB's array into the structured object
function convertData(data) {
  let result = {
    values: [],
    categories: []
  }
  for (let i = 0; i < data.length; i++) {
    result.values[i] = data[i].split(",")[0];
    result.categories[i] = data[i].split(",")[2];
    console.log(result.categories[i]);
  }
  return result;
}

// Create a chart
function createChart(sensorValues, categories, timeRange, sensorType) {
  let whereToInjectChartID = DOMConfig_CreateCharts[timeRange][sensorType];
  console.log(whereToInjectChartID);
  //  let options = Object.assign({}, defaultOptions);
  let options = JSON.parse(JSON.stringify(defaultOptions));
  options.xaxis.categories = categories;
  options.series.data = sensorValues;
  window[timeRange + sensorType] = new ApexCharts(document.querySelector("#" + whereToInjectChartID), options);
  window[timeRange + sensorType].render();
  window[timeRange + sensorType].appendData([{
    data: sensorValues
  }]);
}
