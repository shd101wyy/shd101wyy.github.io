<?php
	// save user name to public_room_now_online_user.txt
	$room_name='public_room_now_online_user.txt';
	$user_name=$_POST['user_name'];
	
	$content_in_file=file_get_contents($room_name);
	
	$new_content=$content_in_file.$user_name;
	$new_content.="\n";
	file_put_contents($room_name, $new_content);
		
	echo json_encode(null);
?>