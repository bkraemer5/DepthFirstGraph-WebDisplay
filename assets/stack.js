function Stack() {
	var items;

	this.items = [];

	Stack.prototype.push=function(element) {
		this.items.push(element);
	}

	Stack.prototype.pop=function() {
		// return the topmost element from stack and remove it
		if (this.items.length == 0) {
			return "EMPTY";
		}
		return this.items.pop();
	}

	Stack.prototype.peek=function() {
		return this.items[this.items.length-1];
	}

	Stack.prototype.isEmpty=function() {
		return this.items.length == 0;
	}

	Stack.prototype.printStack=function() {
		var str = "";
		for (var i = 0; i < this.items.length; i++) {
			str += this.items[i] + " ";
		}
		return str;
	}

}