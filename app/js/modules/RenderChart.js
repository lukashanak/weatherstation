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
    type: 'category',
    categories: [], //["00:00:00", " 01:00:00", " 02:00:00", " 03:00:00", " 04:00:00", " 05:00:00", " 06:00:00", " 07:00:00"]
    labels: {
      show: false
    }
  },
}

// function which does it all
export function renderChart(timeRange, sensorType, domID) {
  $.get(`./php/getJsonFromDb/${category}/${sensorType}.php`, function (data, status) {
    let convertedData = convertData(JSON.parse(data));
    // not the problem here, working right:   console.log(convertedData.categories.length + " = " + convertedData.values.length);
    createChart(convertedData.values, convertedData.categories, timeRange, sensorType, domID);
    console.log("Chart created");
  })
}

/* ********   sub functions ********** */

// Convert data from DB's array into the structured object
function convertData(data) {
  let result = {
    values: [],
    categories: []
  }
  for (let i = 0; i < data.length; i++) {
    result.values[i] = data[i].split(",")[0];
    result.categories[i] = data[i].split(",")[2];
  }
  return result;
}

// Create a chart
function createChart(sensorValues, categories, dateRange, sensorType, domID) {
  let whereToInjectChartID = domID;
  //  let options = Object.assign({}, defaultOptions);
  let options = JSON.parse(JSON.stringify(defaultOptions));
  options.xaxis.categories = categories;
  options.series.data = sensorValues;
  if (categories )
  window[dateRange + sensorType] = new ApexCharts(document.querySelector("#" + whereToInjectChartID), options);
  window[dateRange + sensorType].render();
  window[dateRange + sensorType].appendData([{
    data: sensorValues
  }]);
}
