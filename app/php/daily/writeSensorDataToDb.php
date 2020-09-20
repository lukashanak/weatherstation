<?php

function write() {
require 'connectDailyDb.php';
// get values from the sensors and save them
$temp = round(shell_exec("sudo python ../../../getSensorValue/temp.py"), 3);
$humidity = round(shell_exec("sudo python ../../../getSensorValue/humidity.py"), 3);
$isRaining = round(shell_exec("sudo python ../../../getSensorValue/isRaining.py"), 3);
$light = round(shell_exec("sudo python ../../../getSensorValue/light.py"), 3);
$pressure = round(shell_exec("sudo python ../../../getSensorValue/pressure.py"), 3);
// get date/time and save it for later
$date = date('Y-m-d');
$time = date("H:i");

// prepare and bind - TEMP
$stmt = $conn->prepare("INSERT INTO temp (temp_date, temp_time, temp_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);;
// execute
$stmt->execute();
echo "Temp wrote successfully \n";

// prepare and bind - HUMIDITY
$stmt = $conn->prepare("INSERT INTO humidity (humidity_date, humidity_time, humidity_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $humidity);
// execute
$stmt->execute();
echo "Humidity wrote successfully \n";

// prepare and bind - isRaining
$stmt = $conn->prepare("INSERT INTO isRaining (isRaining_date, isRaining_time, isRaining_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $isRaining);
// execute
$stmt->execute();
echo "isRaining wrote successfully \n";

// prepare and bind - light
$stmt = $conn->prepare("INSERT INTO light (light_date, light_time, light_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $light);
// execute
$stmt->execute();
echo "Light sens wrote successfully \n";

// prepare and bind - pressure
$stmt = $conn->prepare("INSERT INTO pressure (pressure_date, pressure_time, pressure_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $pressure);
// execute
$stmt->execute();
echo "Pressure wrote successfully \n";
}

// run function writeTemp() every 30 sec
while(true) {
  write();
  sleep( 30 );
}


?>

