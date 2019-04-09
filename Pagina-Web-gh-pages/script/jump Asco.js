var game_canvas;
var game_context;

var myGamePiece;
var myObstacles = [];
var myScore;


var game_loaded = false;

var title = "Penetunia";
var backgroundColor = "black";

var currentPanel = 0;
var fontcolor = "white";
//var footer;
var o = {'a': 3, 'b': 4,
  'doStuff': function() {
    alert(this.a + this.b);
    }
 };
         
         
var myGameArea = { 
    
    game_canvas : null, 
    game_context : null,
    
    start : function() {
        this.game_canvas = document.getElementById("gameCanvas");
        this.game_context = game_canvas.getContext("2d");
          

        this.frameNo = 0;
        this.interval = setInterval(updateGame, 10);
        //myGameArea.interval=setInterval(updateGameArea,10);
     },
    
    clear : function() { 
        this.game_context.clearRect(0, 0, this.game_canvas.width,this.game_canvas.height);
        
    }
}




function startGame() {
    
   
    
    game_canvas = document.getElementById("gameCanvas");
    game_context = game_canvas.getContext("2d");
    
    

    
    
    if (!game_loaded) {
        document.addEventListener('keydown', function(event){
            
        captureGameInputs(event)   });
        
        //setInterval(updateGame, 10);
        
        game_loaded = true;
    
        
        
        
        console.log("juego cargado");
        
        
        myGamePiece = new component(30, 30, "red", 350, 120);
        myGamePiece.gravity = 0.;
        myScore = new component("30px", "Consolas", "Blue", 280, 40, "text");
        myGameArea.start(); 
       }
    else{
        console.log("Papaya");
        
         
    }
}
 
    
function updateGame () {
    
    //myGameArea.clear();
 game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);
    
    switch (currentPanel) {
         case 0:
                splashScreen ();
                break;
         case 1:
               Inicio();
                break;
         case 2:
                Pausa();
                break;
         case 3:
                Juego();
                break;
         case 4:
                Ayuda();
                break;
         case 5:
                Creditos();
                break;
              
            
    }
}

function splashScreen() {//Hace que se muestre
    
    drawHeaderComponent();
    drawDescriptionComponent ("Recorre el camino hasta que no puedas más...");
    drawFooterComponent("Presiona 's' para continuar");
}
function drawHeaderComponent() {
  
    drawPanel(10, 10, 460, 20);
    drawText (205, 25,title);
    
}
function drawDescriptionComponent (description) {
    
    drawPanel(10, 35, 460, 250);
    drawText (15, 50,description);
    
}
function drawFooterComponent(footer ) {
    
    drawPanel(10, 300, 460, 20);
    drawText (15, 315,footer); 
    
}

function drawPanel(posx, posy, width, height) {
    
    
 	game_context.fillStyle = backgroundColor;

 	game_context.fillRect(posx, posy, width, height); 
    
}
function drawText (posx, posy, text){
    
    game_context.fillStyle = fontcolor ;
    game_context.font = "16px Comic Sans";
    game_context.fillText(text, posx, posy);
 
     
}
function Inicio () {
drawHeaderComponent();
 //drawDescriptionComponent ("Comenzar");
drawPanel(25,40,445,250);
drawText(30,60,"1-Iniciar")
drawText(30,80,"2-Ayuda")
drawText(30,100,"3-Creditos")


    
}
    
function Pausa() {
      drawHeaderComponent();
    drawDescriptionComponent ("Juego en Pausa");
    drawFooterComponent("Presiona 's' para continuar");
    
}
function Juego(){
    //myGameArea.interval=setInterval(updateGameArea,10);
 updateGameArea();
}

function Ayuda() {
    drawHeaderComponent();
    drawDescriptionComponent ("Estas en Pausa");
    drawFooterComponent("Presiona 's' para continuar");
    
}
function Creditos() {
drawHeaderComponent();
drawDescriptionComponent ("Zumito full da mango");
drawFooterComponent("Presiona 's' para continuar");
    
}
     
       

function captureGameInputs (event) {
    switch (currentPanel) {
         case 0:
                splashScreenInput (event);
                break;
         case 1:
                initScreenInput2 (event);
                break;
         case 2:
                pauseScreenInput3 (event);
                break;
         case 3:gamescreenInputs4 (event);
                break;
         case 4: helpScreenInputs5 (event);
                break;
         case 5: creditsScreenInputs6 (event);
                break;

    }
}
function splashScreenInput (event) {  
    if(event.keyCode == 83) {

        currentPanel = 1;
        
    
}
}
function initScreenInput2 (event) {  
    if(event.keyCode == 83) {

        currentPanel = 2;
    }
    if(event.keyCode == 49){
        currentPanel = 3;
    }
    if(event.keyCode == 50){
        currentPanel = 4;
    }
    if(event.keyCode == 51){
        currentPanel = 5;
  }

}
function pauseScreenInput3  (event) {  
    if(event.keyCode == 83) {

        currentPanel = 3;
        
       
    
}
}
function gamescreenInputs4 (event) {  
    if(event.keyCode == 83) {

        currentPanel = 3;
    }

    
    if(event.keyCode == 27){
        
        currentPanel= 4;
    }


}
function helpScreenInputs5 (event) {  
    //if(event.keyCode == 83) {

    //    currentPanel = 5;
   // }
    
    if(event.keyCode == 27){
        
        currentPanel= 3;
    }
}
function creditsScreenInputs6  (event) {  
    if(event.keyCode == 83) {

        currentPanel = 0;
        

}
}




//////////////////////////////////
function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function() {
        game_canvas = myGameArea.game_context;
        if (this.type == "text") {
            game_context.font = this.width + " " + this.height;
            game_context.fillStyle = color;
            game_context.fillText(this.text, this.x, this.y);
        } else {
            game_context.fillStyle = color;
            game_context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.game_canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.game_canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", 0, 0));
        myObstacles.push(new component(10, x - height - gap, "green", 0, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += 1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}