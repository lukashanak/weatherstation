<?php
// request.php

	$data['temp'] = shell_exec("python temp.py");
    $data['pressure'] = shell_exec("python pressure.py");
    $data['humidity'] = shell_exec("python humidity.py");
    echo json_encode($data);
?>