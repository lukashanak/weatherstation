<?php
require '../../config/connectPernamentDb.php';

$date = date('Y-m-d');
$result = mysqli_query($conn,"SELECT value, time, date FROM `light` WHERE date = '".$date."' ");

$tempToday = array();

if ($result->num_rows > 0) {
  $i = 0;
    while($row = $result->fetch_assoc()) {
      $tempToday[$i] = ($row["value"] . ", " . $row["date"] . ", " . $row["time"]);
      $i++;
    }
  }
echo json_encode($tempToday);

$conn->close();

?>
