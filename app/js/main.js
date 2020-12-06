import {renderChart} from './modules/CreateCharts.js'


// ID of HTML elements for showing graphs
const DOMConfig_CreateCharts = {
    today: {
      temp: "dayChart_temp",
      pressure: "dayChart_pressure",
      humidity: "dayChart_humidity",
      light: "dayChart_light"
    },
    yesterday: {
      temp: "yesterdayChart_temp",
      pressure: "yesterdayChart_pressure",
      humidity: "yesterdayChart_humidity",
      light: "yesterdayChart_light"
    },
    lastWeek: {
      temp: "weekChart_temp",
      pressure: "weekChart_pressure",
      humidity: "weekChart_humidity",
      light: "weekChart_light"
    },
    lastMonth: {
      temp: "monthChart_temp",
      pressure: "monthChart_pressure",
      humidity: "monthChart_humidity",
      light: "monthChart_light"
    }
}

// render charts on loadout
renderChart("yesterday","temp", DOMConfig_CreateCharts.today.temp);
renderChart("lastWeek","temp", DOMConfig_CreateCharts.lastWeek.temp);

/*
renderChart("yesterday", "pressure", DOMConfig_CreateCharts.today.pressure);
renderChart("yesterday","humidity", DOMConfig_CreateCharts.today.humidity);
renderChart("yesterday","light", DOMConfig_CreateCharts.today.light);
*/