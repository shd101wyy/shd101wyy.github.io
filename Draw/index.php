<html>
	<head>
		<title> Draw </title>
		 <!-- Metro UI CSS -->
        <link href="../metro_ui_css/css/modern.css" rel="stylesheet" type="text/css">
        <link href="../metro_ui_css/css/modern-responsive.css" rel="stylesheet" type="text/css">
        <link href="../metro_ui_css/css/theme-dark.css" rel="stylesheet" type="text/css">
        </style>
        <script type="text/javascript" src="../metro_ui_css/javascript/accordion.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/buttonset.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/carousel.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/dropdown.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/input-control.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/pagecontrol.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/rating.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/slider.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/tile-drag.js"></script>
        <script type="text/javascript" src="../metro_ui_css/javascript/tile-slider.js"></script>
        
        <!-- JQuery -->
        <script type="text/javascript"	src="../jquery.min.js"></script>
        <script type="text/javascript"	src="../jquery.cookie.js"></script>

	</head>
	<body>
					

		<style type="text/css">
		
			html, body{
				width:100%;
				height:100%;
				margin:0;
				padding:0;
				background-color: white;
			}
			
			#information_div{
				background-color: #25abb9;
				position: absolute;
				height: 100%;
				width: 30%;
				left: 70%;
				top:0%;
			}
			
			#painting_canvas{
				position: absolute;
				width: 90%;
				left: 5%;
				height: 90%;
				top:5%;
				
			}
			
			#draw_div{
				background-color: #953939;
				position: absolute;
				height: 100%;
				width: 70%;
				left: 0%;
				top:0%;
			}
			
			#chat_information{
				position: absolute;
				height: 40%;
				width: 100%;
				top:0%;
				left: 0%
			}
			
			#chat_content{
				background-color: #f493e5;
				position: absolute;
				height: 60%;
				width: 100%;
				top:40%;
				left: 0%;
			}	
			
			#chat_area{
				height: 80%;
				width: 80%;
			}
		</style>
		<div id="draw_div">
			<iframe src="./content.html" id="painting_canvas">
			
			
			</iframe>
			
		</div>
		<div id="information_div">
			<iframe id="hidden_iframe" style="display:none"></iframe>
			
			<div id="chat_information">
				<h2> Chat Information </h2>
							            	
            		<!--
					<h4> &nbsp;&nbsp;&nbsp;&nbsp; user name </h4>
					<input id="name"> -->
					
					
					<!--<form action="./send_message.php" method="post" target="hidden_iframe">-->
								<?php
			            		$has_login=false;
			            		if (isset($_COOKIE["user_name"])){
				            		$to_run="$('#welcome').html('Welcome ". $_COOKIE["user_name"]." !');";
							
				            		$has_login=true;
							
				            		$judge="true";
				            	}
				            	else{
									$judge="false";
					            }
					            
					           	
	
				            		// has_login
				            		if($has_login){
				            			echo '<h3 id="welcome" name="welcome"> Welcome Guest ! </h3>';
				            			echo '<button id="sign_out">sign out</button>';
				            			echo "<script>";
				            			echo $to_run;
				            			echo "var custom_name=".$_COOKIE["user_name"];
				            			echo "</script>";
				            		}
				            		// guest mode
				            		else{
				            			
					            		echo '<button id="sign_up">sign up</button>';
					            		echo '<button id="login">login</button>';
					            		echo '<button id="sign_out">quit</button>';
					            		echo '<label id="welcome" name="welcome"> Welcome Guest ! </label>';
				
					            		echo '<script>';
					            		// temp_user_name existed
					            		if (isset($_COOKIE["temp_user_name"])){
					            			echo 'var custom_name ='.$_COOKIE["temp_user_name"];
					            			$judge="true";
					            		}
					            		else{
					            			echo 'var custom_name = prompt("Enter your chat name:", "Guest");';
					            		}
					            		$temp='$("#welcome").html("Welcome "+custom_name+" !")';
					            		echo $temp;
					            		echo '</script>';
				            		}
			            		
			            	
			            	?>
			            	<h4 id="online_num"> Online: 0 </h4>
		     				<h4> &nbsp;&nbsp;&nbsp;&nbsp; send message </h4>
							<input name="postit" id="postit" type="text">
							<input type="submit" value="Send Message" id="submit">
					<!--</form>-->
				
			</div>
			<div id="chat_content">
				<h2> Chat Content </h2>
				<textarea id="chat_area" readonly="">Initializing .... </textarea>
			</div>
		</div>
		
		
		
		<script type="text/javascript">

			// check whether is_walley_user
			var is_walley_user= "<?php echo $judge ?>";
			if(is_walley_user=="true"){
				is_walley_user=true;
			}
			else{
				is_walley_user=false;
			}
		
			
			// save user name to room
			// and set cookie
			var Save_User_Name=function(){
				
					// load user name to public_room_now_online_user.txt
				$.ajax(
					{
						type:'POST',
						url:'./save_user_to_room.php',
						data:'user_name='+custom_name,
						dataType: 'json',
						success: function(data){
							//alert("Successfully init");
						},
						error:function(){
							alert("Error.. Cannot save user name");
						}
					}
				);
			}
			
			// check whether user online
			var Check_Same_User_Online=function(user_name){
				// check whether same user online
				$.ajax(
					{
						type:'POST',
						url:'./check_user_online.php',
						data:'user_name='+user_name,
						dataType: 'json',
						success: function(data){
							var same_online=data[0];
							if(same_online){
								//alert("Same User Name already Online");
								return true;
							}
							else{
								return false;
							}
						},
						error:function(){
							alert("Error.. Cannot judge whether same user exist");
							return true;
						}
					}
				);
			};
			
			
			
			// remove user and make he/her online
			var Remove_User_Online=function(user_name){
				// check whether same user online
				$.ajax(
					{
						type:'POST',
						url:'./remove_user_online.php',
						data:'user_name='+user_name,
						dataType: 'json',
						success: function(data){
							alert("Successfully logout");
							window.location.href="../index.php";
						},
						error:function(){
							alert("Error.. Cannot remove online user");
							
						}
					}
				);
			}
			
			
			
			
			if(is_walley_user==false){
				if(!Check_Same_User_Online(custom_name)){
					Save_User_Name();
				}
				else{
					alert("Same User Name already Online");
					window.location.reload();
				}
			}
			else{
			}
					
			
			
        	
			
			$(function(){
				setInterval(update, 1000);
			});
			
			// update from user_message.txt
			var update=function(){
				
				$.ajax(
					{
						url:'process.php',
						type: 'POST',
						//data: 'id=testdata',
						dataType : 'json',
						success:function(data){
							
							var previous_chat_content=$("#chat_area").val();
							
							
							var chat_content=data[0];
							
							var online_num_string="Online: "+data[1];
							$("#online_num").html(online_num_string);
							// new content
							if(previous_chat_content!=chat_content){
								$("#chat_area").html(chat_content);
							
								// auto go bottom
								var chat_area=document.getElementById("chat_area");
								chat_area.scrollTop = chat_area.scrollHeight;
							}
							else{
								// same content
							}
						},
						error:function(){
							alert("Error");
						}
						
					}
				);
				
								
				
			}
			
			$("#send_message").click(function(){
				alert("Clicked Button");
				
				$("#hidden_iframe").load("./send_message.php");
			});
			
			$("#sign_up").click(function(){
	    		window.location.href='../sign_up.html';
	    	});
	    	
	    	$("#sign_out").click(function(){
		    	//window.location.href="../User_Data/sign_out.php";
		        document.cookie = "temp_user_name" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		        document.cookie = "user_name" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		        
				alert("You are now offline.");
		        Remove_User_Online(custom_name);
		        
	    	});
	    	
	    	
	    	$("#login").click(function(){
		    	window.location.href='../login.html';
	    	});
	    	
	    	
	    	$("#submit").click(function(){
	    	
	    		var send_message=custom_name+" :  "+$("#postit").val();
		    	$.ajax(
		    	{	
			    	type:"POST",
			    	url:"./send_message.php",
			    	data:"send_message="+send_message,
			    	dataType: 'json',
			    	success:function(data){
			    		//alert(data[0]);
			    	},
			    	error:function(){
				    	alert("Error.. Can not send message");
			    	}
		    	}
		    	);
	    	});
		</script>
	
	</body>
</html>















