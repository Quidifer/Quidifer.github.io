
var angle;
var length;
var branchratio;
var firstbranch;

var slider;
var tracecheck = true;
var checkbox;
var lengthslider;
var branchslider;
var ratioslider;
var firstbranchslider;

var canvas;
var idangle;

function setup() {
    canvas = createCanvas(1300,1350);
    canvas.position(windowWidth/2 - width/2,200);

    slider = createSlider(PI/24, PI/2, PI/4, 0.01);
    slider.position(windowWidth/2 - 452,200);

    lengthslider = createSlider(2,200, 100, 0.01);
    lengthslider.position(windowWidth/2 - 205,200);

    ratioslider = createSlider(0.3, 0.7, 0.6, 0.01);
    ratioslider.position(windowWidth/2 + 45,200);

    checkbox = createCheckbox('Trace', false);
    checkbox.changed(myCheckedEvent);
    checkbox.position((windowWidth/2 + 300),100);

    firstbranchslider = createSlider(0,300,100,0.01);
    firstbranchslider.position(windowWidth/2 + 295,200);

}

function windowResized() {
    canvas.position(windowWidth/2 - width/2,200);
    slider.position(windowWidth/2 - 452,200);
    lengthslider.position(windowWidth/2 - 205,200);
    ratioslider.position(windowWidth/2 + 45,200);
    checkbox.position((windowWidth/2 + 300),100);
    firstbranchslider.position(windowWidth/2 + 295,200);
}

function draw() {
    if (tracecheck) {
        background(34);
    }
    let changed = false;
    if (angle != slider.value()) {
        angle = slider.value();
        changed = true;
    }
    if (length != lengthslider.value()) {
        length = lengthslider.value();
        changed = true;
    }
    if (branchratio != lengthslider.value()) {
        branchratio = ratioslider.value();
        changed = true;
    }
    if (firstbranch != firstbranchslider.value()) {
        firstbranch = firstbranchslider.value();
        changed = true;
    }


    if (changed) {
        stroke(200);
        translate(width/2, height/2);
        push();
        branch(length,true);
        pop();
        push();

        for (i = 0; i < 3; i++) {
            rotate(PI/2);
            push();
            branch(length,true);
            pop();
            push();
        }
    }

}

function branch(length, isfirst) {
    if (isfirst) {
        line(0,0, 0, -firstbranch);
        translate(0,-firstbranch);
    }
    else {
        line(0,0, 0, -length);
        translate(0,-length);
    }
    if (length > 6) {
        push();
        rotate(angle);
        branch(length * branchratio, false);
        pop();
        push();
        rotate(-angle)
        branch(length * branchratio, false);
        pop();
    }

}

function myCheckedEvent() {
    if (this.checked()) {
        tracecheck = false;
    }
    else {
        tracecheck = true;
    }
}
