<?php
// request.php
$data['temp'] = round(shell_exec("sudo python temp.py"), 3);
$data['pressure'] = round(shell_exec("sudo python pressure.py"), 3);
$data['humidity'] = round(shell_exec("sudo python humidity.py"), 3);
echo json_encode($data);
?>
