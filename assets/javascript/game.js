/* Bugs
-Figure out how to exclude all keystrokes that aren't letters (jQuery?)
-Figure out how to to alert users they've inputted a duplicate answer and make sure guess counter doesn't decrement.
-Last letter isn't appearing before new word appears.
*/

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

//Create functino to run one round of game.
function playGame ()
{
    //Create random index of wordArray to use for mystery word.
    var wordIndex = Math.floor(Math.random() * mysteryWords.length);

    //Randomly choose word to be played and store as string.
    var word = mysteryWords[wordIndex];

    //Create array containing word to be played.  One letter per element.
    var wordArray = word.split("");

    //Remove mystery word used for this round so I won't be used in future rounds.
    mysteryWords.splice(wordIndex, 1);

    //Variable to track if pressed key is in word.
    var correctGuess = 0;

    //Array to store guess letters that aren't in word.
    var wrongLetters = [];

    //Array to store characters from word as they are selected.
    var answerArray = [];

    //Counter for number of guesses remaining.
    var guesses = 10;

    //Counter for number of wins.
    var wins = 0;
    
    //Add _ in elements equal to length of word.
    answerArray = new Array(wordArray.length);
    answerArray.fill("_", 0, wordArray.length);

    //Display word array with _ for each letter.
    document.getElementById("word").textContent = answerArray.join(" ");

    //Game Code
    document.onkeyup = function(event)
    {
        //Make user input uppercase to match mysteryWord array values.
        var userInput = event.key.toUpperCase();
        console.log(userInput);

        //Loop through mystery work to check if user inputted character exists in word and if so, add character to answerArray.  Increment correctGuess var if inputted character is in mystery word.
        for(i=0; i < word.length; i++)
        {
            if(userInput === word[i])
            {
                answerArray[i] = word[i];
                correctGuess++;
            }       
        }

        /* Attempt at notifying user if duplicate entry is inputted.  Not working.
        for(j=0; j < wrongLetters.length; j++)
        {
            if(userInput == wrongLetters[j]);
            {
                alert("You already guessed that letter.  Please try again.");
                guesses++;
                break;         
            }
        }*/

        //If user inputted character is not in mystery word, add character to wrongLetters array. Then reset correctGuess var to 0 for next user input.
        if(correctGuess == 0)
        {
            wrongLetters.push(userInput);
            guesses--;
        }

        correctGuess = 0;

        //Alert user if they're out of guesses, update html, and start new round.
        if(guesses === 0)
        {
            document.getElementById("word").textContent = answerArray.join(" ");
            document.getElementById("guesses").textContent = "Guesses Left: 10";
            document.getElementById("wrongLetters").textContent = "Letters Already Guessed:";
            alert("You Lose");
            playGame();
        }

        //Update html to display current status of answerArray, guesses left, and letters already guessed.
        document.getElementById("word").textContent = answerArray.join(" ");
        document.getElementById("guesses").textContent = "Guesses Left: " + guesses; 
        document.getElementById("wrongLetters").textContent = "Letters Already Guessed: " + wrongLetters.join(", ");  

        //Check to see if mystery word has been completed, alert user that they've won, increent wins counter and display in html, and reset "Letters Already Guessed" in html.
        var wordNotComplete = 0;

        for(var j = 0; j < answerArray.length; j++)
        {
            if(answerArray[j] == "_")
            {
                wordNotComplete = 1;
            }
        }
    
        if(wordNotComplete == 0)
        {
            wins++;
            document.getElementById("word").textContent = answerArray.join(" ");
            document.getElementById("guesses").textContent = "Guesses Left: 10";
            document.getElementById("wins").textContent = "Wins: " + wins;
            document.getElementById("wrongLetters").textContent = "Letters Already Guessed:";
            alert("You Win");
            playGame();
        }
    }
}

playGame();