



// TEMPERATURE
// const dailyChartTemp = document.getElementById("dailyChartTemp");
const weeklyChartTemp = document.getElementById("weeklyChartTemp");
const monthlyChartTemp= document.getElementById("monthlyChartTemp");

const temperatureGraphSelection = document.querySelector('#GraphSelection_temperature');

temperatureGraphSelection.addEventListener('change', (event) => {
  let selectedChart = event.target.value;
  if (selectedChart == "dailyChartOptionTemp") {
    dailyChartTemp.style.display="block";
    weeklyChartTemp.style.display="none";
    monthlyChartTemp.style.display="none";
  }
  else if(selectedChart == "weeklyChartOptionTemp") {
    dailyChartTemp.style.display="none";
    weeklyChartTemp.style.display="block";
    monthlyChartTemp.style.display="none";
  }
  else if(selectedChart == "monthlyChartOptionTemp") {
    dailyChartTemp.style.display="none";
    weeklyChartTemp.style.display="none";
    monthlyChartTemp.style.display="block";
  }
});

// RAIN