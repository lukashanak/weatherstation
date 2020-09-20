<?php
require 'connectPernamentDb.php';

$sql = "SELECT * FROM temperature_today WHERE temp_time BETWEEN '12:00:00' AND '13:00:00'";
$result = $conn->query($sql);

$arrayOfValues = array(); // array which will contain all returned values
$index = 0;
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $arrayOfValues[$index] = $row["temp_value"];
      // echo "\r\n";
      $index+=1;
    }
  }  else {
    echo "0 results";
  }
  $conn->close();

  // get average value and return it
  $delka = sizeof($arrayOfValues);
  $soucet = 0;
  for ($i=0; $i<$delka; $i++) {
      $soucet+=$arrayOfValues[$i];
  }
  echo round(($soucet / $delka),2);

?>

