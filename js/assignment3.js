// Event Listener for the 'load' event
window.addEventListener("load", function() {
	let username;	
	let age;
	let color;
	let total = 0;	// the total score 
	
	// Retrieve the elements 
	let computer = document.getElementById("computer");	
	let score = document.getElementById("score");
	let result = document.getElementById("result");	
	
	let game = document.getElementById("game");
	game.style.display = "none";	// hide the game
	
	let help_button = document.getElementById("help_button");
	help_button.style.display = "none";		// hide the 'help' button
	
	let play_again = document.getElementById("play_again");
	play_again.style.display = "none";		// hide the 'play again' button
	
	let exit = document.getElementById("exit");
	exit.style.display = "none";	// hide 'exit' button
	
	// Function to custom display and style for some variables
	function customDisplay() {
		game.style.display = "none";			// hide the game
		help_button.style.display = "none";		// hide the 'help' button
		play_again.style.display = "inline";	// display 'play again' button
		info.style.display = "none";			// hide info 
		score.innerHTML = "<strong>" + username + "'s<strong> score is now " + total + "!</strong>";	// change content for 'score'
		result.style.color = color;				// change color for 'result' to the color the user picked
		result.style.fontSize = "1.5em";		// change the font size for 'result'
		score.style.color = color;				// change color for 'score' to the color the user picked
		score.style.fontSize = "1.8em";			// change the font size for 'color'
		exit.style.display = "inline";			// display 'exit' button
	}
	
	// Function to handle the logic of the game and display the result 
	function play(option) {
		
		// declare and initialize random number from 1 to 3 to variable called 'pc'
		let pc = Math.floor(Math.random() * 3) + 1;
		
		// change the source for the image based on the outcome of 'pc'
		if (pc === 1) {				// 'rock' image if pc returns 1
			computer.src = "images/rock.png";	
		} else if (pc === 2) {		// 'paper' image if pc returns 2
			computer.src = "images/paper.png";
		} else if (pc === 3) {		// 'scissors' image if pc returns 3
			computer.src = "images/scissors.png";			
		}
		
		// set width and height for the image 
		computer.style.width = "150px";
		computer.style.height = "150px";
		
		// declare a variable for user choice
		let user;
		if (option === "rock")			// set 'user' to 1 if user picked 'rock'
			user = 1;
		else if (option === "paper")	// set 'user' to 2 if user picked 'paper'
			user = 2;
		else if (option === "scissors") // set 'user' to 3 if user picked 'scissors'
			user = 3;
		
		// compare and display the result of the match between user and computer 
		// if user wins, they gets 1 score. if user loses, they loses 1 score. if it's equal, the score doesn't change
		if (user === pc)
			result.innerHTML = "<strong>Equal!</strong>";
		else if ((user === 1) && (pc === 2)) {					// user picks 'rock', computer is 'paper' --> user loses and loses 1 score
			result.innerHTML = "<strong>You lose!</strong>";
			total -= 1;
		} else if ((user === 1) && (pc === 3)) {				// user picks 'rock', computer is 'scissors' --> user wins and gets 1 score
			result.innerHTML = "<strong>You win!</strong>";
			total += 1;
		} else if ((user === 2) && (pc === 1)) {				// user picks 'paper', computer is 'rock' --> user wins and gets 1 score
			result.innerHTML = "<strong>You win!</strong>";
			total += 1;
		} else if ((user === 2) && (pc === 3)) {				// user picks 'paper', computer is 'scissors' --> user loses and loses 1 score
			result.innerHTML = "<strong>You lose!</strong>";
			total -= 1;
		} else if ((user === 3) && (pc === 1)) {				// user picks 'scissors', computer is 'rock' --> user loses and loses 1 score
			result.innerHTML = "<strong>You lose!</strong>";	
			total -= 1;
		} else if ((user === 3) && (pc === 2)) {				// user picks 'scissors', computer is 'paper' --> user wins and gets 1 score
			result.innerHTML = "<strong>You win!</strong>";
			total += 1;
		}
	}
	
	// Event Listener to verify username input
	document.forms.userform.username.addEventListener("input", function() {
		let msg = document.getElementById("usernamemsg");		// retrieve the element with id 'usernamemsg'
		if (this.value === "") {	// if the username is empty, display error message in blue color
			msg.innerHTML = "You must enter your username!";
			msg.style.color = "blue";
		} else {
			msg.innerHTML = "";
		}
	});
	
	// Event Listener to verify age input
	document.forms.userform.age.addEventListener("input", function() {
		let msg = document.getElementById("agemsg");			// retrieve the element with id 'agemsg'
		if (this.value === "" || isNaN(this.value)) {	// if the age is empty or is not a number, display error message in blue color		
            msg.innerHTML = "You must enter your age!";
			msg.style.color = "blue";
		} else {
			msg.innerHTML = "";
		}
	});
	
	// Event Listener for the 'Help' button
	help_button.addEventListener("click", function() {		
		//display some instructions for the user
		this.innerHTML = "Pick <em><strong>rock, paper</strong></em> or <em><strong>scissors</strong></em> to play with the computer!";		
	});
	
	// Event Listener for the 'Play Again' button
	play_again.addEventListener("click", function() {
		game.style.display = "inline";
	});
	
	// Event Listener for the 'Exit' button
	exit.addEventListener("click", function() {
		window.location.reload();
	});
	
	// Event Listener for the user clicking the 'Rock' button
	rock.addEventListener("click", function() {		
		play("rock");		// call play function with parameter "rock" for when user picks "rock"
		customDisplay();	// call customDisplay function
	});
	
	// Event Listener for the user clicking the 'Paper' button
	paper.addEventListener("click", function() {		
		play("paper");		// call play function with parameter "paper" for when user picks "paper"
		customDisplay();	// call customDisplay function
	});
	
	// Event Listener for the user clicking the 'Scissors' button
	scissors.addEventListener("click", function() {	
		play("scissors");	// call play function with parameter "scissors" for when user picks "scissors"
		customDisplay();	// call customDisplay function		
	});
	
	// Event Listener for form submission
	document.forms.userform.addEventListener("submit", function(event) {
        event.preventDefault();		// prevent the form from submitting by calling the preventDefault method of the event object
		
		// get user inputs - name, age, and color
		username = document.forms.userform.username.value;
		age = document.forms.userform.age.value;
		color = document.forms.userform.color.value;
		
		// display welcome message with the username in the color that the user picked
		let output = "";
		let info = document.getElementById("info");
		info.innerHTML = "Welcome<strong><em> " + username + " (" + age + " years old) </em></strong>to the game!";
		info.innerHTML += "<p>Are you ready?</p>";
		info.style.color = color;
		info.className = "container";	// change style for the welcome message
		
		// hide the form
		let container = document.getElementById("container");
		container.style.display = "none";	
		
		// display the game and the 'help' button
		game.style.display = "inline";
		help_button.style.display = "inline";
	});
});