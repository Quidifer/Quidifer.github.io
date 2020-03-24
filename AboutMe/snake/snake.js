function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.makelarger = 0;

    this.update = function() {

        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length -1; i++) {
                //if (this.tail[i+1].x % snakesize == 0 && this.tail[i+1].y % snakesize == 0) {
                    this.tail[i] = this.tail[i+1];
                //}
            }
        }
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        this.x = constrain(this.x, 0, width-snakesize);
        this.y = constrain(this.y, 0, height-snakesize);

        if (this.makelarger >= 5) {
            this.makelarger--;
            this.total++;
        }
    }

    this.show = function() {

        fill(50,205,50);
        for (var i = 0; i < this.tail.length; i++) {
            //if (this.tail[i].x % snakesize == 0 && this.tail[i].y % snakesize == 0) {
                rect(this.tail[i].x, this.tail[i].y, snakesize, snakesize);
            //}
        }
        rect(this.x, this.y, snakesize, snakesize);
    }

    this.direction = function(x, y) {
        if (this.x % snakesize == 0 && this.y % snakesize == 0) {
            this.xspeed = x;
            this.yspeed = y;
        }
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d<1) {
            this.makelarger += 10;
            return true;
        }
        else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length-1; ++i) {
            if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
                fill(255,10,10);
                return true;
            }
        }

        return false;
    }

    this.inSnake = function(x, y) {
        for (var i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x == x && this.tail[i].y == y) {
                return true;
            }
        }
        return false;
    }
}
