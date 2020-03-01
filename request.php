<?php
// request.php
$data['temp'] = round(shell_exec("sudo python ./senzors/get_temp.py"), 3);
$data['pressure'] = round(shell_exec("sudo python ./sensors/get_pressure.py"), 3);
$data['humidity'] = round(shell_exec("sudo python ./sensors/get_humidity.py"), 3);
// $data['humidity'] = round(shell_exec("sudo python ./sensors/humidity.py"), 3);
// $data['humidity'] = round(shell_exec("sudo python ./sensors/humidity.py"), 3);
echo json_encode($data);
?>
