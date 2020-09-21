<?php
require 'connectPernamentDb.php';

$startTime = date("H");
$endTime = date("H")-1;

$result = mysqli_query($conn,"SELECT `temp_value` FROM `temp` WHERE temp_time BETWEEN '".$startTime."' AND '".$endTime."'");

$arrayOfValues = array(); // array which will contain all returned values
$index = 0;
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $arrayOfValues[$index] = $row["temp_value"];
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
      echo $arrayOfValues[$i];
      echo "\n";
  }
   echo round(($soucet / $delka),2);

?>

