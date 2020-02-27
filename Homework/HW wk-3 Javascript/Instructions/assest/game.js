// setting up variables 
//the letters 
//set up arrays to keep track of the letters that the person guessed so far 
//pick one of the letters 
//wins, loses, guesses left, 
var letters = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
] 
var lettersguessedsofar = [ 

] 
var wins = 0 
var loses = 0 
var guessesremaining = 9 
//fuction of reseting the game, guesses remaining 
//letters to guess 
function reset () {
     guessesremaining = 9 
     lettersguessedsofar = [ ] 
} 
function GuessesRemaining () { 
document.getElementById ("Guesses_left").innerHTML = guessesremaining

} 
 
function guessesSoFar () { 
document.getElementById ("Your_guesses_so_far").innerHTML= guessesSoFar 
} 
function letterToGuess () { 
var LetterToGuess = letters [Math.floor(Math.random() * letters.length)]

} 
GuessesRemaining ()  
