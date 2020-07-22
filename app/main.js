
/*
setInterval(
    function(){
      GetData();
    }
  , 3000);

function GetData(){
  //console.log("Aktualizovano");
  $.ajax(
  'request.php',
 {
      success: function(data) {
        var DATA = jQuery.parseJSON(data) //json_decode(data, true );
       $('#temp').html((DATA.temp).toFixed(2) + "  &#8451;");
       $('#pressure').html(DATA.pressure + " hPa");
       $('#humidity').html(DATA.humidity + " %");
       $('#light').html(DATA.light);
       $('#rain').html(DATA.rain);
      },
      error: function() {
        alert('God Damn Error');
     }
   }
  );
}

*/


// TEMPERATURE
const showGraphTemperature = document.getElementById("showGraphTemperature");
const tepmeratureGraph = document.getElementById("temperatureGraph")


var options = {
  colors:['#F44336'],
  title: {
    text: 'Graf teploty za posledních 24 hodin',
    align: 'center'
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
    name: 'Teplota',
    data: ["3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "3°C", "35C", "0C", "5C", "10C", "15C", "20C", "30C", "18C", "20C", "14C", "15C", "0C"]
  }],
  xaxis: {
    labels: {
      show: false
  },
  categories: ["1:00 hod.", "2:00 hod.", "3:00 hod.", "4:00 hod.", "5:00 hod.", "6:00 hod.", "7:00 hod.", "8:00 hod.", "9:00 hod.", "10:00 hod.", "11:00 hod.", "12:00 hod.", "13:00 hod.", "14:00 hod.", "15:00 hod.", "16:00 hod.", "17:00 hod.", "18:00 hod.", "19:00 hod.", "20:00 hod.", "21:00 hod.", "22:00 hod.", "23:00 hod.", "24:00 hod."],
}
}

var chart = new ApexCharts(document.querySelector("#temperatureGraph"), options);

chart.render();



// RAIN
