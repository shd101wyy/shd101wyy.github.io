<?php

	// remove cookie
	setcookie("user_name", "", time()-60,'/');
  	setcookie("password", "", time()-60,'/' );
	  	
	  	
	$user_name=$_POST['user_name'];
	
	// check whether user name is valid
  	if(strpos($user_name, " ")){
	  echo("<script>alert('Invalid User Name.. No space allowed')</script>");

	  $url = "../sign_up.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  	
  	}
	
	$password=$_POST['password'];
	if(strlen($password)<4){
	  echo("<script>alert('Invalid Password.. Need at least 4 letters')</script>");

	  $url = "../sign_up.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  
	}

	// crypt password
	// salt is user_name
	$hashed_password = crypt($password, $user_name);
	
	
	// check whether same user name existed
	$user_name_in_file=file_get_contents("./user_name.txt");
	$user_name_pieces = explode("\n", $user_name_in_file);
	$array_length=count($user_name_pieces);	
	$has_same_user_name=false;
	
	for ($i=0; $i<$array_length; $i++)
    {
    	//echo "user_name " . $user_name_pieces[$i] . "<br>";
    	if ($user_name_pieces[$i]==$user_name){
    		$has_same_user_name=true;
    		break;
    	}
    }
    
    // has same name
    if($has_same_user_name){
  	  echo("<script>alert('Sorry, User Name already existed')</script>");

	  $url = "../sign_up.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  	
	}
  
  	// does not have same name
  	// save user name to user_name.txt
  	// save user password to user_password.txt
  	
  	$user_name_in_file.=$user_name;
  	$user_name_in_file.="\n";
  	file_put_contents('./user_name.txt', $user_name_in_file);
  	
  	$user_password_in_file=file_get_contents('./user_password.txt');
  	$user_password_in_file.=$hashed_password;
  	$user_password_in_file.="\n";
  	file_put_contents('./user_password.txt', $user_password_in_file);
  	
  	// set cookie
  	setcookie("user_name", $user_name, time()+60*60*24*3 ,'/');
  	setcookie("password", $hashed_password, time()+60*60*24*3,'/' );
  	
  	print_r($_COOKIE);
  	//echo "<script>alert('User Name is ".$_COOKIE["user_name"]."')</script>";
  	
  	// make directory for user to save data
  	mkdir('./'.$user_name);
  	
  	// finish saving 
  	echo("<script>alert('Successfully Sign Up')</script>");

  	$url = "../index.php";
	echo "<script language='javascript' type='text/javascript'>";
	echo "window.location.href='$url'";
    echo "</script>";  	
  	
    
    
    


?>