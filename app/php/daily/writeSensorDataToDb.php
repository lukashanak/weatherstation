<?php

function writeTemp() {
require 'connectDailyDb.php';
// get values from the sensors and save them
$temp = round(shell_exec("sudo python ../../../getSensorValue/temp.py"), 3);
// prepare and bind
$stmt = $conn->prepare("INSERT INTO temperature_today (temp_date, temp_time, temp_value) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $date, $time, $temp);
// date or time values
$date = date('Y-m-d');
$time = date("H:i");
// execute
$stmt->execute();
echo "New record created successfully";
}

// run function writeTemp() every 30 sec
while( true ) {

  writeTemp();
  sleep( 30 );

}


?>

