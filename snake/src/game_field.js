const GameField = {
	lastSnake: {
		x: 0,
		y: 0,
	},
	elemsX: 0,
	elemsY: 0,

	destroy() {
		const elemsContainer = document.getElementById('elems-container');
		const field = document.getElementById('field-container');
		field.removeChild(elemsContainer);
	},

	_createField(elemsX, elemsY) {
		this.elemsX = elemsX;
		this.elemsY = elemsY;

		const field = document.getElementById('field-container');
		const elemsContainer = document.createElement('div')
		elemsContainer.id = 'elems-container'

		const fieldWidth = 20 * elemsX;
		const fieldHeight = 20 * elemsY;
		field.style.width = fieldWidth + 'px';
		field.style.height = fieldHeight + 'px';
		field.style.backgroundColor = '#fff';

		const iterations = elemsX * elemsY;
		let y = 0;
		let x = 0;
		for (let i = 0; i < iterations; i++) {
			if (x === elemsX) {
				x = 0;
				y++;
			}
			
			const div = document.createElement('div');
			div.style.width = 20 + 'px';
			div.style.height = 20 + 'px';
			div.className = 'field-item';
			div.id = `${y} ${x}`;
			elemsContainer.appendChild(div);			
			x++;
		}
		field.appendChild(elemsContainer);
	},

	clear({ y, x }) {
		const query = `${y} ${x}`;
		const target = document.getElementById(query);
		if (target) target.style.backgroundColor = '#fff';
	},
	
	create(elemsX, elemsY, callback) {
		const create = () => {
			this._createField(elemsX, elemsY);
			callback();
		}
		
		setTimeout(create, 500);
	},

	_drawMany(coordinates) {
		coordinates.forEach(item => {
			const query = `${item.y} ${item.x}`;
			const target = document.getElementById(query);
			if (target) target.style.backgroundColor = 'red';
		});
	},

	draw(coordinates, isFood) {
		if (coordinates.length) {
			this._drawMany(coordinates);
			return;
		}

		const query = `${coordinates.y} ${coordinates.x}`;
		const target = document.getElementById(query);
		const color = isFood ? 'green' : 'red';
		if (target) target.style.backgroundColor = color;
	}
}

export default GameField;
