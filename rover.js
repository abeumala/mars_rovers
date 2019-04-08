//Congiguracio inicial

export class Rover {
	constructor(direction, axisX, axisY, travelLog) {
		this.roverDirection = direction || 'E';
		this.roverX = axisX || 0;
		this.roverY = axisY || 0;
		this.roverTravel = travelLog || [];
	}

	turnLeft() {
		if (this.roverDirection === 'N') {
			this.roverDirection = 'W'
		} else if (this.roverDirection === 'W') {
			this.roverDirection = 'S'
		} else if (this.roverDirection === 'S') {
			this.roverDirection = 'E'
		} else this.roverDirection = 'N'
	}

	turnRigth() {
		if (this.roverDirection === 'N') {
			this.roverDirection = 'E'
		} else if (this.roverDirection === 'E') {
			this.roverDirection = 'S'
		} else if (this.roverDirection === 'S') {
			this.roverDirection = 'W'
		} else this.roverDirection = 'N'
	}

	moveForward() {
		let log = {
			'x': this.roverX,
			'y': this.roverY
		}

		this.insertTravelLog(log)
		
		if (this.roverDirection === 'N') {
			if (this.roverY < 0) this.y = this.roverY + 1
		} else if (this.roverDirection === 'W') {
			if (this.roverX > 0) this.x = this.roverX - 1
		} else if (this.roverDirection === 'S') {
			if (this.roverY > -9) this.y = this.roverY + 1
		} else {
			if (this.roverX < 9) this.x = this.roverX + 1
		} 
	}

	insertTravelLog(log) {
		this.roverTravel.push(log);
	}


}
