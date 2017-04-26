var cycles;
var counter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	cycles = [
		{ x: 10, y: 10, direction: 1 },
		{ x: windowWidth - 20, y: 10, direction: 2 },
		{ x: 10, y: windowHeight - 20, direction: 0 },
		{ x: windowWidth - 20, y: windowHeight - 20, direction: 3 }
	];
	counter = 0;
}

function draw() {
	noStroke();

	for (var i = 0; i < cycles.length; i++) {
		if (i == 0) { fill(255, 0, 0); }
		else if (i == 1) { fill(0, 255, 0); }
		else if (i == 2) { fill(0, 0, 255); }
		else { fill(255, 255, 0); }

		rect(cycles[i].x, cycles[i].y, 10, 10);

		if (cycles[i].direction == 0) { cycles[i].y -= 1; }
		else if (cycles[i].direction == 1) { cycles[i].x += 1; }
		else if (cycles[i].direction == 2) { cycles[i].y += 1; }
		else { cycles[i].x -= 1; }

		if (cycles[i].x < 0) { cycles[i].x = 0; }
		else if (cycles[i].x > windowWidth - 10) { cycles[i].x = windowWidth - 10; }
		else if (cycles[i].y < 0) { cycles[i].y = 0; }
		else if (cycles[i].y > windowHeight - 10) { cycles[i].y = windowHeight - 10; }
	}

	counter = counter + 1;

	if (counter >= 60) {
		for (var i = 0; i < cycles.length; i++) {
			var newDir = Math.floor(Math.random() * 4);
			cycles[i].direction = newDir;
		}
		counter = 0;
	}

	for (var i = 0; i < cycles.length; i++) {
		fill(255);
		rect(cycles[i].x, cycles[i].y, 10, 10);
	}
}