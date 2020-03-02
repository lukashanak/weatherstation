<?php
// request.php
$data['temp'] = round(shell_exec("sudo python ./sensors/get_temp.py"), 3);
$data['pressure'] = round(shell_exec("sudo python ./sensors/get_pressure.py"), 3);
$data['humidity'] = round(shell_exec("sudo python ./sensors/get_humidity.py"), 3);
$data['light'] = round(shell_exec("sudo python ./sensors/get_light.py"), 3);
sleep(1);
$data['rain'] = round(shell_exec("sudo python ./sensors/get_rain.py"), 3);
echo json_encode($data);
?>
