var capture;
function setup() {
	createCanvas(1000,1000);
	jersey = loadImage('team-photos/warriors2jersey.png');
	capture = createCapture(VIDEO);
	capture.size(1000, 1000);
	capture.hide();
	console.log('hello');


}

function draw() {
  background(255);
  image(capture, 0,0);
  image(jersey, 260, 400, 550, 700);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		saveCanvas('myCanvas', 'jpg');
	}
}