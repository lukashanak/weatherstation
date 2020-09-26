<?php
require 'connectDailyDb.php';

$sql = "SELECT isRaining_value FROM isRaining ORDER BY isRaining_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["isRaining_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>