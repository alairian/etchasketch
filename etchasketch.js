var numSquares = prompt("How many rows?",16);
var mySize;

function drawGrid(){
	$('div').remove();
	mySize = 580/numSquares;
	for(a=0;a<numSquares;a++){
		for(i=0;i<numSquares;i++){
			$('body').append('<div id = "sketchPoint'+i+'_'+a+'""></div>');
			var myXPos = mySize * i;
			var myYPos = mySize * a + 40;
			$('#sketchPoint'+i+'_'+a).css('height',mySize+'px');
			$('#sketchPoint'+i+'_'+a).css('width',mySize+'px');
			$('#sketchPoint'+i+'_'+a).css('left',myXPos+'px');
			$('#sketchPoint'+i+'_'+a).css('top',myYPos+'px');
		}
	}
}

function resetGrid(){
	numSquares = Number(prompt("How many rows?", 16));
	drawGrid();
}

$(document).ready(function(){
	drawGrid();
	$('div').mouseenter(function(){
		$(this).css('background-color','#FF0000')
	});
	/*$('#reset').click(function(){
		numSquares = Number(prompt("How many rows?", 16));
		drawGrid();
	});*/
});