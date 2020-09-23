<?php

function getHourlyAvg() {
require '../config/connectTodayDb.php';

/*
$startTime = date("H")-1;
$endTime = date("H");
*/

$startTime = '12:00:00';
$endTime = '13:00:00';
$result = mysqli_query($conn,"SELECT AVG(temp_value) AS 'AverageTemp' FROM `temp` WHERE temp_time BETWEEN '".$startTime."' AND '".$endTime."'");

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    return $row["AverageTemp"];
  }
}
}

echo round(getHourlyAvg(),2);

/*
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
*/


?>