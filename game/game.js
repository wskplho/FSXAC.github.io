var isLoggedIn = false;


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

function gridAction(elementId) {
	var id = elementId;
	var row_id = elementId[0];
	var row = 0
	var col = parseInt(elementId.slice(2, elementId.length));
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
			// top left
		}
		else if (col == 14) {
			// top right
		} else {
			grid[row][col].src = "game\\black_top.png";
		}
	} else if (row == 14) {
		if (col == 0) {
			grid[row][col].src = "game\\black_bottom_left.png";
		}
		else if (col == 14) {
			grid[row][col].src = "game\\black_bottom_right.png";
		} else {
			grid[row][col].src = "game\\black_bottom.png";
		}
	} else {
		if (col == 0) {
			grid[row][col].src = "game\\black_left.png";
		} else if (col == 14) {
			grid[row][col].src = "game\\black_right.png";
		} else {
			grid[row][col].src = "game\\black.png";
		}
	}
}