function Node(first, second, third) {
	var first, second, third;
	var posX = 0; 
	var posY = 0; 
	var hexstring;
	var visited;
	var residue;

	this.first = first; 
	this.second = second; 
	this.third = third; 
	this.hexstring = first.toString(16).toUpperCase() + second.toString(16).toUpperCase() + third.toString(16).toUpperCase();
	this.visited = false;

	var sum = Math.abs(first-second) + Math.abs(second-third) + Math.abs(third-first); 
	this.residue = sum;
	switch(true) {
		case (sum <= 6): // 1
			sum *= 55;
			break;
		case (sum <= 8): // 2
			sum *= 35;
			break;
		case (sum <= 10): // 3
			sum *= 20;
			break;
		case (sum <= 12): // 4
			sum *= 10;
			break;
		case (sum <= 14): // 2
			sum *- 6;
			break;
		case (sum <= 16): // 4
			sum *= 2;
			break;
	}
	var random = Math.floor(Math.random() * (700-sum-sum) + sum);

	var positive = sum;
	var negative = 700-sum;

	var decision = Math.floor(Math.random() * 4 + 1);

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
	if (this.first == 15) {
			this.posX = 15;
			this.posY = 15;
		}

}