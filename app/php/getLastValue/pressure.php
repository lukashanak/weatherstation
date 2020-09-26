<?php
require 'connectDailyDb.php';

$sql = "SELECT pressure_value FROM pressure ORDER BY pressure_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["pressure_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>