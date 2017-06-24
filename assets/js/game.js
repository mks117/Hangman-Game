 var levels = ["SIEGE OF SAGUNTUM", "CROSSING THE ALPS", "BATTKE IF ZAMA"];
 var currentLevel = levels[0];

 var gameState = ["Playing", "Win", "Loss"];
 var currentGameState = gameState[0];

 var army = [["Infantry", 50000], ["Cavalry", 9000], ["Elephants", 37]];
 // the value of console.log(army[0][1]); is 50000

 var words = ["ZAMA", "SCIPIO", "ELEPHANTRY", "CAVALRY", "INFANTRY", "HISPANIA", "ROME", "CARTHAGE", "HANNIBAL", "ALPS"];
 var lettersGuessed = [];
 var wordGuess;

 function MainMenu () {
 	// display main menu

 	// hide splash screen elements
 	document.getElementById("splash-screen").style.display = "none";

 	// hide about screen elements
 	document.getElementById("about-menu").style.display = "none"; 

 	// display main menu elements
 	document.getElementById("main-menu").style.display = "block";
 }

 function About () {
 	// display about page

 	// hide main menu
 	document.getElementById("main-menu").style.display = "none";

 	// display about menu
 	document.getElementById("about-menu").style.display = "block"; 	
 }

 function Intro () {
 	// start game

 	// hide main menu
 	document.getElementById("main-menu").style.display = "none";

 	// display intro
 	document.getElementById("intro-screen").style.display = "block";

 	fadeIn(document.getElementById("intro-text-1"), 5000);
 	setTimeout(function(){ fadeIn(document.getElementById("intro-text-2"), 5000) }, 5000);
 	setTimeout(function(){ fadeIn(document.getElementById("intro-text-3"), 5000) }, 10000);
 	setTimeout(function(){ fadeOut(document.getElementById("intro-text-1"), 2500) }, 12000);
 	setTimeout(function(){ fadeOut(document.getElementById("intro-text-2"), 2500) }, 12000);
 	setTimeout(function(){ fadeOut(document.getElementById("intro-text-3"), 2500) }, 15000);
 	setTimeout(function(){ LoadLevel(currentLevel)}, 10);

 	// hide the intro screen
 	setTimeout(function(){ document.getElementById("intro-screen").style.display = "none";}, 1); 
 }

 function LoadLevel (_currentLevel) {
 	// load the current level

 	document.getElementById("levels-screen").style.display = "block";

 	// load Saguntum
 	if(currentLevel === 0) {

 	}

 	// load Alps
 	if(currentLevel === 1) {

 	}

 	// load Zama
 	if(currentLevel === 2) {

 	}
 }

 function Victory () {
 	// display victory screen
 }

 function Defeat () {
 	// display defeat screen
 }

 function ResetGame () {
 	// reset game data for a new game
 }


// toggleOpacity(), fadeObject(), fadeIn() and fadeOut written by uder 'jfriend00' on StackOverflow 
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

 	
 		
 	