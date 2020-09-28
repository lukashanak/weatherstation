<?php
require '../config/connectTodayDb.php';

$sql = "SELECT value FROM pressure ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    if($row = $result->fetch_assoc()) {
      echo $row["value"];
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>