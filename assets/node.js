// a prototype of single node in the graph
function Node(first, second, third) {
	var first, second, third;
	var posX = 0; 
	var posY = 0; 
	var hexstring;
	var visited;

	// initialize first, second, and third from constructor
	this.first = first; 
	this.second = second; 
	this.third = third; 

	// set the hexstring to the hex values of first, second, and third
	this.hexstring = first.toString(16).toUpperCase() + second.toString(16).toUpperCase() + third.toString(16).toUpperCase();
	
	// by default, all nodes have NOT been visited
	this.visited = false;

	// attaining the node's residue
	var sum = Math.abs(first-second) + Math.abs(second-third) + Math.abs(third-first); 
	
	// using the node's residue to indicate where in proximity to the center it will be located
	switch(true) {
		case (sum <= 6): // 1 node has this value
			sum *= 55;
			break;
		case (sum <= 8): // 2 nodes have this value
			sum *= 35;
			break;
		case (sum <= 10): // 3 nodes have this value
			sum *= 20;
			break;
		case (sum <= 12): // 4 nodes have this value
			sum *= 10;
			break;
		case (sum <= 14): // 2 nodes have this value
			sum *- 6;
			break;
		case (sum <= 16): // 4 nodes have this value
			sum *= 2;
			break;
	}

	// creates various possible coordinates for the node
	var random = Math.floor(Math.random() * (730-sum-sum) + sum);
	var positive = sum;
	var negative = 730-sum;

	// picks a combination out of random
	var decision = Math.floor(Math.random() * 4 + 1);

	// the result of decision will determine which combination of coordinates the node will have
	switch(decision) {
		case 1:
			this.posX = random;
			this.posY = positive;
			break;
		case 2:
			this.posX = random;
			this.posY = negative;
			break;
		case 3:
			this.posX = positive;
			this.posY = random;
			break;
		case 4:
			this.posX = negative;
			this.posY = random;
	} 

	// the root node will always remain in the same position on the board
	if (this.first == 15) {
			this.posX = 15;
			this.posY = 15;
	}

}