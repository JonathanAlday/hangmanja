// GLOBAL VARIABLES (accesible by all functions)
// ------------------------------------------------------------

// Array of Word Options (all lowercase)
var wordslist = ["tesla","ferrari","merecede"];

// Solution will be held here
var chosenWord = "";

// This will break the solution into individual letters to be stored in array
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex:'a_ple')
var blanksAndSuccesses = [];

//  Holds all of the wrong guesses
var wrongGuesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// Functions
//-------------------------------------------

//Note. startGame() is not being run here. Its just being made for future use
function startGame() {

    // resets the guesses back to original specific number 
    numGuesses = 9;

    // Solution is chosen randomly from wordList
    chosenWord - wordsList[Math.floor(Math.random() * wordsList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // we count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // we print the solution in console (for testing)
    console.log(chosenWord);

    // Critical Line:: here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    // Critical Line:: here we reset the wrong guess from the previous round
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with appriate number of blanks,
    // which will be based on the number of letters in the solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // .print the initial blanks in the console
    console.log(blanksAndSuccesses);

    // rreprints the guessesLeft to 9 
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // clears the wrong guesses from the previous round
    document.getElementById.("wrong-guesses").innerHTML. = wrongGuesses.join(" ");
}