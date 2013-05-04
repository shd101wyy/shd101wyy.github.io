<?php
	// update php every second
	// check update
	
	
	$chat_content=file_get_contents("./user_message.txt");
	$chat_content="Successfully init chat room\n".$chat_content;
	$chat_content.="\n\n\n\n\n\n";
	
	
	// check online people number
	$user_content=file_get_contents('./public_room_now_online_user.txt');
	$piece=explode("\n", $user_content);
	$piece=array_unique($piece);
	$array_length=count($piece);
	
	
	$return_array=array();
	array_push($return_array, $chat_content);
	array_push($return_array,$array_length);
	
	echo json_encode($return_array);

?>