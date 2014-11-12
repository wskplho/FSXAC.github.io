var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var mobile = false;

if(isMobile.any()) mobile = true;

console.log(mobile);
















var topRow =    ["n", "n", "n"];
var middleRow = ["n", "n", "n"];
var bottomRow = ["n", "n", "n"];

var currentPlayer = "o";
var currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019579/f2f9081a-6a7d-11e4-8649-874f9b34dbca.png"

var click = 0;		//stores the boxes that have been clicked so far so that when the last one is clicked, the current player indicator is different, and a win/tie/loss message is shown

var oWins = 0;
var xWins = 0;

var gridNames = ["leftTop", "leftMiddle", "leftBottom", "middleTop", "middleMiddle", "middleBottom", "rightTop", "rightMiddle", "rightBottom"];









//I can get input from the user - when the user clicks, stuff happens
document.getElementById('leftTop').onclick = function(e) {
	if (topRow[0] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		//I can produce output for the user - changes the image of each grid depending on which user clicked which grid
		var parent = document.getElementById('leftTop');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		topRow[0] = currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();

	}
	
}

document.getElementById('leftMiddle').onclick = function(e) {
	if (middleRow[0] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('leftMiddle');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		

		middleRow[0]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
		
	}
}

document.getElementById('leftBottom').onclick = function(e) {
	if (bottomRow[0] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('leftBottom');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		bottomRow[0]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
			
	}
}

document.getElementById('middleTop').onclick = function(e) {
	if (topRow[1] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('middleTop');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		topRow[1]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
			
	}
}

document.getElementById('middleMiddle').onclick = function(e) {
	if (middleRow[1] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('middleMiddle');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		middleRow[1]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
		
	}
}


document.getElementById('middleBottom').onclick = function(e) {
	if (bottomRow[1] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('middleBottom');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		bottomRow[1]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
		
	}
}

document.getElementById('rightTop').onclick = function(e) {
	if (topRow[2] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('rightTop');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		topRow[2]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();
		click += 1;
		toggleCurrentPlayer();
		
	}
}

document.getElementById('rightMiddle').onclick = function(e) {
	if (middleRow[2] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('rightMiddle');
		var child = parent.getElementsByTagName('img')[0];
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;
		
		middleRow[2]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();	
		click += 1;
		toggleCurrentPlayer();
			
	}
}

