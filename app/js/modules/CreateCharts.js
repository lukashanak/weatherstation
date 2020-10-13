// DEFAULT APEXCHART CONFIG
const defaultOptions = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty - dnes',
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

window.onload = function() {
  loadCharts("today","temp");
}


function loadCharts(timeRange, sensorType) {
  $.get(`./php/getJsonFromDb/${timeRange}/${sensorType}.php`, function(data, status){
  console.log(data + timeRange + sensorType);
   let convertedData = convertData(JSON.parse(data));
   createGraph(convertedData.values, convertedData.categories);
    }
    )}


    function createGraph(sensorValues, categories) {
      let options = Object.assign({}, defaultOptions);
      options.xaxis.categories=categories;
      let rendered = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
      rendered.render();
      rendered.appendData([{
        data: sensorValues
      }]);
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
