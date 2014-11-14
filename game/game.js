var isLoggedIn = false;
var currentPlayer = "black";

// creates a 2D list for the grid
var grid = [];

// create empty grid spaces
for (var i = 0; i < 15; i++) {
	grid[grid.length] = [];
}

// add elements to the list
var row_index = "abcdefghijklmno";
for (var row = 0; row < row_index.length; row++) {
	y = row_index[row];
	for (var col = 0; col < 15; col++) {
		x = col;
		grid[row][col] = document.getElementById(y + "_" + x.toString());
	}
}

console.log(grid);

// functions
function login() {
	var login_username = document.getElementById("login_name");		// user name text field
	var login_password = document.getElementById("login_pass");		// password field
	var login_status = document.getElementById("login_error")		// message
	var background_image = document.getElementById("background_image_container");	// background image
	var login_container = document.getElementById("login_container"); // login div
	
	if (login_username.value == "m.he3" && login_password.value == "7355608") {
		background_image.style.backgroundImage = "url(background_logged.jpg)";
		login_status.innerHTML = "";
		login_container.style.visibility = "hidden";
			
		isLoggedIn = true;
	} else {
		login_status.innerHTML = "Invalid Login";
		background_image.style.backgroundImage = "url(background_image.jpg)";
	}
	
	// clear the check box and text box
	login_username.value = "";
	login_password.value = "";	
}

// add a block to the board
function add(placement, row, col) {
	if (grid[row][col].src.indexOf("blank") != -1) {
		if (currentPlayer == "black") {
			switch(placement) {
				
				case "top_left":
					grid[row][col].src = "game\\black_top_left.png";
					break;
				case "top_right":
					grid[row][col].src = "game\\black_top_right.png";
					break;
				case "top":
					grid[row][col].src = "game\\black_top.png";
					break;
				case "left":
					grid[row][col].src = "game\\black_left.png";
					break;
				case "right":
					grid[row][col].src = "game\\black_right.png";
					break;
				case "bottom":
					grid[row][col].src = "game\\black_bottom.png";
					break;
				case "bottom_left":
					grid[row][col].src = "game\\black_bottom_left.png";
					break;
				case "bottom_right":
					grid[row][col].src = "game\\black_bottom_right.png";
					break;
				case "center":
					grid[row][col].src = "game\\black.png";
					break;
			}	
		} else if (currentPlayer == "white") {
			switch(placement) {
			
				case "top_left":
					grid[row][col].src = "game\\white_top_left.png";
					break;
				case "top_right":
					grid[row][col].src = "game\\white_top_right.png";
					break;
				case "top":
					grid[row][col].src = "game\\white_top.png";
					break;
				case "left":
					grid[row][col].src = "game\\white_left.png";
					break;
				case "right":
					grid[row][col].src = "game\\white_right.png";
					break;
				case "bottom":
					grid[row][col].src = "game\\white_bottom.png";
					break;
				case "bottom_left":
					grid[row][col].src = "game\\white_bottom_left.png";
					break;
				case "bottom_right":
					grid[row][col].src = "game\\white_bottom_right.png";
					break;
				case "center":
					grid[row][col].src = "game\\white.png";
					break;
			}
		}
		return true;
	} else {
		return false;
	}
}

// check if a person wins. returns [win or not, win list(5 positions)]
function checkWin(row, col) {
	// check top left
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row - 1][col - 1].src.match(currentPlayer) &&
	grid[row - 2][col - 2].src.match(currentPlayer) && 
	grid[row - 3][col - 3].src.match(currentPlayer) &&
	grid[row - 4][col - 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check top
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row - 1][col].src.match(currentPlayer) &&
	grid[row - 2][col].src.match(currentPlayer) && 
	grid[row - 3][col].src.match(currentPlayer) &&
	grid[row - 4][col].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check top right
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row - 1][col + 1].src.match(currentPlayer) &&
	grid[row - 2][col + 2].src.match(currentPlayer) && 
	grid[row - 3][col + 3].src.match(currentPlayer) &&
	grid[row - 4][col + 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check left
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row][col - 1].src.match(currentPlayer) &&
	grid[row][col - 2].src.match(currentPlayer) && 
	grid[row][col - 3].src.match(currentPlayer) &&
	grid[row][col - 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check right
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row][col + 1].src.match(currentPlayer) &&
	grid[row][col + 2].src.match(currentPlayer) && 
	grid[row][col + 3].src.match(currentPlayer) &&
	grid[row][col + 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check bottom left
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row + 1][col - 1].src.match(currentPlayer) &&
	grid[row + 2][col - 2].src.match(currentPlayer) && 
	grid[row + 3][col - 3].src.match(currentPlayer) &&
	grid[row + 4][col - 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check bottom
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row - 1][col].src.match(currentPlayer) &&
	grid[row - 2][col].src.match(currentPlayer) && 
	grid[row - 3][col].src.match(currentPlayer) &&
	grid[row - 4][col].src.match(currentPlayer)) {
		alert("yes");
	}
	
	// check bottom right
	if (grid[row][col].src.match(currentPlayer) && 
	grid[row + 1][col + 1].src.match(currentPlayer) &&
	grid[row + 2][col + 2].src.match(currentPlayer) && 
	grid[row + 3][col + 3].src.match(currentPlayer) &&
	grid[row + 4][col + 4].src.match(currentPlayer)) {
		alert("yes");
	}
	
	return [false];
}

function gridAction(elementId) {
	var id = elementId;
	var row_id = elementId[0];
	var row = 0
	var col = parseInt(elementId.slice(2, elementId.length));
	var placed = false;
	
	switch(row_id) {
		case "a":
			row = 0;
			break;
		case "b":
			row = 1;
			break;
		case "c":
			row = 2;
			break;
		case "d":
			row = 3;
			break;
		case "e":
			row = 4;
			break;
		case "f":
			row = 5;
			break;
		case "g":
			row = 6;
			break;
		case "h":
			row = 7;
			break;
		case "i":
			row = 8;
			break;
		case "j":
			row = 9;
			break;
		case "k":
			row = 10;
			break;
		case "l":
			row = 11;
			break;
		case "m":
			row = 12;
			break;
		case "n":
			row = 13;
			break;
		case "o":
			row = 14;
			break;	
	}
	console.log("row: " + row.toString() + "  ||  " + "col: " + col.toString());
	
	// change texture
	if (row == 0) {
		if (col == 0) {
			placed = add("top_left", 0, 0);
		}
		else if (col == 14) {
			placed = add("top_right", 0, 14);
		} else {
			placed = add("top", 0, col);
		}
	} else if (row == 14) {
		if (col == 0) {
			placed = add("bottom_left", 14, 0);
		}
		else if (col == 14) {
			placed = add("bottom_right", 14, 14);
		} else {
			placed = add("bottom", 14, col);
		}
	} else {
		if (col == 0) {
			placed = add("left", row, 0);
		} else if (col == 14) {
			placed = add("right", row, 14);
		} else {
			placed = add("center", row, col);
		}
	}
	
	// switch player or end game only if placement is successful
	if (placed) {
	
		// check wins
		if (checkWin(row, col)[0]) {
			alert("win");
		
		} else {
			if (currentPlayer == "black") {
				currentPlayer = "white";
				console.log("white player's turn");
			} else if (currentPlayer == "white") {
				currentPlayer = "black";
				console.log("black player's turn");
			}
		}

	} else {
		console.log("invalid placement");
	}
}