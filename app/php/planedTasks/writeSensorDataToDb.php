<?php

function write() {
require 'connectDailyDb.php';

$temp = round(shell_exec("sudo python ../../../getSensorValue/temp.py"), 2);
$humidity = round(shell_exec("sudo python ../../../getSensorValue/humidity.py"), 3);
$isRaining = round(shell_exec("sudo python ../../../getSensorValue/isRaining.py"), 3);
$light = round(shell_exec("sudo python ../../../getSensorValue/light.py"), 3);
$pressure = round(shell_exec("sudo python ../../../getSensorValue/pressure.py"), 2);

$date = date('Y-m-d');
$time = date("H:i");

//  temp
$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_time, temp_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);;
$stmt->execute();
echo "Temp wrote successfully \n";

//  humidity
$stmt = $conn->prepare("INSERT INTO humidity (humidity_date, humidity_time, humidity_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $humidity);
$stmt->execute();
echo "Humidity wrote successfully \n";

// isRaining
$stmt = $conn->prepare("INSERT INTO isRaining (isRaining_date, isRaining_time, isRaining_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $isRaining);
$stmt->execute();
echo "isRaining wrote successfully \n";

// light
$stmt = $conn->prepare("INSERT INTO light (light_date, light_time, light_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $light);
$stmt->execute();
echo "Light sens wrote successfully \n";

// pressure
$stmt = $conn->prepare("INSERT INTO pressure (pressure_date, pressure_time, pressure_value) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $date, $time, $pressure);
$stmt->execute();
echo "Pressure wrote successfully \n";


}

while(true) {
  write();
  sleep( 30 );
}


?>

