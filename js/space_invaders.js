//Global variables
var alien_image;
var aliens;
var cannon;
var projectile;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);

	//Alien dimensions
	var aWidth = 100;
	var aHeight = 100;

	//Generate aliens
	aliens = [];
	for (var i = 0; i < 16; i++) {
		var alien = { x: 0, y: 0, width: aWidth, height: aHeight, visible: true };
		alien.x = i%8 * (windowWidth - 20)/8 + 20;
		alien.y = Math.floor(i/8) * 100;
		aliens.push(alien);
	}

	//Cannon
	cannon = {
		x: 0,
		y: windowHeight - 100,
		width: 100,
		height: 50,
		speed: 4
	};

	//Cannon projectile
	projectile = {
		x: 0,
		y: 0,
		width: 10,
		height: 20,
		visible: false,
		speed: 10
	};

	alien_image = loadImage("img/alien.png");
}

function draw() {
	background(0);
	noStroke();

	//Paint aliens that are visible/alive
	for (var i = 0; i < aliens.length; i++) {
		if (aliens[i].visible) {
			image(alien_image, aliens[i].x, aliens[i].y, aliens[i].width, aliens[i].height);
		}
	}

	//Paint the cannon (which is two rectangles)
	fill(255);
	rect(cannon.x, cannon.y, cannon.width, cannon.height);
	rect(cannon.x + cannon.width/3, cannon.y - cannon.height/2, cannon.width/3, cannon.height/2);

	//Paint the projectil
	if (projectile.visible) {
		rect(projectile.x, projectile.y, projectile.width, projectile.height);
		projectile.y = projectile.y - projectile.speed;

		//Projectile goes off screen
		if (projectile.y < 0) {
			projectile.visible = false;
		}
	}

	//Move cannon left and right
	cannon.x = cannon.x + cannon.speed;
	if (cannon.x + cannon.width >= windowWidth || cannon.x < 0) {
		cannon.speed = -cannon.speed;
	}

	//Collission detection of aliens and projectile
	for (var i = 0; i < aliens.length; i++) {
		var alien_hit = hit(aliens[i], projectile);
		if (alien_hit && aliens[i].visible && projectile.visible) {
			aliens[i].visible = false;
			projectile.visible = false;
		}
	}
}

function mousePressed() {
	//Mouse click = shoot projectile out of cannon if there is no projectile on screen already
	if (!projectile.visible) {
		projectile.visible = true;
		projectile.x = cannon.x + cannon.width/2;
		projectile.y = cannon.y - cannon.height;
	}
}

function hit(obj1, obj2) {
	//Check if obj1 and obj2 are colliding or not
	var b1 = obj1.x < obj2.x + obj2.width;
	var b2 = obj1.x + obj1.width > obj2.x;
	var b3 = obj1.y < obj2.y + obj2.height;
	var b4 = obj1.height + obj1.y > obj2.y;

	return b1 && b2 && b3 && b4;
}