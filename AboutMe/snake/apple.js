function apple() {
    this.x = Math.ceil(random(width)/20) * 20;
    this.y = Math.ceil(random(height)/20) * 20;

    this.show = function() {
        fill(255,0,0);
        rect(this.x, this.y, snakesize, snakesize);
        this.x = constrain(this.x, 0, width-snakesize);
        this.y = constrain(this.y, 0, height-snakesize);
    }

    this.remove = function() {
        this.x = Math.ceil(random(width)/20) * 20;
        this.y = Math.ceil(random(height)/20) * 20;
        if (snake.inSnake(this.x, this.y)) {
            console.log("apple in snake");
            this.remove();
        }
    }
}

// function pickLocation() {
//     var cols = floor(width/snakesize);
//     var rows = floor(height/snakesize);
// }
