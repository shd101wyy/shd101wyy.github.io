
		<?php
			if ($_POST['postit'])
				echo("GET POST");
			$post_message=$_POST['postit'];
			$saved_latitude=$_POST['saved_latitude'];
			$saved_longitude=$_POST['saved_longitude'];

			echo("<br>Post Message---><br>");
			echo($post_message."   ".$saved_latitude."   ".$saved_longitude);
			
			$file = "./test.txt";
			$existed_string=file_get_contents("./test.txt");
			
			$save_message.="\n";
			$save_message.=$post_message;
			$save_message.=" _@##@_ ";
			$save_message.=$saved_longitude;
			$save_message.=" _@##@_ ";
			$save_message.=$saved_latitude;
			
			$existed_string .= $save_message;
			file_put_contents($file, $existed_string);
			
			echo("<br>Now In File---><br>");
			echo(file_get_contents($file));
			
			$message_file="./user_message_data.txt";
			$location_file="./user_location_data.txt";
			
			
			$existed_message_content=file_get_contents($message_file);
			$message_string="\n";
			$message_string.=$post_message;
			$existed_message_content.=$message_string;
			file_put_contents($message_file, $existed_message_content);
			
			$existed_location_content=file_get_contents($location_file);
			$location_string="\n";
			$location_string.=$saved_longitude;
			$location_string.=" ";
			$location_string.=$saved_latitude;
			$existed_location_content.=$location_string;
			file_put_contents($location_file, $existed_location_content);

			
		?>

















