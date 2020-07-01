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