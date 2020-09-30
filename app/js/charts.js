
const dailyChartTemp = document.getElementById("dailyChartTemp");

let todayData = {
    today: {
        temp: {
            value: "",
            date: "",
            time: ""
        },
        pressure: {
            value: "",
            date: "",
            time: ""
        }
    }
};
    
let dailyChartDataTemp = {
    data: [], 
    categories: []
  };

let getTempData = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "./php/getJsonFromDb/today/today.php", true);
  xhttp.send();
}

getTempData();
  
  var dailyChartDataOptionsTemp = {
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
      data: dailyChartDataTemp.data
    }],
    xaxis: {
      labels: {
        show: true
    },
    categories: dailyChartDataTemp.categories
  }
  }

var renderedDailyChartTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), dailyChartDataOptionsTemp);
renderedDailyChartTemp.render();