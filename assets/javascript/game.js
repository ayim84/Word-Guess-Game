//Figure out how to exclude all keystrokes that aren't letters (jQuery?)
//Figure out how to reset game once mystery word is completed
//Figure out how to to alert users they've inputted a duplicate answer and make sure guess counter doesn't decrement.

// Variables

//Create array of possible answers
var mysteryWords = 
[
    "BEATNUTS",
    "BLACKALICIOUS",
    "FUGEES",
    "HEIROGLYPHICS",
    "NWA",
    "OUTKAST",
    "FABOLOUS",
    "LUDACRIS"
]

//Randomly choose word to be played and store as string
var word = mysteryWords[Math.floor(Math.random() * mysteryWords.length)];

//Create array containing word to be played.  One letter per element.
var wordArray = word.split("");

//Variable to track if pressed key is in word
var correctGuess = 0;

//Counter for number of guesses remaining
var guesses = 10;

//Array to store guess letters that aren't in word
var wrongLetters = [];

//Array to store characters from word as they are selected.
var answerArray = [];

//Add _ in elements equal to length of word
answerArray = new Array(wordArray.length);
answerArray.fill("_", 0, wordArray.length);

//Display word array with _ for each letter
document.getElementById("word").textContent = answerArray.join(" ");

//Game Code
document.onkeyup = function(event)
{
    var userInput = event.key.toUpperCase();
    console.log(userInput);

    for(i=0; i < word.length; i++)
    {
        if(userInput === word[i])
        {
            answerArray[i] = word[i];
            correctGuess++;
        }       
    }

    // for(j=0; j < wrongLetters.length; j++)
    // {
    //     if(userInput == wrongLetters[j]);
    //     {
    //         alert("You already guessed that letter.  Please try again.");
    //         guesses++;
    //         break;         
    //     }
    // }

    if(correctGuess == 0)
    {
        wrongLetters.push(userInput);
        guesses--;
    }

    correctGuess = 0;

    if(guesses === 0)
    {
        document.querySelector("#game").innerHTML = "<h1>Game Over</h1>";
    }

    document.getElementById("word").textContent = answerArray.join(" ");
    document.getElementById("guesses").textContent = "Guesses Left: " + guesses; 
    document.getElementById("wrongLetters").textContent = "Letters Already Guessed: " + wrongLetters.join(", ");  
}