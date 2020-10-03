

// basic configuration
 export var options = {
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

 export function createGraph(/* DomID,*/ sensorValues) {
    let basicOptions = options;
    basicOptions.series.data=sensorValues;
    return basicOptions;
  }
  
