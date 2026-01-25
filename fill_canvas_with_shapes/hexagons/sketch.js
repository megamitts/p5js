let hexagons = [];


function setup() {
  createCanvas(400, 400);
  createHoneycomb();
	
	//strokeWeight(width * 0.001);
  
}

function draw() {
  background('#000');
	noFill();
	stroke('#fff');
	for (let h of hexagons) {
		drawHex(h.x, h.y, h.w, h.a, 0);
	}
}


function createHoneycomb() {
	let hexW = width * 0.04;
	let hexH = hexW * sqrt(3) / 2;
	let y = -hexH;
	let yCounter = 0;

	while (y < height + hexW) {
		let x = -hexW;
		let offsetX = 0;
		if (yCounter % 2 == 0) {
			offsetX = hexH / 2;
		}
		while (x < width + hexW) {
			hexagons.push({ x: x + offsetX, y: y, w: hexW, h: hexH, a: PI / 2 });
			x += hexH;
		}
		y += hexW * 0.75;
		yCounter++;
	}

}

function drawHex(x, y, w, a, r) {
	let myPoints = [];
	let numPoints = 6;
	let rad = w / 2;

	for (let i = 0; i < numPoints; i++) {
		let angle = map(i, 0, numPoints, 0, TWO_PI) + a;
		let xx = x + cos(angle) * rad;
		let yy = y + sin(angle) * rad;
		myPoints.push(createVector(xx, yy));
	}

	drawRoundPolygon(myPoints, r);
}

function drawRoundPolygon(points, r) {
	beginShape();
	for (let i = 0; i < points.length; i++) {
		let current = points[i];
		let prev = points[(i - 1 + points.length) % points.length];
		let next = points[(i + 1) % points.length];

		let v1 = p5.Vector.sub(prev, current);
		let v2 = p5.Vector.sub(next, current);

		let len1 = v1.mag();
		let len2 = v2.mag();
		let limit1 = min(r, len1 * 0.5);
		let limit2 = min(r, len2 * 0.5);

		v1.setMag(limit1);
		v2.setMag(limit2);

		let pStart = p5.Vector.add(current, v1);
		let pEnd = p5.Vector.add(current, v2);

		vertex(pStart.x, pStart.y);
		quadraticVertex(current.x, current.y, pEnd.x, pEnd.y);
	}
	endShape(CLOSE);
}
