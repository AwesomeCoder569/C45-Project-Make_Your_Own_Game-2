var basket, basketImg;
var ball, ballImg;
var gameState = 0;
var START =0, PLAY = 1, END = 2;
var score = 0;

function preload() {
  ballImg = loadImage("ball.png");
  basketImg = loadImage("basket.png");
}

function setup() {
  createCanvas(800,800);

  ball = createSprite(200, 0, 50, 50);
  ball.addImage(ballImg);
  ball.scale = 0.08;
  ball.x = Math.round(random(20,750));
  

  basket = createSprite(400, 755, 100, 50);
  basket.addImage(basketImg);
  basket.scale = 0.3;
}

function draw() {
  background(51); 

  textSize(20);

  if(gameState === 0) {
    strokeWeight(20);
    stroke("red");
    fill("white");
   text("Catch Me If You Can", 320, 400);
   text("Click to start", 350, 450);
   
  }
  
  else if(gameState === 2) {
    strokeWeight(20);
    stroke("red");
    fill("white");
    text("GameOver", 320, 400);
    text("Click to Restart", 300, 450);
    
    reset();
  } 
  
  else {
   gamePlay();
  }

 
}

function mouseClicked() {
  if(gameState === 0) {
    gameState = 1;
    
  }

  if(gameState === 2) {
    gameState = 1;
  }
}

function gamePlay() {
  text("Score: "+score, 700, 50);

  ball.velocityY = 4 ;
  basket.x = World.mouseX

  if(ball.y > height-10 && (ball.x > basket.x - 20 && ball.x < basket.x + 20)) {
    ball.x = Math.round(random(20,750));
    ball.y = 0;
    score+=1;
  }
  if(ball.y > height) {
    gameState = 2;
    
  }
  drawSprites();
}

function reset() {
  score = 0;
  ball.y = -20;
}