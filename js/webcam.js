var capture;

var currentJersey;

var currentImage;

var cavsImage;

var warsImage;

var rocketsImage;

var okcImage;

var cavsJersey;

var warsJersey;

var rocketsJersey;

var okcJersey;


var okc = document.querySelector('#okc');
var hou = document.querySelector('#hou');
var gsw = document.querySelector('#gsw');
var cavs = document.querySelector('#cavs');

okc.addEventListener("click", function(){
	currentJersey = okcJersey;
	currentImage = okcImage;
});

gsw.addEventListener("click", function(){
	currentJersey = warsJersey;
	currentImage = warsImage;
});

cavs.addEventListener("click", function(){
	currentJersey = cavsJersey;
	currentImage = cavsImage;
});

hou.addEventListener("click", function(){
	currentJersey = rocketsJersey;
	currentImage = rocketsImage;
});

function setup() {
	var myCanvas = createCanvas(1000,1000);
	myCanvas.parent("container");
	cavsJersey = loadImage('team-photos/cavs-jersey.png');
	warsJersey = loadImage('team-photos/warriors2jersey.png');
	okcJersey = loadImage('team-photos/okc-jersey.png');
	rocketsJersey = loadImage('team-photos/rockets-jersey.png');
	warsImage = loadImage('team-photos/warriors-back.jpg');
	cavsImage = loadImage('team-photos/cavs-back.jpg');
	okcImage = loadImage('team-photos/okc-back.jpg');
	rocketsImage = loadImage('team-photos/rockets-back.jpg');
	currentJersey = warsJersey;
	currentImage = warsImage;
	capture = createCapture(VIDEO);
	capture.size(1000, 1000);
	capture.hide();

}

function draw() {
  background(255);
  image(currentImage, 0, 0);
  image(capture, 0,0);
  image(currentJersey, 260, 370, 500, 700);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		saveCanvas('myCanvas', 'jpg');
	}
}