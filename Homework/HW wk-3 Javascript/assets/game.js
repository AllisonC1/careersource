// /Choose a theme for your game! 

// Use key events to listen for the letters that your players will type

// Display the following on the page:

// (html)Press any key to get started!

// html+JS = Wins: (# of times user guessed the word correctly).

// HTML+JS If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// JS As the user guesses the correct letters, reveal them: m a d o _ _ a.

// JS Number of Guesses Remaining: (# of guesses remaining for the user).

// JS Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// JS After the user wins/loses the game should automatically choose another word and make the user play it.
// first we will setup variables
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessedLetter = [""]
var letterToGuess = null
var guessesLeft = 25
var wins = 0
var losses = 0

// create function to updateGuesses, updateGuessesLeft, and updateGuessesSoFar

function updateGuessesLeft(){
// here we target the id guesses-left so we can pass it the value the variable guessesLeft currently has in it    
    $("#guesses-left").text(guessesLeft)
}
function updateGuessLetter (){
      // Here we get a random letterToGuess and assign it based on a random generator (only looking at our array letters)
    letterToGuess = letters[Math.floor(Math.random() * letters.length)]
}
// updating to display guessedLetter to our HTML
function updateGuessesSoFar(){
    // we use the join method to keep adding to the array and add the comma to have seperation between letter
    $("#guesses-so-far").text(guessedLetter.join(", "))
}
// setting up function to reset everything
function reset() {
    letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    guessedLetter = [""]
    letterToGuess = null
    guessesLeft = 25
     wins = 0
    losses = 0
    
}
updateGuessesLeft();
updateGuessLetter();
$(this).keydown(function (event) {
    // subtracting from guessesLeft everytime user presses a key down
    guessesLeft--
    // storing the key pressed in a variable and making it lower case to reference it when needed
    var letterIncoming = event.key.toLowerCase()
    // this push method allows us to put the letter the user has pressed into the array guessedLetter
    guessedLetter.push(letterIncoming)

})
