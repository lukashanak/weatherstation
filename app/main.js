

getData();

setInterval(
    function(){
    getData();
    }
  , 5000);

function getData(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("actualValueTemperature").innerHTML=this.responseText;
    }
  };
  xhttp.open("GET", "./php/daily/printLastTempValue.php", true);
  xhttp.send();

}



// TEMPERATURE
const dailyChartTemp = document.getElementById("dailyChartTemp");
const weeklyChartTemp = document.getElementById("weeklyChartTemp");
const monthlyChartTemp= document.getElementById("monthlyChartTemp");

let dailyChartDataTemp = {
  data: ["3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "15C", "0C"], // get from the request to php
  categories: ["1:00 hod.", "2:00 hod.", "3:00 hod.", "4:00 hod.", "5:00 hod.", "6:00 hod.", "7:00 hod.", "8:00 hod.", "9:00 hod.", "10:00 hod.", "11:00 hod.", "12:00 hod.", "13:00 hod.", "14:00 hod.", "15:00 hod.", "16:00 hod.", "17:00 hod.", "18:00 hod.", "19:00 hod.", "20:00 hod.", "21:00 hod.", "22:00 hod.", "23:00 hod.", "24:00 hod."]     // get from the request to php
};
let weeklyChartDataTemp = {
  data: ["3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "15C", "0C"],  // get from the request to php
  categories: ["1:00 hod.", "2:00 hod.", "3:00 hod.", "4:00 hod.", "5:00 hod.", "6:00 hod.", "7:00 hod.", "8:00 hod.", "9:00 hod.", "10:00 hod.", "11:00 hod.", "12:00 hod.", "13:00 hod.", "14:00 hod.", "15:00 hod.", "16:00 hod.", "17:00 hod.", "18:00 hod.", "19:00 hod.", "20:00 hod.", "21:00 hod.", "22:00 hod.", "23:00 hod.", "24:00 hod."]      // get from the request to php
};
let monthlyChartDataTemp = {
  data: ["3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "15C", "0C"],  // get from the request to php
  categories: ["1:00 hod.", "2:00 hod.", "3:00 hod.", "4:00 hod.", "5:00 hod.", "6:00 hod.", "7:00 hod.", "8:00 hod.", "9:00 hod.", "10:00 hod.", "11:00 hod.", "12:00 hod.", "13:00 hod.", "14:00 hod.", "15:00 hod.", "16:00 hod.", "17:00 hod.", "18:00 hod.", "19:00 hod.", "20:00 hod.", "21:00 hod.", "22:00 hod.", "23:00 hod.", "24:00 hod."]      // get from the request to php
}; 

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

var weeklyChartDataOptionsTemp = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty za posledních týden',
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
    data: weeklyChartDataTemp.data
  }],
  xaxis: {
    labels: {
      show: true
  },
  categories: weeklyChartDataTemp.categories
}
}

var monthlyChartDataOptionsTemp = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty za poslední měsíc',
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
    data: monthlyChartDataTemp.data
  }],
  xaxis: {
    labels: {
      show: true
  },
  categories: monthlyChartDataTemp.categories
}
}

var renderedDailyChartTemp = new ApexCharts(document.querySelector("#dailyChartTemp"), dailyChartDataOptionsTemp);
renderedDailyChartTemp.render();

var renderedWeeklyChartTemp = new ApexCharts(document.querySelector("#weeklyChartTemp"), weeklyChartDataOptionsTemp);
renderedWeeklyChartTemp.render();

var renderedMonthlyChartTemp = new ApexCharts(document.querySelector("#monthlyChartTemp"), monthlyChartDataOptionsTemp);
renderedMonthlyChartTemp.render();


const temperatureGraphSelection = document.querySelector('#temperatureGraphSelection');

temperatureGraphSelection.addEventListener('change', (event) => {
  let selectedChart = event.target.value;
  if (selectedChart == "dailyChartOptionTemp") {
    dailyChartTemp.style.display="block";
    weeklyChartTemp.style.display="none";
    monthlyChartTemp.style.display="none"
  }
  else if(selectedChart == "weeklyChartOptionTemp") {
    dailyChartTemp.style.display="none";
    weeklyChartTemp.style.display="block";
    monthlyChartTemp.style.display="none"
  }
  else if(selectedChart == "monthlyChartOptionTemp") {
    dailyChartTemp.style.display="none";
    weeklyChartTemp.style.display="none";
    monthlyChartTemp.style.display="block"
  }
});

// RAIN


