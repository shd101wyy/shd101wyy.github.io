enchant();
var moveSpeed = 4;
var Player = Class.create(Sprite, {
    initialize: function(x, y) { //initialization
        Sprite.call(this, 32, 32); //initialization of the Sprite object
        this.image = game.assets['image.png'];
        this.x = x;
        this.y = y;
        this.frame = 0;
        
        this.direction="s";
        this.max_frame=2;
        
        game.keybind(65, 'left');
        game.keybind(68, 'right');
        game.keybind(87, 'up');
        game.keybind(83, 'down');

        game.rootScene.addChild(this);
    },
    //define the onenterframe eventlistener (run every frame)
    onenterframe: function() {
        var change_direction=false;
        var touched_keyboard=false;
         //04.2 Keyboard Input
        if (game.input.left && !game.input.right) {
            touched_keyboard=true;
            if(this.direction!="w"){
                change_direction=true;
                this.frame=3;
                this.max_frame=5;
            }
            this.direction="w";
            this.tx = this.x -= moveSpeed;
        } else if (game.input.right && !game.input.left) {
            touched_keyboard=true;
            if(this.direction!="e"){
                change_direction=true;
                this.frame=6;
                this.max_frame=8;
            }
            this.direction="e";
            this.tx = this.x += moveSpeed;
        }

        if (game.input.up && !game.input.down) {
            touched_keyboard=true;
            if(this.direction!="n"){
                change_direction=true;
                this.frame=9;
                this.max_frame=11;
            }
            this.direction="n";
            this.ty = this.y -= moveSpeed;
        } else if (game.input.down && !game.input.up) {
            touched_keyboard=true;
            if(this.direction!="s"){
                change_direction=true;
                this.frame=0;   
                this.max_frame=2;
            }
            this.direction="s";
            this.ty = this.y += moveSpeed;
        }
        
        if(touched_keyboard){
            this.frame=this.frame+1;
            if(this.frame>this.max_frame)
                this.frame=this.frame-3;
        }
        else{
            while(this.frame%3!==0){
                this.frame-=1;
            }
            this.frame=this.frame+1;
        }

    },
    //define the ontouchend event listener (when the user lifts finger/finishes clicking on the bear)
    ontouchend: function() {
        this.frame += 3; //switch to frame of crying bear
    }
    
});

window.onload = function() {
    game = new Game(320, 320);
    game.preload('chara1.png', 'gallery_35130_223_21559.png', 'image.png');
    game.fps = 20;
    game.onload = function() {
        hello = new Label("Hello World");
        hello.x = 10;
        hello.y = 10;
        game.rootScene.addChild(hello);
        /*
        //create a sprite with the name "bear"
        bear = new Sprite(32, 32); // character's size will be 32x32
        bear.x = 150; //X coordinate (distance from left side, in pixels)
        bear.y = 150; //Y coordinate (distance from top, in pixels)
        bear.scaleX = 1; //magnification factor of x/width (1 = 100%)
        bear.scaleY = 1; //magnification factor of y/height (1 = 100%)
        bear.image = game.assets['chara1.png']; // use chara1.gif for the bear's image
        bear.frame = 0;

        bear.addEventListener('enterframe', function() { //The following code is run every frame
            this.x += 4; //Move one pixel to the right
            this.frame++;
            if (this.frame > 3) this.frame = 0
            if (this.x > 320) this.x = 0;
        });
        bear.addEventListener('touchend', function() {
            this.frame += 3;
        });
        game.rootScene.addChild(bear); // display the bear on the screen
        */
        /*
        a = new Sprite(32, 32); // character's size will be 32x32
        a.x = 150; //X coordinate (distance from left side, in pixels)
        a.y = 150; //Y coordinate (distance from top, in pixels)
        a.scaleX = 1; //magnification factor of x/width (1 = 100%)
        a.scaleY = 1; //magnification factor of y/height (1 = 100%)
        a.image = game.assets['gallery_35130_223_21559.png']; // use chara1.gif for the bear's image
        a.frame = 0;

        a.addEventListener('enterframe', function() { //The following code is run every frame
            this.x += 4; //Move one pixel to the right
            this.frame++;
            if (this.frame > 3) this.frame = 0
            if (this.x > 320) this.x = 0;
        });
        a.addEventListener('touchend', function() {
            this.frame += 3;
        });
        game.rootScene.addChild(a); // display the bear on the screen
        */
        // create player
        player1 = new Player(40, 40);
    };
    game.start();
};
