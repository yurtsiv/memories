import GameField from './game_field';
import Snake from './snake';

const Game = {
	settings: {
		elemsX: 60,
		elemsY: 30,
	},

	status: {
		food: 0,
	},

	start() {
		GameField.create(this.settings.elemsX, this.settings.elemsY, () => {
			Snake.init();
		});
	},

	restart() {
		this.start();
	},

	gameOver() {
		console.log('Eated food:', this.status.food);
		if (confirm('Game over! \n Do you want to try again?')) {
			location.reload();
		}
	}
}

export default Game;