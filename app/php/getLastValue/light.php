<?php
require 'connectDailyDb.php';

$sql = "SELECT light_value FROM light ORDER BY light_id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["light_value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>