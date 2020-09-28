<?php

// this script will always at a time like this (23:00:00, 0:00:00 etc.)

function getHourlyAvg($sensor) {
require '../config/connectTodayDb.php';

$startTime = (date("H")-1) . ":00:00";
$endTime = date("H") . ":00:00";

switch ($sensor) {
  case 'temp':
  $result = mysqli_query($conn,"SELECT AVG(temp_value) AS 'avg' FROM `temp` WHERE temp_time BETWEEN '".$startTime."' AND '".$endTime."'");
    break;
  case 'humidity':
    $result = mysqli_query($conn,"SELECT AVG(humidity_value) AS 'avg' FROM `humidity` WHERE humidity_time BETWEEN '".$startTime."' AND '".$endTime."'");
    break;
  case 'pressure':
    $result = mysqli_query($conn,"SELECT AVG(pressure_value) AS 'avg' FROM `pressure` WHERE pressure_time BETWEEN '".$startTime."' AND '".$endTime."'");
    break;
  case 'light':
    $result = mysqli_query($conn,"SELECT AVG(light_value) AS 'avg' FROM `light` WHERE light_time BETWEEN '".$startTime."' AND '".$endTime."'");
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

$start_time = (date("H")-1) . ":00:00";
$end_time = date("H") . ":00:00";
$date = date('Y-m-d');

if ($start_time == '23:00:00') {
  $date = date_create(date("Y-m-d"));
  date_sub($date, date_interval_create_from_date_string('1 days'));
  $date = date_format($date, 'Y-m-d');
}

// temp
$stmt = $conn->prepare("INSERT INTO temp ('date', start_time, end_time, temp_avg_value) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $date, $start_time, $end_time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";

/*
// humidity
$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_start_time, temp_end_time, temp_avg_value) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $date, $start_time, $end_time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";

// pressure
$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_start_time, temp_end_time, temp_avg_value) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $date, $start_time, $end_time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";

// light
$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_start_time, temp_end_time, temp_avg_value) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $date, $start_time, $end_time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";
*/

}


writeToDb();

?>