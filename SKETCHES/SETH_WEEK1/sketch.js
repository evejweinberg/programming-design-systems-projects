var r = new Rune({
	container: "#canvas",
	width: 800,
	height: 800,
	debug: true
});

//points of main cone
var tpoints = {
	"a" : [250, 300],
	"b" : [550, 300],
	"c" : [400, 700]
};

//points of ellipse
var cpoints = {
	"c" : [300, 250],
	"r" : 160
};

var gridSize = 100;
var gridDim = 10;
var spacing = 10;
var FillCol = 255;

function drawShapes(point1, point2, point3, d, move, rotate) {
		r.ellipse(point1[0] + 0.5 * d, point1[1] - 2, d, d)
		.fill(FillCol);

		r.triangle(point1[0], point1[1], point2[0], point2[1], point3[0], point3[1])
		.fill(255)
		.rotate(rotate)
		.move(move[0], move[1], "relative");
}

//inside cone
for(var i = 0; i < gridSize; i ++) {
	for(var j = 0; j < gridSize; j ++) {
		var point1 = [i * gridDim + spacing * i, j * gridDim + spacing * j];
		var point2 = [point1[0] + gridDim, point1[1]];
		var point3 = [point1[0] + gridDim * 0.5, point1[1] + gridDim];
		var triangle = [point1, point2, point3];
		var d = (point2[0] - point1[0]);
		drawShapes(point1, point2, point3, d, [-100, -1000], 30);
	}
}

for(var i = 0; i < gridSize; i ++) {
	for(var j = 0; j < gridSize; j ++) {
		var point1 = [i * gridDim + spacing * i, j * gridDim + spacing * j];
		var point2 = [point1[0] + gridDim, point1[1]];
		var point3 = [point1[0] + gridDim * 0.5, point1[1] + gridDim];
		var triangle = [point1, point2, point3];
		var d = (point2[0] - point1[0]);
		if(triangleInTriangle(triangle, [tpoints.a, tpoints.b, tpoints.c]) || triangleInCircle(triangle, cpoints.c, cpoints.r)) {
			drawShapes(point1, point2, point3, d, [0, 0], 0);
			FillCol = 150;
		} 
	}
}

r.draw();

//math utilities

/*
vector subtractor. returns vector difference of b - a
or the vector between a and b
 */
 //replacement for distance formula?
function vecSub(a, b) {
	// console.log(typeof [b[0] - a[0], b[1] - a[1]][0]);
	return [b[0] - a[0], b[1] - a[1]];
}

/*
simple dot product function
 */
function dotProduct(p1, p2) {
	return p1[0] * p2[0] + p1[1] * p2[1] + p1[2] * p2[2];
}

/*
returns magnitude of a vector
 */
function magnitude(vec){
	return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
}

/*
a simple cross product function
 */
function crossProduct(v1, v2) {
	v1 = normalize(v1);
	v2 = normalize(v2);
	//since there is no third value for our cross product
	//the first two values are always zero 
	//and our resultant vector either points in 
	//or out of the screen
	return [0, 0, v1[0] * v2[1] - v1[1]*v2[0]];
}

/*
this normalizes our vectors to unit length
 */
function normalize(vec) {
	var mag = magnitude(vec);
	// console.log(typeof vec[0]);
	var norm = [vec[0] / mag, vec[1] / mag];
	// console.log(norm);
	return norm;
}

function sameSide (p1, p2, a, b) {
	var ab = vecSub(a, b);
	// console.log(ab)
	var cp1 = crossProduct(ab, vecSub(a, p1));
	// console.log(cp1)
	var cp2 = crossProduct(ab, vecSub(a, p2));
	if(dotProduct(cp1, cp2) >= 0){
		return true;
	} else {
		return false;
	}
}

// A = y2-y1
// B = x1-x2
// C = A*x1+B*y1
/*
tests to see if a point is in a triangle
 */
function pointInTriangle(p, a, b, c){
	if(sameSide(p, a, b, c) && sameSide(p, b, a, c) && sameSide(p, c, a, b)){
		return true;
	} else {
		return false;
	}
}

/*
tests to see if triangle one is in triangle two
 */
function triangleInTriangle(triOne, triTwo) {
	for(var i = 0; i < 3; i ++){
		if(pointInTriangle(triOne[i], triTwo[0], triTwo[1], triTwo[2])){
			return true;
		}
	}
	return false;
}

/*
test if a point is in a circle
 */
function pointInCircle(p, c, r) {
	var dist = vecSub(c, p);
	if(magnitude(dist) <= r){
		return true;
	} else{
		return false;
	}
}

/*
returns true if any point in the triangle is in the circle
 */
function triangleInCircle(tri, c ,r) {
	for(var i = 0; i < 3; i++) {
		if(pointInCircle(tri[i], c, r)){
			return true;
		}
	}
	return false;
}