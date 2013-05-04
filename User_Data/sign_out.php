<?php

	// remove cookie
	setcookie("user_name", "", time()-60,'/');
  	setcookie("password", "", time()-60,'/' );
	  	
  	
  	// finish  
  	echo("<script>alert('Successfully Sign Out')</script>");

  	$url = "../index.php";
	echo "<script language='javascript' type='text/javascript'>";
	echo "window.location.href='$url'";
    echo "</script>";  	
  	
    
    
    


?>