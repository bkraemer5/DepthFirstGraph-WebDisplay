function drawRedCircle(context, posX, posY, hex) {
	context.save();
	context.beginPath();
	context.arc(posX, posY, 25, 0, 2*Math.PI, false);
	context.fillStyle = "#800033";
	context.fill();
	context.font = "20px sans-serrif";
	context.beginPath();
	context.fillStyle = "#ffffff";
	context.fillText(hex, posX-15, posY+5);
	context.fill();
}

function drawPath(context, posY, posX, destX, destY) {

	// draws line
	context.save();
	context.beginPath();
	context.moveTo(posY, posX);
	context.lineTo(destX, destY);
	context.strokeStyle = "000000";
	context.stroke();

	// draws cave explorer
	context.beginPath();
	context.moveTo(destX-10, destY+20); 
	context.lineTo(destX, destY+5);
	context.lineTo(destX+10, destY+20);
	context.closePath();
	context.fillStyle = 'blue';
	context.fill();
	context.strokeStyle = 'white';
	context.stroke();

	context.restore();
}