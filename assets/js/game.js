//
// Maxwell Schmelling
// 
// 
// 


/* VARIABLES */

	// three levels, loosely following the actual excapades of hannibal barca
	var levels = ["SIEGE OF SAGUNTUM", "CROSSING THE ALPS", "BATTLE OF ZAMA"];

	// variable to keep trck of the current level
	var currentLevel = 0;

	// might not need this // array to hold the different game states
	var gameState = ["Playing", "Win", "Loss"];

	// variable to keep track of the current game state
	var currentGameState = gameState[0];

	// instead of "remaining guesses", the player has an army that will lose troops if they guess a letter wrong
	var army = [["Infantry", 50000], ["Cavalry", 9000], ["Elephantry", 37]];
	var lossAmount = [(50000*.3), (9000*.3), (37*.3)]

	// the value of console.log(army[0][1]); is 50000

	// words. might move to having levels[].length + 1 arrays for words. 1 for each level, then 1 for general words that could apply to any level's theme
	// WARNING: potential problem, words might be hard to guess since they're not everday kinds of words ;)
	var words = ["ZAMA", "SCIPIO", "ELEPHANTRY", "CAVALRY", "INFANTRY", "HISPANIA", "ROME", "CARTHAGE", "HANNIBAL", "ALPS"];

	// variable for keeping track of the current levels word
	var currentWord;

	// variable to keep track of the word in progress
	var hiddenWord;

	// array to keep track of what letters have been guessed
	var lettersGuessed = [];

	// variable to track the current letter guessed
	var letterGuess;

	// variable to check if guess is correct or not
	var correctGuess = false;



