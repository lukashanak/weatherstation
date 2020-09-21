<?php
require 'connectDailyDb.php';

$sql = "SELECT humidity_value FROM humidity ORDER BY humidity_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["humidity_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>