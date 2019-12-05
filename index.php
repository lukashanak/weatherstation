<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"><meta http-equiv="Content-Type">
        <title> Počasí | Teplota, tlak, vlhkost</title>
        <link rel="stylesheet" type="text/css" href="./style.css">

    </head>
    <body>

<div class="app">
    <table class="center">
      <tbody>
        <tr>
          <th colspan="2"> 
            Teplota
          </th>
        </tr>
        <tr> 
          <td colspan="2">
            <div id="temp"></div>
           20 &#8451
          </td>
        </tr>

        <tr>
          <th width="50%"> 
            Tlak
          </th>
          <th width="50%"> 
            Vlhkost
          </th>
        </tr>
          <td >
            <div id="pressure"></div>
           20 hPa
          </td>
          <td colspan="2">
            <div id="humidity"></div>
           20 %
          </td>
        <tr>

        </tr>
      </tbody>
    </table>
</div>


<div class="podekovani">
  <p>Vytvořil: <a href="#"> Zdeněk Grůza </a>, <a href="#"> Lukáš Hanák </a> </p>
  <p> Učitel: <a href="#">Ing. Petr Minařík </a> </p>
</div>

        <script src="script.js"></script>
    </body>

<script>
  setInterval(function(){GetData();}, 10000);
function GetData(){
  $.ajax(
  'request.php',
  {
      success: function(data) {
        var DATA = jQuery.parseJSON(data) //json_decode(data, true );
        $('#temp').html(DATA.temp);
        $('#pressure').html(DATA.pressure);
        $('#humidity').html(DATA.humidity);
      },
      error: function() {
        alert('God Damn Error');
      }
   }
  );
}

</script>

</html>