/* MY FUNCTIONS */
	// displays main menu
	function MainMenu () {

		// hide splash screen elements
		document.getElementById("splash-screen").style.display = "none";

		// hide about screen elements
		document.getElementById("about-menu").style.display = "none"; 

		// display main menu elements
		document.getElementById("main-menu").style.display = "block";
	}

	// display about page
	function About () {

		// hide main menu
		document.getElementById("main-menu").style.display = "none";

		// display about menu
		document.getElementById("about-menu").style.display = "block"; 	
	}

	function Intro () {
		// run the intro

		// hide main menu
		document.getElementById("main-menu").style.display = "none";

		// display intro
		document.getElementById("intro-screen").style.display = "block";

		// comment out to skip the intro screen
		fadeIn(document.getElementById("intro-text-1"), 5000);
		setTimeout(function(){ fadeIn(document.getElementById("intro-text-2"), 5000) }, 5000);
		setTimeout(function(){ fadeIn(document.getElementById("intro-text-3"), 5000) }, 10000);
		setTimeout(function(){ fadeOut(document.getElementById("intro-text-1"), 2500) }, 12000);
		setTimeout(function(){ fadeOut(document.getElementById("intro-text-2"), 2500) }, 12000);
		setTimeout(function(){ fadeOut(document.getElementById("intro-text-3"), 2500) }, 15000);
		setTimeout(function(){ LoadLevel(currentLevel)}, 17500);
		setTimeout(function(){ document.getElementById("intro-screen").style.display = "none";}, 17500); 

		// uncomment to skip intro screen
		// setTimeout(function(){ LoadLevel(currentLevel)}, 10);
		// setTimeout(function(){ document.getElementById("intro-screen").style.display = "none";}, 10); 
	}

	function LoadLevel (_currentLevel) {
		// load the current level

		document.getElementById("levels-screen").style.display = "block";

		// load Saguntum
		if(currentLevel === 0) {
			document.getElementById("level-name").innerHTML = levels[0];
			console.log(currentLevel);
			currentWord = randomizeLevelWord(words);
			hideWord(currentWord);
			document.getElementById("level-word").innerHTML = hiddenWord;
			document.getElementById("letters-guessed").innerHTML = "";
			document.getElementById("infantry-count").innerHTML = army[0][1];
			document.getElementById("cavalry-count").innerHTML = army[1][1];
			document.getElementById("elephantry-count").innerHTML = army[2][1];
		}

		// load Alps
		if(currentLevel === 1) {

		}

		// load Zama
		if(currentLevel === 2) {

		}
	}

	// randomizes the word for the level
	function randomizeLevelWord (_levelWords) {
		currentWord = _levelWords[Math.floor(Math.random() * _levelWords.length)];
		return currentWord;
	}

	// converts the current words chars to '_'
	function hideWord(_currentWord) {
		hiddenWord = _currentWord;
		for (var i = 0; i < hiddenWord.length; i++) {
			hiddenWord = hiddenWord.substring(0, i) + '_' + hiddenWord.substring(i+1);
		}
		return hiddenWord;
	}


	function guess() {


		letterGuess = document.getElementById("guess-box").value;
		letterGuess = letterGuess.toUpperCase();
		console.log(letterGuess);

		// check if letter has been guessed already
		for (var i = 0; i < lettersGuessed.length; i++) {
			if(letterGuess === lettersGuessed[i]) {
				alert("already guessed");
				console.log("already guessed");
				document.getElementById("guess-box").value = "";
				return;
			}
		}


		// change characters of hiddenWord string from '_' to their respective characters
		for (var i = 0; i < hiddenWord.length; i++) {
			if(currentWord[i] === letterGuess) {
				hiddenWord = hiddenWord.substring(0, i) + letterGuess + hiddenWord.substring(i+1);
				correctGuess = true;
			}

			else correctGuess = false;
		}
		console.log(hiddenWord);
		
		// run the wrongGuess function if guess is wrong
		if(!correctGuess) { 
			wrongGuess();
		}

		document.getElementById("letters-guessed").innerHTML += (letterGuess + " ");
		document.getElementById("level-word").innerHTML = hiddenWord;
		document.getElementById("guess-box").value = "";
		

		// not sure why last '_' wont update before victory alert
		if(hiddenWord === currentWord) {
			alert("Victory");
			Victory();
		}

		lettersGuessed.push(letterGuess);
	}

	function revealChar (_hiddenWord, _currentWord) {

	}

	function wrongGuess () {
		// called when players guess is wrong
		console.log("wrong guess");
		
		var currAmount;
		//1) tell player their guess is wrong
		//2) subtract from player's army
		alert("You are wrong, try again");
		for (var i = 0; i < army.length; i++) {
			currAmount = army[i][1];
			currAmount -= lossAmount[i];
			army[i][1] = currAmount;
			if(army[2][1] < 0) {
				Defeat();
				break;
			}
		}

		document.getElementById("infantry-count").innerHTML = army[0][1];
		document.getElementById("cavalry-count").innerHTML = army[1][1];
		document.getElementById("elephantry-count").innerHTML = army[2][1];
		//3) check if fail state is met
	}


	// displays victory screen when win conditions are met
	function Victory () {
		document.getElementById("levels-screen").style.display = "none";

		MainMenu();

	}

	// displays defeat screen when loss conditions are met
	function Defeat () {
		// display defeat screen
		document.getElementById("levels-screen").style.display = "none";

		alert("You have been defeated.");

		MainMenu();
	}

	// resets variables and returns to the splash screen
	 function ResetGame () {
	 	// reset game data for a new game
	 }

// toggleOpacity(), fadeObject(), fadeIn() and fadeOut written by user 'jfriend00' on StackOverflow 
	// I had the idea to fade in and out sections in the intro screen. in trying to figure out the best way to accomplish this,
	//	I found the following functions that accomplish exactly what I needed
	function toggleOpacity(id) {
	   var el = document.getElementById(id);
	   if (el.style.opacity == 1) {
	       fadeObject(el, 1, 0, 2000)
	   } else {
	       fadeObject(el, 0, 1, 2000)
	   }
	}

	function fadeIn(el, duration) {
	    fadeObject(el, 0, 1, duration);
	}

	function fadeOut(el, duration) {
	    fadeObject(el, 1, 0, duration);
	}

	function fadeObject(el, start, end, duration) {
	   var range = end - start;
	   var goingUp = end > start;
	   var steps = duration / 20;   // arbitrarily picked 20ms for each step
	   var increment = range / steps;
	   var current = start;
	   var more = true;
	   function next() {
	       current = current + increment;
	       if (goingUp) {
	           if (current > end) {
	               current = end;
	               more = false;
	           }
	       } else {
	           if (current < end) {
	               current = end;
	               more = false;
	           }
	       }
	       el.style.opacity = current;
	       if (more) {
	           setTimeout(next, 20);
	       }
	   }
	   next();
	}

 	

 	
 		
 	