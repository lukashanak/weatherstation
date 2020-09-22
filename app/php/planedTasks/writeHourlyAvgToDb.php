<?php

function getHourlyAvg() {
require '../config/connectTodayDb.php';
$startTime = date("H")-1;
$endTime = date("H");
/*
$startTime = '21:00:00';
$endTime = '22:00:00';
*/
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
  // get average value and return it
  $delka = sizeof($arrayOfValues);
  $soucet = 0;
  for ($i=0; $i<$delka; $i++) {
      $soucet+=$arrayOfValues[$i];
  }
   return round(($soucet / $delka),2);
}

function writeToDb() {
require '../config/connectPernamentDb.php';
$temp = getHourlyAvg();
$date = date('Y-m-d');
$time = date("H:i");

$stmt = $conn->prepare("INSERT INTO temperature (temp_date, temp_time, temp_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);;
$stmt->execute();
echo "Temp wrote successfully \n";
echo $temp;
}


writeToDb();
?>

