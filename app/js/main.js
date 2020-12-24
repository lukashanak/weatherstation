import {renderChart} from './modules/RenderChart.js'
import {graphSwitching} from './modules/graphSwitching.js'

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
};

// render charts on loadout
renderChart("today","temp", DOMConfig_CreateCharts.today.temp);
renderChart("yesterday","temp", DOMConfig_CreateCharts.yesterday.temp);
renderChart("lastWeek","temp", DOMConfig_CreateCharts.lastWeek.temp);
renderChart("lastMonth","temp", DOMConfig_CreateCharts.lastMonth.temp);

renderChart("today", "pressure", DOMConfig_CreateCharts.today.pressure);
renderChart("yesterday","pressure", DOMConfig_CreateCharts.yesterday.pressure);
renderChart("lastWeek","pressure", DOMConfig_CreateCharts.lastWeek.pressure);
renderChart("lastMonth","pressure", DOMConfig_CreateCharts.lastMonth.pressure);

renderChart("today","humidity", DOMConfig_CreateCharts.today.humidity);
renderChart("yesterday","humidity", DOMConfig_CreateCharts.yesterday.humidity);
renderChart("lastWeek","humidity", DOMConfig_CreateCharts.lastWeek.humidity);
renderChart("lastMonth","humidity", DOMConfig_CreateCharts.lastMonth.humidity);

renderChart("today","light", DOMConfig_CreateCharts.today.light);
renderChart("yesterday","light", DOMConfig_CreateCharts.yesterday.light);
renderChart("lastWeek","light", DOMConfig_CreateCharts.lastWeek.light);
renderChart("lastMonth","light", DOMConfig_CreateCharts.lastMonth.light);

// add event listener to select lists --> made it able to switch between graphs
graphSwitching();