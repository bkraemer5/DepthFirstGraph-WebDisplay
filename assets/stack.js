// A simple stack implementation to be used in coordination with depth first traversal
function Stack() {
	var items;


	// initialize the amount of elements in the stack to none
	this.items = [];


	// this places an element on the top of the stack
	Stack.prototype.push=function(element) {
		this.items.push(element);
	}


	// this deletes an element fromthe top of the stack
	Stack.prototype.pop=function() {
		if (this.items.length == 0) {
			return "EMPTY";
		}
		return this.items.pop();
	}

	
	// this returns the topmost element of the stack
	Stack.prototype.peek=function() {
		return this.items[this.items.length-1];
	}


	// returns true if empty, false otherwise
	Stack.prototype.isEmpty=function() {
		return this.items.length == 0;
	}


	// (for debugging) prints the elements currently in the stack
	Stack.prototype.printStack=function() {
		var str = "";
		for (var i = 0; i < this.items.length; i++) {
			str += this.items[i] + " ";
		}
		return str;
	}

}