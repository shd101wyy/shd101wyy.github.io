// JavaScript Document
<!-- Walley Geolocation -->
var walley_geolocation=[];
var walley_geolocation_outputStr="";
var showPosition=function(pos)
		{
		walley_geolocation_outputStr =
			"latitude:"+ pos.coords.latitude +"<br>"+
			"longitude:"+ pos.coords.longitude +"<br>"+
			"accuracy:"+ pos.coords.accuracy +"<br>"+
		
			"altitude:"+ pos.coords.altitude +"<br>"+
			"altitudeAccuracy:"+ pos.coords.altitudeAccuracy +"<br>"+
			"heading:"+ pos.coords.heading +"<br>"+
			"speed:"+ pos.coords.speed +"";	
			
		walley_geolocation=new Array();
		walley_geolocation["latitude"]=pos.coords.latitude;
		walley_geolocation["longitude"]=pos.coords.longitude;
		walley_geolocation["accuracy"]=pos.coords.accuracy;
		walley_geolocation["altitude"]=pos.coords.altitude;
		walley_geolocation["altitudeAccuracy"]=pos.coords.altitudeAccuracy;
		walley_geolocation["heading"]=pos.coords.heading;
		walley_geolocation["speed"]=pos.coords.speed;
		}
		
var getLocation=function()
		  {
		  if (navigator.geolocation)
		    {
		    navigator.geolocation.watchPosition(showPosition);
		    }
		  else{
			  alert("Geolocation is not supported by this browser.");
			  }
}



