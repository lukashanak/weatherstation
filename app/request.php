<?php
// request.php
$data['temp'] = round(shell_exec("sudo python ../getSensorValue/temp.py"), 3);
$data['pressure'] = round(shell_exec("sudo python ../getSensorValue/pressure.py"), 3);
$data['humidity'] = round(shell_exec("sudo python ../getSensorValue/humidity.py"), 3);
$data['light'] = round(shell_exec("sudo python ../getSensorValue/light.py"), 3);
sleep(1);
$data['rain'] = round(shell_exec("sudo python ../getSensorValue/rain.py"), 3);
echo json_encode($data);
?>
