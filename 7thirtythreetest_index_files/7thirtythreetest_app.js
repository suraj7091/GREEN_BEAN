
var player1 = prompt('What is your name?', 'type name'); //got working & saved to variable
var player2 = prompt('Hey, how bout you?', 'type name'); //got working & saved to variable

var settingUpNames = function() {
	playerOneBox.innerHTML= 'Player Two : ' + player1;
	playerTwoBox.innerHTML= 'Player One : ' + player2;
	//Tested & works: Also not the ideal way to do this, I wanted again to get element by id and append child, but couldn't figure it out. I'm rolling with this and will return to it time permitting
}

var currentPlayer = 1;

var start = function () {

	tileOne.innerHTML='';
	tileOne.addEventListener('click', function(){
		evenAndOddTurns(tileOne);
		// console.log('Fn addingClickListener ran')
		//Commented out ^^^ because it was causing an issue, will revisit later time willing
	});	

	tileTwo.innerHTML='';
	tileTwo.addEventListener('click', function(){
		evenAndOddTurns(tileTwo);
	});

	tileThree.innerHTML='';
	tileThree.addEventListener('click', function(){
		evenAndOddTurns(tileThree);
	});

	tileFour.innerHTML='';
	tileFour.addEventListener('click', function(){
		evenAndOddTurns(tileFour);
	});

	tileFive.innerHTML='';
	tileFive.addEventListener('click', function(){
		evenAndOddTurns(tileFive);
	});

	tileSix.innerHTML='';
	tileSix.addEventListener('click', function(){
		evenAndOddTurns(tileSix);
	});

	tileSeven.innerHTML='';
	tileSeven.addEventListener('click',function(){
		evenAndOddTurns(tileSeven);
	});

	tileEight.innerHTML='';
	tileEight.addEventListener('click',function(){
		evenAndOddTurns(tileEight);
	});

	tileNine.innerHTML='';
	tileNine.addEventListener('click', function(){
		evenAndOddTurns(tileNine);
	});

	playerOneBox.innerHTML='';
	playerTwoBox.innerHTML='';
	//Good catch: set it up to clear names right before invoking settingUpNames, allowing them to re-create id's for player 1 & 2
	settingUpNames();
	//Tested, and I did try to accomplish this more DRYly using a getElementById and change a whole class at once but couldnt get it working
	//I have decided to get everything functioning then retool if time allows
	//now need to get var player1 and player2 and append child of the player console
	}

start();

var evenAndOddTurns = function(tiles) {
	console.log(tiles.innerHTML);
	
	if (tiles.innerHTML == '') {	//TRACKING: IF FOR HAS NO TEXT, IE CLICKABLE
		
		if (currentPlayer == 1) {
			console.log(tiles.innerHTML);
			tiles.innerHTML = 'x'; 
			currentPlayer = 2;
			//return 'booting out';
		} else {
				console.log(tiles.innerHTML);
		  		 tiles.innerHTML = 'o';
		  		 //Citing help from Josie, who correctly noticed I had == 'o' when I needed ='o'
		 		 currentPlayer = 1;
                 // return 'booting out';
		} 
	} else if (tiles.innerHTML != '') {   //TRACKING: IF FOR HAS TEXT AND IS NOT CLICKABLE
		alert("Sorry, that was already clicked");
		}
	winnerWinnerX();
	winnerWinnerO();
}

var currentPlayer = '1';

var winnerWinnerO = function(tiles) {
	if 	(tileOne.innerHTML == tileTwo.innerHTML && tileTwo.innerHTML == tileThree.innerHTML && tileTwo.innerHTML == 'o') {
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileFour.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileSix.innerHTML && tileFive.innerHTML == 'o'){
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileSeven.innerHTML == tileEight.innerHTML && tileEight.innerHTML == tileNine.innerHTML && tileEight.innerHTML == 'o') {
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileOne.innerHTML == tileFour.innerHTML && tileFour.innerHTML == tileSeven.innerHTML && tileSeven.innerHTML == 'o'){
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileTwo.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileEight.innerHTML && tileEight.innerHTML == 'o') {
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileThree.innerHTML == tileSix.innerHTML && tileSix.innerHTML == tileNine.innerHTML && tileNine.innerHTML == 'o'){
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileOne.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileNine.innerHTML && tileNine.innerHTML == 'o') {
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileThree.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileSeven.innerHTML && tileSeven.innerHTML == 'o'){
		alert(player2 + ' wins it!');
		start();
		return 'booted out';
	} else {
		return 'getting out of this joint';
	}
}

var winnerWinnerX = function(tiles) {
	if 	(tileOne.innerHTML == tileTwo.innerHTML && tileTwo.innerHTML == tileThree.innerHTML && tileTwo.innerHTML == 'x') {
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileFour.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileSix.innerHTML && tileFive.innerHTML == 'x'){
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileSeven.innerHTML == tileEight.innerHTML && tileEight.innerHTML == tileNine.innerHTML && tileEight.innerHTML == 'x') {
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileOne.innerHTML == tileFour.innerHTML && tileFour.innerHTML == tileSeven.innerHTML && tileSeven.innerHTML == 'x'){
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileTwo.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileEight.innerHTML && tileEight.innerHTML == 'x') {
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileThree.innerHTML == tileSix.innerHTML && tileSix.innerHTML == tileNine.innerHTML && tileNine.innerHTML == 'x'){
		alert(player1 + ' wins it!');
		return 'booted out';
		start();
	} else if (tileOne.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileNine.innerHTML && tileNine.innerHTML == 'x') {
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else if (tileThree.innerHTML == tileFive.innerHTML && tileFive.innerHTML == tileSeven.innerHTML && tileSeven.innerHTML == 'x'){
		alert(player1 + ' wins it!');
		start();
		return 'booted out';
	} else {
        return 'getting out of this joint';
	}
}