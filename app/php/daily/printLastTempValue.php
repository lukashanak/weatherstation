<?php
require 'connectDailyDb.php';

$sql = "SELECT temp_value FROM temp ORDER BY temp_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["temp_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>