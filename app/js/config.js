var config = {
    sensors: ['temp', 'humidity', 'pressure', 'light'],
    ranges: ['today', 'yesterday', 'lastWeek', 'lastMonth'],
    todayDOM: {
      temp: document.getElementById("dailyChartTemp"),
    },
    yesterdayDOM: {

    }
  }

var DOMConfig_GraphSelection = {
  temp: document.getElementById("GraphSelection_temperature"),
  pressure: document.getElementById("GraphSelection_pressure"),
  humidity: document.getElementById("GraphSelection_humidity"),
  light: document.getElementById("GraphSelection_light")
}
