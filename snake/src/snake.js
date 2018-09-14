import GameField from './game_field.js';
import Food from './food';
import Game from './game';

const Snake = {
	chuncks: [
		{
			x: 0,
		 	y: 0,
		},
	],
	direction: 'right',
	speed: 2,

	init() {
		GameField.draw(this.chuncks);

		const move = () => {
			this.move();
			const speed = this.speed;
			setTimeout(move, 500 / speed);
		}		
		move();

		this.ckickButtonListener();
		Food.generate(this.chuncks);
	},
	
	ckickButtonListener() {
		document.onkeydown = (e) => {
			let direction;
			if (e.which === 38) {
				direction = 'up';
			} else if (e.which === 40) {
				direction = 'down';
			} else if (e.which === 37) {
				direction = 'left';
			} else if (e.which === 39) {
				direction = 'right' ;
			} else {
				direction = this.direction;
			}

			if (this.chuncks.length === 1) {
				this.direction = direction;
				return;
			}

			if (
				(this.direction === 'right' && direction === 'left') ||
				(this.direction === 'left' && direction === 'right') ||
				(this.direction === 'up' && direction === 'down')  ||
				(this.direction === 'down' && direction === 'up')
			)
			{
				return;				
			} else {
				this.direction = direction;
			}
		}
	},
	
	checkForFood(snakeHead, lastElem) {	
		if (Food.pos.x === snakeHead.x && Food.pos.y === snakeHead.y) {
			this.chuncks.unshift(lastElem);
			this.speed += 0.2;
			Game.status.food ++;
			GameField.draw(this.chuncks);
			Food.generate(this.chuncks);
		} 
	},

	checkForOutOfTheField(snakeHead) {
		if (
			snakeHead.x === GameField.elemsX ||
			snakeHead.x < 0 ||
			snakeHead.y === GameField.elemsY ||
			snakeHead.y < 0) 
		{
			Game.gameOver();
			this.gameOver = true;
			return;
		}
	},

	checkForEatYourself(snakeHead) {
		this.chuncks.forEach((item, index) => {
			if (index !== this.chuncks.length -1) {
				if (item.x === snakeHead.x && item.y === snakeHead.y) {
					Game.gameOver();
					this.gameOver = true;
				}
			}
		});
	},

	move() {
		const snakeHead = this.chuncks[this.chuncks.length -1];

		// delete last element and create new
		const lastElem = this.chuncks[0];
		GameField.clear(this.chuncks[0]);
		this.chuncks = this.chuncks.slice(1);
		let chunckToPush;
		if (this.direction === 'right') {
			chunckToPush = {
				x: snakeHead.x + 1,
				y: snakeHead.y,
			}
		} else if (this.direction === 'down') {
			chunckToPush = {
				x: snakeHead.x,
				y: snakeHead.y + 1,
			}
		} else if (this.direction === 'left') {
			chunckToPush = {
				x: snakeHead.x - 1,
				y: snakeHead.y,
			}
		} else {
			chunckToPush = {
				x: snakeHead.x,
				y: snakeHead.y - 1,
			}
		}
		this.checkForFood(chunckToPush, lastElem);
		this.chuncks.push(chunckToPush);
		this.checkForEatYourself(chunckToPush);
		GameField.draw(this.chuncks);
		this.checkForOutOfTheField(chunckToPush);
	}	
}

export default Snake;