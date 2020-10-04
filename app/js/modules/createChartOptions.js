

// basic configuration
 export var defaultOptions = {
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

 export function createGraph(sensorValues) {
    let options = defaultOptions;
    options.series.data=sensorValues;
    options.categories=sensorValues;
    console.log(options);
    var renderedTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), options);
    renderedTemp.render();
  }
  
