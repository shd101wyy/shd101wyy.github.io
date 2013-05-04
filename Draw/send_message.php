<?php


	$send_message=$_POST['send_message'];
	
		
	$existed_content=file_get_contents('user_message.txt');
	
	$new_content=$existed_content.$send_message."\n";
	//$new_content=$send_message;
	file_put_contents('user_message.txt', $new_content);

	
	$return_array=array($send_message);
	echo json_encode($return_array);
?>