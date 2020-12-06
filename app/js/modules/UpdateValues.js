
var DOMConfig_UpdateValues = {
  temp: document.getElementById("actualValue_temp"),
  pressure: document.getElementById("actualValue_pressure"),
  humidity: document.getElementById("actualValue_humidity"),
  light: document.getElementById("actualValue_light"),
}

//onload
updateActualValue("temp");
updateActualValue("pressure");
updateActualValue("humidity");
updateActualValue("light");

// update values like temp, pressure.. every 5 seconds
setInterval(
  function(){
    updateActualValue("temp");
    updateActualValue("pressure");
    updateActualValue("humidity");
    updateActualValue("light");
  }
, 5000);

function updateActualValue(sensor){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      DOMConfig_UpdateValues[sensor].innerHTML=this.responseText;
      console.log();
    }
  };
  xhttp.open("GET", `./php/getLastValue/${sensor}.php`, true);
  xhttp.send();
}
