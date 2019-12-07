<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"><meta http-equiv="Content-Type">
        <title> Počasí | Teplota, tlak, vlhkost</title>
        <link rel="stylesheet" type="text/css" href="./style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js"></script>
  <script src="thermometer.js"></script>

    </head>
    <body>

<div class="app">
    <table class="center">
      <tbody>
        <tr><th colspan="2"> Teplota</th></tr>
        <tr> <td colspan="2">
              <span id="temp"> Načítám.. </span>
            </td>
        </tr>
        <tr><th width="50%"> Tlak</th><th width="50%"> Vlhkost</th>
        </tr>
        <td ><span id="pressure"> Načítám.. </span></td>
          <td colspan="2"><span id="humidity"> Načítám.. </span></td>
        <tr>

        </tr>
      </tbody>
    </table>
    <h3>Aktualizuji každé 3 sekundy</h3>
</div>


<div class="podekovani">
  <p>Vytvořil: <a href="https://github.com/zgruza" target="_blank"> Zdeněk Grůza </a>, <a href="https://github.com/lukashanak" target="_blank"> Lukáš Hanák </a> </p>
  <p> Učitel: <a href="#">Ing. Petr Minařík </a> </p>
</div>

    </body>

<script>
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
      },
      error: function() {
        alert('God Damn Error');
     }
   }
  );
}

</script>

</html>
