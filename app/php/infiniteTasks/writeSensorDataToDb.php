<?php

function write() {
require '../config/connectTodayDb.php';

$temp = round(shell_exec("sudo python ../../../getSensorValue/temp.py"), 2);
$humidity = round(shell_exec("sudo python ../../../getSensorValue/humidity.py"), 3);
$isRaining = round(shell_exec("sudo python ../../../getSensorValue/isRaining.py"), 3);
$light = round(shell_exec("sudo python ../../../getSensorValue/light.py"), 3);
$pressure = round(shell_exec("sudo python ../../../getSensorValue/pressure.py"), 2);

$date = date('Y-m-d');
$time = date("H:i");

//  temp
$stmt = $conn->prepare("INSERT INTO temp (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);
$stmt->execute();
echo "Temp wrote successfully \n";


//  humidity
$stmt = $conn->prepare("INSERT INTO humidity (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $humidity);
$stmt->execute();
echo "Humidity wrote successfully \n";


// isRaining - DOESN'T WORK YET!
/*
$stmt = $conn->prepare("INSERT INTO isRaining (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $isRaining);
$stmt->execute();
echo "isRaining wrote successfully \n";
*/

// light
$stmt = $conn->prepare("INSERT INTO light (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $light);
$stmt->execute();
echo "Light sens wrote successfully \n";

// pressure
$stmt = $conn->prepare("INSERT INTO pressure (date, time, value) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $date, $time, $pressure);
$stmt->execute();
echo "Pressure wrote successfully \n";


}

while(true) {
  write();
  sleep( 30 );
}


?>

