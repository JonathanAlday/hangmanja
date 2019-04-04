// GLOBAL VARIABLES (accesible by all functions)
// ------------------------------------------------------------

// Array of Word Options (all lowercase)
var wordslist = ["tesla","ferrari","mclaren"];

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
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// Its where we will do all of the comparisons for matches
Function checkLetters(Letter) {
    // This boolean will be toggled based on whether or not a user letter is found in the word
    var letterInWord = false;

    // Check if a letter exists inside the array at all
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            // if the letter exists then the toggle this boolean is true. This will lie used in the next step.
            letterInWord = true;
        }
    }
    // If the letter exists somewhere in the word, then figure ouit exactly where (which indices)
    if (letterInWord) {
        // loop through the word
        for (var j = 0; j < numBlanks; j++) {
            // populate the blanksAndSuccesses with every instance of the letter
            if (chosenWord[j] === letter) {
                // Here we set the specific space in the blanks and letter when there is a 
                blanksAndSuccesses[j] = letter;

            }
        }

        // logging for testing
        console.log(blanksAndSuccesses);

    }

    //if the letter doesnt exist at all...
    else {

        //... then we add the letter to the list of wrong letters, and we subtract one of the guesses
        wrongGuesses.push(letter);
        numGuesses--i

    }
}

// here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    //First, log an initial status update in the consule telling us how many wins, losses, and guesses are left
    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    // update the html to reflect the new number of guesses, also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // this will print the wrong guesses onto the page
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // this will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // if we have gotten all the letters to match the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

        //...add to the win counter and give the user an alert
        winCounter++;
        alert("You WIN!!!");

        // update the win counter in the html and restart the game
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();

    }

    // if weve run out of guesses..
    else if (numGuesses === 0) {

        // Add to the loss counter
        lossCounter++;

        // give the user an alert
        alert("You LOSE");

        //updates the loss counter in the html
        document.getElementById("loss-counter").innerHTML = lossCounter;

        // restart the game
        startGame();
    }
    
}

// MAIN PROCESS (this is the code that controls what is actuallt running)
//---------------------------------------------------------------------------------------------------------------

//start the game
startGame();

//initiate the function for capturing key clicks
document.onkeyup = function(event) {

    // convert all key clicks to lowercase letters
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    //Runs the code to check for correctness
    checkLetters(letterGuessed);

    // runs the code after each round is done
    roundComplete();
}