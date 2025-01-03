let r = 255;
let g = 255;
let b = 255;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    noStroke();
    fill(r, g, b, 100);
    circle(mouseX, mouseY, 24);
}

function mousePressed(){
    r = (random(100, 255));
    g = (random(100, 255));
    b = (random(100, 255));
}

