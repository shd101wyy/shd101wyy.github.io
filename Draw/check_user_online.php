<?php
	// save user name to public_room_now_online_user.txt
	$room_name='public_room_now_online_user.txt';
	$user_name=$_POST['user_name'];
	
	$content_in_file=file_get_contents($room_name);
	
	$same_online=false;
	
	$piece=explode("\n", $content_in_file);
	$i=0;
	$length_of_piece=count($piece);
	if($length_of_piece!=0){
		for($i=0;$i<$length_of_piece;$i++){
			if($piece[$i]==$user_name){
				$same_online=true;
				break;
			}
		}	
	}
	$return_array=array();
	array_push($return_array, $same_online);
	
	echo json_encode($return_array);
?>