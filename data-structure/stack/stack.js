class Stack {
	constructor() {
		this.items = [];
	}

	push(arg) {
		this.itmes.push(arg);
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}

		return this.items.pop();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	clear() {
		this.items = [];
	}
}
