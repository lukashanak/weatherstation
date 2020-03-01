<?php
// request.php
$data['temp'] = round(shell_exec("sudo python ./senzors/temp.py"), 3);
$data['pressure'] = round(shell_exec("sudo python ./sensors/pressure.py"), 3);
$data['humidity'] = round(shell_exec("sudo python ./sensors/humidity.py"), 3);
// $data['humidity'] = round(shell_exec("sudo python ./sensors/humidity.py"), 3);
// $data['humidity'] = round(shell_exec("sudo python ./sensors/humidity.py"), 3);
echo json_encode($data);
?>
