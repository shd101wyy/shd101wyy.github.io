<?php
	$user_name=$_POST['user_name'];
	
	// check whether user name is valid
  	if(strpos($user_name, " ")){
	  echo("<script>alert('Invalid User Name.. No space allowed')</script>");

	  $url = "../login.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  	
  	}
	
	$password=$_POST['password'];
	if(strlen($password)<4){
	  echo("<script>alert('Invalid Password.. Need at least 4 letters')</script>");

	  $url = "../login.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  
	}

	// crypt password
	$hashed_password = crypt($password);
	
	
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
    
    // does not has same name
    if(!$has_same_user_name){
  	  echo("<script>alert('Sorry, User Name or Password wrong')</script>");

	  $url = "../login.html";
	  echo "<script language='javascript' type='text/javascript'>";
	  echo "window.location.href='$url'";
      echo "</script>";  	
      
      	// remove cookie
	  	setcookie("user_name", "", time()-60,'/');
	  	setcookie("password", "", time()-60,'/' );
	}
  
  	// have same name
  	// begin to check password
  	$password_in_file=file_get_contents('./user_password.txt');
  	$password_pieces=explode("\n", $password_in_file);
  	
  	// wrong password
  	if($password_pieces[$i]!=crypt($password,$user_name)){
	  	echo("<script>alert('Sorry, User Name or Password wrong')</script>");


	  	$url = "../login.html";
	  	echo "<script language='javascript' type='text/javascript'>";
	  	echo "window.location.href='$url'";
	  	echo "</script>";  	
	  	
	  	// remove cookie
	  	setcookie("user_name", "", time()-60,'/');
	  	setcookie("password", "", time()-60,'/' );

  	}
  	
  	  	
  	// set cookie
  	setcookie("user_name", $user_name, time()+60*60*24*3 ,'/');
  	setcookie("password", $hashed_password, time()+60*60*24*3,'/' );
  	
  	print_r($_COOKIE);
  	//echo "<script>alert('User Name is ".$_COOKIE["user_name"]."')</script>";
  	
  	
  	// finish saving 
  	echo("<script>alert('Successfully Login')</script>");

  	$url = "../index.php";
	echo "<script language='javascript' type='text/javascript'>";
	echo "window.location.href='$url'";
    echo "</script>";  	
  	
    
    
    


?>