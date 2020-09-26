<?php

// this script will always at a time like this (23:00:00, 0:00:00 etc.)

function getHourlyAvg() {
require '../config/connectTodayDb.php';

$startTime = (date("H")-1) . ":00:00";
$endTime = date("H") . ":00:00";

$result = mysqli_query($conn,"SELECT AVG(temp_value) AS 'AverageTemp' FROM `temp` WHERE temp_time BETWEEN '".$startTime."' AND '".$endTime."'");

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    return $row["AverageTemp"];
  }
}
}

function writeToDb() {
require '../config/connectPernamentDb.php';

$temp_avg_value = round(getHourlyAvg(),2);

$start_time = (date("H")-1) . ":00:00";
$end_time = date("H") . ":00:00";
$date = date('Y-m-d');

if ($start_time == '23:00:00') {
  $date = date_create(date("Y-m-d"));
  date_sub($date, date_interval_create_from_date_string('1 days'));
  $date = date_format($date, 'Y-m-d');
}

$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_start_time, temp_end_time, temp_avg_value) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $date, $start_time, $end_time, $temp_avg_value);
$stmt->execute();
echo "Temp wrote successfully \n";
}

writeToDb();

?>