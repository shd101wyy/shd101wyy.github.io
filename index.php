

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PlanetWalley</title>
 <!-- Metro UI CSS -->
        <link href="./metro_ui_css/css/modern.css" rel="stylesheet" type="text/css">
        <link href="./metro_ui_css/css/modern-responsive.css" rel="stylesheet" type="text/css">
        <link href="./metro_ui_css/css/theme-dark.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="./metro_ui_css/javascript/accordion.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/buttonset.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/carousel.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/dropdown.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/input-control.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/pagecontrol.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/rating.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/slider.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/tile-drag.js"></script>
        <script type="text/javascript" src="./metro_ui_css/javascript/tile-slider.js"></script>

        <!-- JQuery -->
        <script type="text/javascript" src="./jquery.min.js"></script>


        <!-- Check User Login -->
		
        <style type="text/css">
	        #apDiv1 {
				position: absolute;
				width: 30%;
				height: 40%;
				z-index: 1;
				left: 40%;
				top: 20%;
				}
			html, body{
				width:100%;
				height:100%;
				margin:0;
				padding:0;
				background:transparent;
			}
			
			#sign_up, #sign_out{
				position: absolute;
				left: 80%;
				top:20%;
				background-color: #73dbdd;
				font-weight: 800;
			}
			
			#login{
				position: absolute;
				left: 90%;
				top:20%;
				background-color:  #73dbdd;
				font-weight: 800;
			}
			
			#welcome{
				position: absolute;
				top:60%;
				left: 80%;
			}
			
        </style>
</head>

<body style="background-color:#FFF;">

    <?php
			
			$has_login=false;
			if (isset($_COOKIE["user_name"])){
				$to_run="$('#welcome').html('Welcome ". $_COOKIE["user_name"]." !');";
				
				$has_login=true;
				
				
			}
			else{
						
				}
		
	?>
	
	<div class="nav-bar">
    	<div class="nav-bar-inner padding10">
        	<span>
			<img src="./planetwalley.png" width="50" height="50" class="place-left" >  
	          	<h4>
            		Planet Walley
                </h4>
                
          </span>
        
      </div>
    </div>
    
	<div class="page secondary" style="background-color:#2D89EF;">
        <div class="page-header">
            <div class="page-header-content" style="background-color:#F90;">
            	<h1 style="font-weight:400"> Planet Walley </h1>
            	
            	<?php
            	
            		// has_login
            		if($has_login){
            			echo '<h3 id="welcome"> Welcome Guest ! </h3>';
            			echo '<button id="sign_out">sign out</button>';
            			echo "<script>";
            			echo $to_run;
            			echo "</script>";
            		}
            		// guest mode
            		else{
	            		echo '<button id="sign_up">sign up</button>';
	            		echo '<button id="login">login</button>';
	            		echo '<h3 id="welcome"> Welcome Guest ! </h3>';

            		}
            	
            	?>
            	
            	
				<br/>     
                
          </div>
        </div>
 
      <div class="page-region">
      
            <div class="page-region-content">
                <ul class="listview">
                	<h2> On Going Project </h2>
                	<!--  Walley Language  -->
                    <li style="background-color:#90F" onclick="location.href='./WalleyLanguage/index.html'">
                        <div class="icon">
                            <img src="walleylanguage.png" />
                        </div>
                        <div class="data">
                            <h4>Walley Language</h4>
                            <p style="color:#FFF">walley language is a simple script language</p>
                        </div>
                    </li>
                    
                    <!--  Chemical Equation Balancer  -->
                    <li style="background-color:#54DC44" onclick="location.href='./ChemicalEquationBalancer/index.html'">
                        <div class="icon">
                            <img src="chemicalequationbalancer.png" />
                        </div>
                        <div class="data">
                            <h4>Chemical Equation Balancer</h4>
                            <p style="color:#FFF">Help balance chemical equation</p> 
                        </div>
                    </li>
                    
                     <!--  Post It  -->
                    <li style="background-color:#E36460" onclick="location.href='./PostIt/index.html'">
                        <div class="icon">
                            <img src="postit.png" />
                        </div>
                        <div class="data">
                            <h4>Post It!</h4>
                            <p style="color:#FFF">Post it is an augmented social network software</p>
                        </div>
                    </li>
                    
                      <!--  Weden World  -->
                    <li style="background-color:#D1D9E3" onclick="location.href='./WedenWorld/index.html'">
                        <div class="icon">
                            <!--<img src="postit.png" />-->
                        </div>
                        <div class="data">
                            <h4>Weden World</h4>
                            <p style="color:#FFF">Weden World is a game....</p>
                        </div>
                    </li>
                    
                      <!--  Draw  -->
                    <li style="background-color:#AEDBF2" onclick="location.href='./Draw/index.php'">
                        <div class="icon">
                            <!--<img src="postit.png" />-->
                        </div>
                        <div class="data">
                            <h4>Draw</h4>
                            <p style="color:#FFF">Draw is a remote tool</p>
                        </div>
                    </li>
                    
      		  </ul>
              
              <div id="apDiv1" class="tile" style="background-color:#666">
              	<div class="tile-content">
                	<h2> Members(temp):<br/> ---------- </h2>
                    <p> Yiyi Wang </p>
                    <p> Aaron Lin</p>
                    <p> Yibo Guo </p>
                    <p> CY </p>
                    <p> Henry Hao </p>
                    <p> Xun(Raphael) Yu </p>

                </div>
              </div>
              
              
              
        </div>
            
            
      </div>
    </div>

    <script>
    	$("#sign_up").click(function(){
	    	window.location.href='./sign_up.html';
    	});
    	
    	$("#sign_out").click(function(){
	    	window.location.href="./User_Data/sign_out.php";
    	});
    	
    	
    	$("#login").click(function(){
	    	window.location.href='./login.html';
    	});
    	
    	
    	
    </script>
    
        
</body>
</html>
