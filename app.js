
var player1 = prompt('What is your name?', 'type name'); //got working & saved to variable
var player2 = prompt('Hey, how bout you?', 'type name'); //got working & saved to variable

var settingUpNames = function() {
	playerOneBox.innerHTML= 'Player Two : ' + player1;
	playerTwoBox.innerHTML= 'Player One : ' + player2;
	//Tested & works: Also not the ideal way to do this, I wanted again to get element by id and append child, but couldn't figure it out. I'm rolling with this and will return to it time permitting
}

var currentPlayer = 1;

var start = function () {
	var currentPlayer = '1';

	tileOne.innerHTML='';
	tileOne.addEventListener('click', function(){
		evenAndOddTurns(tileOne);
		// console.log('Fn addingClickListener ran')
		//Commented out ^^^ because it was causing an issue, will revisit later time willing
	})	

	tileTwo.innerHTML='';
	tileTwo.addEventListener('click', function(){
		evenAndOddTurns(tileTwo);
	})

	tileThree.innerHTML='';
	tileThree.addEventListener('click', function(){
		evenAndOddTurns(tileThree);
	})

	tileFour.innerHTML='';
	tileFour.addEventListener('click', function(){
		evenAndOddTurns(tileFour);
	})

	tileFive.innerHTML='';
	tileFive.addEventListener('click', function(){
		evenAndOddTurns(tileFive);
	})

	tileSix.innerHTML='';
	tileSix.addEventListener('click', function(){
		evenAndOddTurns(tileSix);
	})

	tileSeven.innerHTML='';
	tileEight.addEventListener('click',function(){
		evenAndOddTurns(tileEight);
	})

	tileEight.innerHTML='';
	tileEight.addEventListener('click',function(){
		evenAndOddTurns(tileEight);
	})

	tileNine.innerHTML='';
	tileNine.addEventListener('click', function(){
		evenAndOddTurns(tileNine);
	})

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
	if (currentPlayer == 1) {
		tiles.innerHTML = 'x'; 
		currentPlayer =2;
		return 'booting out';
	} else if (currentPlayer != 1) {
		tiles.innerHTML = 'o';
		currentPlayer = 1;
		return 'booting out';
	}
}

	//First crack at this: I bet it breaks
	//BUT: KEY FEATURES I AM DRIVING AT HERE: 
	//   - Scenario One is that if you click and inner HTML is not blank, nothing will happen; it won't write anything OR increase the turn counter
	//   - Second, is if you click and there is NO inner HTML. It uses modulus to measure whether it is an even or odd turn; depending on the results it lets you mark an X or an O
	//   - For each, it reassigns the value of i so that it will route to the correct alternate path next time, giving the other person a turn
	//   - I made i<10 since there are 9 squares
	
	//say for clicks on a square, the first time it will be an x, second time it will be an o
	//need to dig into the logic here, I'm not sure how I would do this


// var checkingTheScore = function(){
// 	// checks if there is  a win
// 	//if else statement, if win = set up win sequence of events, else {nuttin}
// 	// if win is selected, trigger win function

// var winnerWinner = function() {
// 	//change color of winners name console box
// 	//generates some type of alert
// 	//Should ideally make any other tiles on the board unclickable, but I'm not sure how to do that 
// }

//LOG OF PROGRESS FROM PSUEDO CODE TO WORKING: 

// 	//onload prompts for names
// 	//runs setnames function which prompts for names, then displays them
// 	//makes sure innerHTML for the squares is set to ''

// var settingUpTileClasses = function ()
// 	//after start button is hit, will grab them by row or column
// 	//then need a way to set different ids


// var setNames = function () {
// 	//prompt: gets names
// 	//gets element by id, name blurbs or whatever I end up calling them
// 	//sets blurb inner html to be what the prompt returned
// }


// ERROR LOG

// 1. // document.querySelectorAll('.tiles');
    // if (tile.innerHTML == '') {
    //   //Oh shit, just realized my logic is close but not
    //   //all the way there
    //   //I need to add an event listener to the squares
    //   //and then route them this way
    //   //and give them a whole other class to route them
    //   if its player ones turn the tile inner html = 0 , else the inner html = X
    //   	switch turns to other player. if currentPlayer = 1, current player = 2

    //   // for (var i = 0; i < 9; i++) { //trying to set up a counter, but the FOR loop looks sort of wrong, somehow? Not sure about that one...
    //   //   if (i%2 === 0) {
    //   //     tile.innerHTML = 'X'; // I feel like maybe I can't use onclick this way...need to look up
    //   //     i = i + 1;
    //   //   } else if (i%2 != 0) {
    //   //     tile.innerHTML = 'O';
    //   //     i = i + 1;
    //   //   }
    //   // }
    // }  else {
    // 	alert the user that the tile has been clicked
    // }
    // NOTES ON 1; Wouldn't work, because the way I set up the counter it would actually just populate all the odd number
//2. Got the evenAndOddTurns to work in the dom, so that player number switches after click from 1 to 2 back to one, however no innerhtml is populating


