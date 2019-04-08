//Congiguracio inicial

function Rover(direction, axisX, axisY, travelLog) {
	//CONSTRUCTOR
	this.roverDirection = direction;
	this.roverX = axisX;
	this.roverY = axisY;
	this.roverTravel = travelLog;
}

function RoverGrid (row, column, size) {
	//CONSTRUCTOR
	this.gridRow = row * size;
	this.gridColumn = column * size;
}

Rover.prototype.turnLeft = function () {
	if (this.roverDirection === 'N') {
		this.setDirection('W')
	} else if (this.roverDirection === 'W') {
		this.setDirection('S')
	} else if (this.roverDirection === 'S') {
		this.setDirection('E')
	} else this.setDirection('N')
}

Rover.prototype.turnRigth = function () {
	if (this.roverDirection === 'N') {
		this.setDirection('E')
	} else if (this.roverDirection === 'E') {
		this.setDirection('S')
	} else if (this.roverDirection === 'S') {
		this.setDirection('W')
	} else this.setDirection('N')
}

Rover.prototype.moveForward = function () {

	var log = {
		'x': this.roverX,
		'y': this.roverY
	}

	this.insertTravelLog(log)
	
	if (this.roverDirection === 'N') {
		if (this.roverY < 0) this.setY(this.roverY + 1)
	} else if (this.roverDirection === 'W') {
		if (this.roverX > 0) this.setX(this.roverX - 1)
	} else if (this.roverDirection === 'S') {
		if (this.roverY  9) this.setY(this.roverY + 1)
	} else {
		if (this.roverX > - 9) this.setX(this.roverX - 1)
	} 
}

Rover.prototype.setDirection = function (direction) {
	this.roverDirection = direction;
}

Rover.prototype.setX = function (x) {
	this.roverX = x;
}

Rover.prototype.setY = function (y) {
	this.roverY = y;
}

Rover.prototype.getX = function () {
	return this.roverX;
}

Rover.prototype.getY = function () {
	return this.roverY;
}

Rover.prototype.insertTravelLog = function (log) {
	this.roverTravel.push(log);
}

RoverGrid.prototype.getRowCount = function() {
	return this.gridRow;
};
/////////////////////////////////////////////






//Fas servir l'objecte d'aquesta manera des d'un arxiu

import Rover from './rover.js';

var rover = new Rover('E', 0, 0, []);
var secondRover = new Rover('W', 9, 0, []);
rover.turnLeft();
rover.flip(); //el massa, no existeix, no l'has definit amb prototype // tots els methods tmb estan definits amb prototype orginalment, per aixo no pots utilitzar pop() amb una string.


second.moveForward();
var currentX = rover.getX();

let grid = new RoverGridConstructor (null, null, 10);