document.getElementById('rightBottom').onclick = function(e) {
	if (bottomRow[2] == "n"){
		//Change image, and toggle current player when the grid is blank - disable everything for that grid when it has been clicked once
		
		var parent = document.getElementById('rightBottom');
		var child = parent.getElementsByTagName('img')[0];
		
		if (mobile == true){
			if (currentPlayerIcon == "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png"){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}			
			else{
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
		}
		child.src = currentPlayerIcon;

		bottomRow[2]= currentPlayer;	//Updating the grid array to show that the spot has been filled 
		checkWin();		
		click += 1;
		//I can define & invoke functions
		toggleCurrentPlayer();
			
	}
}

//I can define & invoke functions
function toggleCurrentPlayer(){
	console.log(click);
	if (click <= 9){
		if (currentPlayer == "x"){
			currentPlayer = "o";
			document.getElementById("xIndicator").style.backgroundColor = "white";
			document.getElementById("oIndicator").style.backgroundColor = "red";
			
			if (mobile == true){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019580/f54f9d5e-6a7d-11e4-9b5f-6fea66004b83.png";
			}
			currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019579/f2f9081a-6a7d-11e4-8649-874f9b34dbca.png";
		}
		else{
			currentPlayer = "x";
			document.getElementById("oIndicator").style.backgroundColor = "white";
			document.getElementById("xIndicator").style.backgroundColor = "red";
			if (mobile == true){
				currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019595/10301f90-6a7e-11e4-9d0c-1145a657f343.png";
			}
			currentPlayerIcon = "https://cloud.githubusercontent.com/assets/4590693/5019594/0ec3e484-6a7e-11e4-9152-6e4a31d9a272.png";
		}
	}
	else{
		console.log("SHOW WIN LOSS TIE MESSAGE")
		document.getElementById("xIndicator").style.backgroundColor = "white";
		document.getElementById("oIndicator").style.backgroundColor = "white";
		restartGame("tie");
	}
	
}

function checkWin(){
	//Checks after 5 clicks if someone has won - disables game if someone has won
	//Minimum # of clicks to win a game = 5 but this function is called before the click counter is updated so 4
	if (click >= 4){

		//Horizontal
		if (topRow[0] == "o" & topRow[1] =="o" & topRow[2] =="o"){
			restartGame("o");
		}
		else if(topRow[0] == "x" & topRow[1] =="x" & topRow[2] =="x"){
			restartGame("x");
		}
		else if(middleRow[0] == "o" & middleRow[1] =="o" & middleRow[2] =="o"){
			restartGame("o");
		}
		else if(middleRow[0] == "x" & middleRow[1] =="x" & middleRow[2] =="x"){
			restartGame("x");
		}
		else if(bottomRow[0] == "o" & bottomRow[1] =="o" & bottomRow[2] =="o"){
			restartGame("o");
		}
		else if(bottomRow[0] == "x" & bottomRow[1] =="x" & bottomRow[2] =="x"){
			restartGame("x");
		}

		//Vertical
		else if(topRow[0] == "o" & middleRow[0] == "o" & bottomRow[0] == "o"){

			restartGame("o");
		}
		else if(topRow[1] == "o" & middleRow[1] == "o" & bottomRow[1] == "o"){

			restartGame("o");
		}
		else if(topRow[2] == "o" & middleRow[2] == "o" & bottomRow[2] == "o"){

			restartGame("o");
		}
		else if(topRow[0] == "x" & middleRow[0] == "x" & bottomRow[0] == "x"){

			restartGame("x");
		}
		else if(topRow[1] == "x" & middleRow[1] == "x" & bottomRow[1] == "x"){

			restartGame("x");
		}
		else if(topRow[2] == "x" & middleRow[2] == "x" & bottomRow[2] == "x"){

			restartGame("x");
		}

		//Diagonal
		else if (topRow[0] == "o" & middleRow[1] == "o" & bottomRow[2] == "o"){

			restartGame("o");
		}
		else if (topRow[2] == "o" & middleRow[1] == "o" & bottomRow[0] == "o"){

			restartGame("o");
		}
		else if (topRow[0] == "x" & middleRow[1] == "x" & bottomRow[2] == "x"){

			restartGame("x");
		}
		else if (topRow[2] == "x" & middleRow[1] == "x" & bottomRow[0] == "x"){

			//I can use parameters, arguments, & return values
			restartGame("x");
		}



	}
}


//I can use parameters, arguments, & return values 
function restartGame(winner){
	//Updating wins
	if (winner == "o"){
		oWins += 1;
		
	}else if (winner=="x"){
		xWins += 1;
	}
	document.getElementById("oWins").innerHTML = oWins;
	document.getElementById("oLosses").innerHTML = xWins;
	document.getElementById("xWins").innerHTML = xWins;
	document.getElementById("xLosses").innerHTML = oWins;

	if (winner != "tie"){
		var r = confirm(winner + " won ~ RESTART GAME?");
	}
	else{
		var r = confirm("TIED ~ RESTART GAME?");
	}

	if (r == true) {
		//OK pressed

		

    	//Resets the number of clicks back to 0
  		click = 0;


  		//Clears the list grid

		topRow[0] = "n";
		topRow[1] = "n";
		topRow[2] = "n";

		middleRow[0] = "n";
		middleRow[1] = "n";
		middleRow[2] = "n";

		bottomRow[0] = "n";
		bottomRow[1] = "n";
		bottomRow[2] = "n";


		//Clears the visual grid
		for (var i=0; i<gridNames.length; i++){

			var parent = document.getElementById(gridNames[i]);
			var child = parent.getElementsByTagName('img')[0];
			child.src = "";

		}
		document.getElementById("oIndicator").style.backgroundColor = "red";
		document.getElementById("xIndicator").style.backgroundColor = "white";




	} else {
    	//Cancel Pressed

    	//Show who won

    	if (xWins > oWins){
    		// X Wins

    		
    		if (mobile == true){
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019599/173f47ac-6a7e-11e4-953f-4e9633352777.png";
    		}
    		else{
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019598/14270294-6a7e-11e4-9523-eb5046b3181a.png";
    		}
    	}
    	else if (oWins > xWins){
    		// O Wins
    		if (mobile == true){
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019590/079b8ad6-6a7e-11e4-9385-b1277f5e91d4.png";
    		}
    		else{
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019589/05b4a1ee-6a7e-11e4-85f8-7d58e4864d5a.png";
    		}
    	}
    	else{
    		//Tie
    		if (mobile == true){
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019584/fd4b7384-6a7d-11e4-8dea-3e50bf3bf6af.png";
    		}
    		else{
    			document.getElementById("winnerMessage").src="https://cloud.githubusercontent.com/assets/4590693/5019582/f9dc4304-6a7d-11e4-9915-34f0ac08b051.png";
    		}
    	}


    	//Remove the red boxes behind the current player indicator 
    	document.getElementById("xIndicator").style.backgroundColor = "white";
    	document.getElementById("oIndicator").style.backgroundColor = "white";

	}




	
}
