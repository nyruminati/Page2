var game_canvas;
var game_context;

var game_loaded = false;

var title = "Penetunia";
var backgroundColor = "black";

var currentPanel = 0;
var fontcolor = "white";
var footer;

 
var GameArea;
var GamePiece;
var Obstacle;



function Play() {
    game_canvas = document.getElementById("gameCanvas");
    game_context = game_canvas.getContext("2d");
    
    


    if (!game_loaded) {
        document.addEventListener('keydown', function(event){
            
        captureGameInputs(event)   });
        
        setInterval(updateGame, 10);
        
        game_loaded = true;
    
        console.log("juego cargado");
        

}
}

function updateGame () {
    
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
    /*function drawGame()   {
    
    //GameArea.start();
    game_context.fillStyle = "Blue";
 	game_context.fillRect(400,150,40,40);
}*/




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
    drawHeaderComponent();
   // drawGame();


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
    if(event.keyCode == 32) {
        currentPanel = 10;
} 
}
function pauseScreenInput3  (event) {  
    if(event.keyCode == 83) {

        currentPanel = 3;
        
       
    
}
}
function gamescreenInputs4 (event) {  
    if(event.keyCode == 83) {

        currentPanel = 4;
        
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

function component(width, height, color, x, y, type) {
 this.type = type;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y; 
  this.speedX = 0;
  this.speedY = 0; 
  this.gravity = 0.05;
  this.gravitySpeed = 0;
  this.update = function() {
    game_canvas = myGameArea.context;
    game_canvas.fillStyle = color;
    game_canvas.fillRect(this.x, this.y, this.width, this.height);
  } 
  
    this.newPos = function() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed; 
  }
}
  this.newPos = function() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  }
  this.hitBottom = function() {
    var rockbottom = GameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
    }
  }
  function accelerate(n) {
  myGamePiece.gravity = n;
}