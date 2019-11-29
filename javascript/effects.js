function setup(){
	canvas_width = windowWidth;
	canvas_height = windowHeight;
    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-3');
    cnv.parent('canvascontainer');
    colorMode(RGB); // Try changing to HSB or HSL.
}

function draw(){
    setFillGradient();
    makeBubble();
}

function windowResized(){
	canvas_width = windowWidth;
	canvas_height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}

function setFillGradient() {
    var inter = map(mouseX, 0, windowWidth, 0, 1);
    var c = lerpColor(color(250, 85, 85), color(132, 142, 245), inter);
    //var c = lerpColor(color(255, 204, 0), color(92, 92, 255), inter);
    //var c = lerpColor(color('hsl(48, 100%, 50%)'), color('hsl(240, 100%, 68%)'), inter)
    fill(c);
    stroke(c);
}

function makeBubble() {
    ellipse(mouseX, mouseY, 100, 100);
}