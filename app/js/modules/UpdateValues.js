

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
    }
  };
  xhttp.open("GET", `./php/getLastValue/${sensor}.php`, true);
  xhttp.send();
}

