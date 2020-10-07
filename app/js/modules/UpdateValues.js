

//onload
updateTemp();

// update values like temp, pressure.. every 5 seconds
setInterval(
  function(){
  updateTemp();
  }
, 5000);

function updateTemp(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      DOMConfig_UpdateValues.temp.innerHTML=this.responseText;
    }
  };
  xhttp.open("GET", "./php/getLastValue/temp.php", true);
  xhttp.send();
}

