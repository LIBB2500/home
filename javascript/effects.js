function setup(){
	canvas_width = windowWidth;
	canvas_height = windowHeight;
    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-3');
	cnv.parent('canvascontainer');
	background(255, 255, 255);
}

function draw(){
	clear();
    setGradient();
}

function windowResized(){
	canvas_width = windowWidth;
	canvas_height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}

function setGradient() {
    var inter = map(mouseX, 0, windowWidth, 0, 1);
    var c = lerpColor(color(255, 204, 0), color(92, 92, 255), inter);
    background(c);
}