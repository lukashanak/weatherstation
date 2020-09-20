<?php

require 'connectDailyDb.php';


$sql = "SELECT temp_value FROM temperature_today ORDER BY temp_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    if($row = $result->fetch_assoc()) {
      echo $row["temp_value"];
      $x = $row["temp_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();


// SELECT temp_value FROM temperature_1min ORDER BY temp_id DESC LIMIT 1

?>