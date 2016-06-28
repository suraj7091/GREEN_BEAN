//onload shows board, prompts for player one and player two name


BLOCKING OUT FUNCTIONS

FUNCTION START
 Says on page load, ask the names of players
 Then sets innerhtml of player console to each persons name
 Has a short timer after which blank tiles appear
 Maybe it would be smarter to make elements by ID then add a class in js


GAME LOGIC

If an odd turn, onclick set div to x
If an even turn, onclick set div to o
On all turns, set a status of clicked to tile (so it can't be reclicked)
After click run a function evaluating if there are three tiles of the same type in a row
If the answer is yes, run an alert with the winner

Reset button puts all the tiles back to having no value, and ideally if I can get player names populating 
resets the prompt asking for their names again

EVALUATING WINS
 	 Could assign number values and use a modulo so that certain matches would all be divisible by the same number
 	 but ironically while more DRY might get kind of mathematically complicated
 	 Could use some kind of letter & number combo to mark rows and columns
 	 Could just use letters
	 Upon thought, I think this is the best way: 

	          Column A    Column B     Column C 
	   Row1      1A         1B           1C
	   Row2      2A         2B           2C
	   Row3      3A         3B           3C



EDGE CASES
Diagonal win: no way around it, this is a toughie. I think I will just have to use a not particularly dry
if div 2B inner html = 1a && 3c html, then..../if div 2b innerhtml = 1c and 3a html then...

ERROR LOG

RESOLVED ERROR LOG