class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
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


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.isEmpty());
