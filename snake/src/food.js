import GameField from './game_field';

const Food = {
	pos: {
		x: 1,
		y: 1,
	},
	test: true,
	_randomInteger(min, max) {
	  let rand = min + Math.random() * (max - min)
	  rand = Math.round(rand);
	  return rand;
	},

	generate(snakeChuncks) {
		const randX = this._randomInteger(0, GameField.elemsX-2);
		const randY = this._randomInteger(0, GameField.elemsY-2);

		snakeChuncks.forEach(item => {
			if (item.x === randX && item.y === randY) {
				console.log('food: same position');
				this.generate(snakeChuncks);
			}
		});

		this.pos = {
			x: randX,
			y: randY,
		};

		GameField.draw(this.pos, 'food');
	}
}

export default Food;