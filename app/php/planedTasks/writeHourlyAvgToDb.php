<?php

// this script will always at a time like this (23:00:00, 0:00:00 etc.)

function getHourlyAvg($sensor) {
require '../config/connectTodayDb.php';

$startTime = (date("H")) . ":00:00";
$endTime = (date("H")) . ":05:00";
$date = date('Y-m-d');

switch ($sensor) {
  case 'temp':
  $result = mysqli_query($conn,"SELECT AVG(value) AS 'avg' FROM `temp` WHERE time BETWEEN '".$startTime."' AND '".$endTime."' AND date = '".$date."' ");
    break;
  case 'humidity':
    $result = mysqli_query($conn,"SELECT AVG(value) AS 'avg' FROM `humidity` WHERE time BETWEEN '".$startTime."' AND '".$endTime."' AND date = '".$date."'");
    break;
  case 'pressure':
    $result = mysqli_query($conn,"SELECT AVG(value) AS 'avg' FROM `pressure` WHERE time BETWEEN '".$startTime."' AND '".$endTime."' AND date = '".$date."'");
    break;
  case 'light':
    $result = mysqli_query($conn,"SELECT AVG(value) AS 'avg' FROM `light` WHERE time BETWEEN '".$startTime."' AND '".$endTime."' AND date = '".$date."'");
    break;
}

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    return $row["avg"];
  }
}

}

function writeToDb() {  
require '../config/connectPernamentDb.php';

$temp_avg_value = round(getHourlyAvg('temp'),2);
$humidity_avg_value = round(getHourlyAvg('humidity'),2);
$pressure_avg_value = round(getHourlyAvg('pressure'),2);
$light_avg_value = round(getHourlyAvg('light'),2);
// $isRaining_avg_value is missing because it doesn't work yet

//$time = (date("H")) . ":00:00";
$time = (date("H")) . ":00:00";
$date = date('Y-m-d');

// temperature
$stmt = $conn->prepare("INSERT INTO temp (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";


// humidity
$stmt = $conn->prepare("INSERT INTO humidity (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $humidity_avg_value);
$stmt->execute();
echo "humidity wrote successfully \n";

// pressure
$stmt = $conn->prepare("INSERT INTO pressure (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $pressure_avg_value);
$stmt->execute();
echo "pressure wrote successfully \n";

// light
$stmt = $conn->prepare("INSERT INTO light (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $light_avg_value);
$stmt->execute();
echo "light wrote successfully \n";


}


writeToDb();

?>