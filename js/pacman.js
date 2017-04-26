//Global variables
var pacman;
var ty;
var tSpeed;
var goLeft;

var ghost1;
var ghost2;
var ghost3;
var ghost4;
var blue;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);

	//Pacman object
	pacman = {
		x: windowWidth + 600,
		y: windowHeight/2,
		radius: 300,
		speed: 5
	};
	ty = pacman.radius;
	tSpeed = 10;

	//Characters go left if true; otherwise, go right
	goLeft = true;

	ghost1 = loadImage("img/ghost1.png");
	ghost2 = loadImage("img/ghost2.png");
	ghost3 = loadImage("img/ghost3.png");
	ghost4 = loadImage("img/ghost4.png");
	blue = loadImage("img/blue.png");
}

function draw() {
	background(0);
	fill(255, 255, 0);
	noStroke();

	//Pacman body
	ellipseMode(CENTER);
	ellipse(pacman.x, pacman.y, pacman.radius, pacman.radius);

	fill(0);
	if (goLeft) {
		//Draw black triangle for Pacman's mouth
		triangle(pacman.x-pacman.radius, pacman.y-ty, pacman.x, pacman.y, pacman.x-pacman.radius, pacman.y+ty);
		//Move Pacman
		pacman.x = pacman.x - pacman.speed;
		//Draw ghosts behind him chasing Pacman
		image(ghost1, pacman.x + pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(ghost2, pacman.x + 2*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(ghost3, pacman.x + 3*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(ghost4, pacman.x + 4*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
	}
	else {
		//Draw black triangle for Pacman's mouth
		triangle(pacman.x+pacman.radius, pacman.y-ty, pacman.x, pacman.y, pacman.x+pacman.radius, pacman.y+ty);
		//Move Pacman
		pacman.x = pacman.x + pacman.speed;
		//Draw ghosts in front of Pacman fleeing Pacman
		image(blue, pacman.x + pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(blue, pacman.x + 2*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(blue, pacman.x + 3*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
		image(blue, pacman.x + 4*pacman.radius, pacman.y - pacman.radius/2, 300, 300);
	}

	//Move the triangle vertices so that the mouth moves
	ty = ty + tSpeed;
	if (ty > pacman.radius || ty < 0) {
		tSpeed = -tSpeed;
	}

	//Switch directions at a certain point
	if (pacman.x < -1800) {
		goLeft = false;
	}
	if (pacman.x > windowWidth + 400) {
		goLeft = true;
	}
}