var config = {
    sensors: ['temp', 'humidity', 'pressure', 'light'],
    ranges: ['today', 'yesterday', 'lastWeek', 'lastMonth'],
    todayDOM: {
      temp: document.getElementById("dailyChartTemp"),
    },
    yesterdayDOM: {
  
    }
  }

var DOMConfig_UpdateValues = {
  temp: document.getElementById("actualValueTemp"),
  pressure: document.getElementById("actualValuePressure"),
  humidity: document.getElementById("actualValueHumidity"),
  light: document.getElementById("actualValueLightSens"),
  rain: document.getElementById("actualValueRain"),
}
  

var DOMConfig_CreateCharts = {
      today: {
        
      },
      yesterday: {

      },
      lastWeek: {

      },
      lastMonth: {

      }
  }