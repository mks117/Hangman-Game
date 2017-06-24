  function MainMenu () {
 	// display main menu
 	console.log("You're in the main menu");

 	// hide splash screen elements
 	document.getElementById("splash-screen").style.display = "none";

 	// hide about screen elements
 	document.getElementById("about-menu").style.display = "none" 

 	// display main menu elements
 	document.getElementById("main-menu").style.display = "block"
 }

 function About () {
 	// display about page

 	// hide main menu
 	document.getElementById("main-menu").style.display = "none"

 	// display about menu
 	document.getElementById("about-menu").style.display = "block" 	
 }

 function Intro () {
 	// start game

 	// hide main menu
 	document.getElementById("main-menu").style.display = "none"

 	// display intro

 }

 function AdvanceLevel () {
 	// advance to next level
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

 	
 		
 	