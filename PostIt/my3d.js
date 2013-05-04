     // Our Javascript will go here. 
            function myKeyPress(evt){

               evt = evt || window.event;
               var charCode = evt.keyCode || evt.which;
               var charStr = String.fromCharCode(charCode);
               if(charStr=="w"){
                   camera.position.z=camera.position.z+0.1
                }
            }
            
            var clock=new THREE.Clock();
            clock.start();
            
            
            var s_fog=new THREE.Fog(0x000000,0.1,1000)
            
            var scene=new THREE.Scene();
          
		  	var WIDTH=$("#three_div").width()
		  	var HEIGHT=$("#three_div").height();
		  
            var camera=new THREE.PerspectiveCamera(
                45,
                WIDTH/HEIGHT,
                0.1,
                2000
                );
            camera.position.set(50,50,50);
            camera.lookAt(new THREE.Vector3(0,0,0));
            
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( WIDTH, HEIGHT );
            //document.body.appendChild( renderer.domElement );
            var $three_div=$("#three_div");
            $three_div.append(renderer.domElement);
            
            
            // plane
            // Plane

				var material = new THREE.MeshDepthMaterial( { side: THREE.DoubleSide, overdraw: true } );

				plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 10, 10 ), material );
				plane.position.y = - 100;
				plane.rotation.x = - Math.PI / 2;
				scene.add( plane );

            
            // cube
            var geometry = new THREE.CubeGeometry(2,2,2);
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff10 } ); 
            var cube = new THREE.Mesh( geometry, material ); 
            scene.add( cube );
            
            var geometry2 = new THREE.CubeGeometry(1,1,1);
            var material2= new THREE.MeshBasicMaterial(
            	{
            	 wireframe:true,
	             color: 0x00ff10,
	             wireframeLinewidth:1
            	}
            );
            var cube2=new THREE.Mesh( geometry2,material2);
            cube2.position.x=-5;
            cube2.position.y=-5;

            scene.add( cube2 );
            
            
            camera.position.z = 30;
            
            var light = new THREE.PointLight( 0xff0000, 10, 100 ); 
            light.position.set( 20, 20, 20 ); 
            scene.add( light );           
            
            areaLight1 = new THREE.AreaLight( 0xffffff, 1 ); 
            areaLight1.position.set( 0.0001, 10.0001, -18.5001 ); 
            areaLight1.rotation.set( -0.74719, 0.0001, 0.0001 ); 
            areaLight1.width = 10; 
            areaLight1.height = 1; 
            scene.add( areaLight1 );
            
            function render_ani(){
                requestAnimationFrame(render_ani);
                cube.rotation.x+=0.1;
                cube.rotation.y+=0.1;
                renderer.render(scene,camera);
                
                //var time=document.getElementById("time");
                //time.innerHTML=clock.getElapsedTime();

            }
            render_ani();
      
