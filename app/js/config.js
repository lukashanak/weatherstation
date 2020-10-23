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
  light: document.getElementById("actualValueLight"),
}

var DOMConfig_GraphSelection = {
  temp: document.getElementById("GraphSelection_temperature"),
  pressure: document.getElementById("GraphSelection_pressure"),
  humidity: document.getElementById("GraphSelection_humidity"),
  light: document.getElementById("GraphSelection_light")
}

var DOMConfig_CreateCharts = {
      today: {
        temp: "tempChartToday",
        pressure: "pressureChartToday",
        humidity: "humidityChartToday",
        light: "lightChartToday"

      },
      yesterday: {

      },
      lastWeek: {

      },
      lastMonth: {

      }
  }
