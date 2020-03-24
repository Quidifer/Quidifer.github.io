var snake;
var apple;

var scl = 5;
var snakesize = 20;

var canvas;
var highscore = 0;
var score = 0;

function setup() {
    canvas = createCanvas(800,800);
    canvas.position(windowWidth/2-400,230);
    noStroke();
    snake = new Snake();
    apple = new apple();
    frameRate(60);
    console.log("game started");
    document.getElementById('highscore').innerHTML = "highscore: " + highscore;
    document.getElementById('score').innerHTML = "score: " + score;

}

function windowResized() {
    canvas.position(windowWidth/2-400,230);
}

function draw() {
    background(51);
    keyPressed();

    if (snake.death()) {
        snake.total = 0;
        snake.tail = [];
        score = 0;
        document.getElementById('score').innerHTML = "score: " + score;
    }

    snake.update();
    snake.show();

    apple.show();

    if(snake.eat(apple)) {
        score+=5;
        document.getElementById('score').innerHTML = "score: " + score;
        if (score > highscore) {
            highscore = score;
            document.getElementById('highscore').innerHTML = "highscore: " + highscore;
        }
        apple.remove();
    }
    // fill(255,255,255);
    // text("hello world", 800,200);
}


function keyPressed() {
    if (keyCode == UP_ARROW && snake.yspeed != 1) {
        snake.direction(0,-1);
    }
    else if (keyCode == DOWN_ARROW && snake.yspeed != -1) {
        snake.direction(0,1);
    }
    else if (keyCode == RIGHT_ARROW && snake.xspeed != -1) {
        snake.direction(1,0);
    }
    else if (keyCode == LEFT_ARROW && snake.xspeed != 1) {
        snake.direction(-1,0);
    }
}
