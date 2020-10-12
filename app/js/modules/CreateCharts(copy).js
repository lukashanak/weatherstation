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


class CreateChart {
  constructor(sensorName, timeRange, defaultOptions) {
    this.sensorName = sensorName;
    this.timeRange = timeRange;
  }
  convertData(data) {
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
}


var createGraph = (sensorValues, categories) => {
  let options = Object.assign({}, defaultOptions);
  options.xaxis.categories=categories;
  let rendered = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
  rendered.render();
  rendered.appendData([{
    data: sensorValues
  }]);
}

function createChart() {
  $.get("./php/getJsonFromDb/today/today.php", function(data, status){
   let convertedData = convertData(JSON.parse(data));
   // createGraph(convertedData.values, convertedData.categories);
    }
    )}
