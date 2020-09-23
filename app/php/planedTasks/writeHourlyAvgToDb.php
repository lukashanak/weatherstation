<?php

function getHourlyAvg() {
require '../config/connectTodayDb.php';

$startTime = (date("H")-1) . ":00:00";
$endTime = date("H") . ":00:00";

/*
$startTime = (date("H")) . ":00:00";
$endTime = (date("H")+1 ). ":00:00";
*/

$result = mysqli_query($conn,"SELECT AVG(temp_value) AS 'AverageTemp' FROM `temp` WHERE temp_time BETWEEN '".$startTime."' AND '".$endTime."'");

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    return $row["AverageTemp"];
  }
}
}



function writeToDb() {
require '../config/connectPernamentDb.php';
$temp = round(getHourlyAvg(),2);
$date = date('Y-m-d');
$time = date("H:00:00"); 

$stmt = $conn->prepare("INSERT INTO temperature (temp_date, temp_time, temp_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);
$stmt->execute();
echo "Temp wrote successfully \n";
}

writeToDb();

?>