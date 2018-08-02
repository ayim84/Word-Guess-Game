// Variables

var biggie = ["T", "H", "E", "N", "O", "T", "O", "R", "I", "O", "U", "S", "B", "I", "G"];
var correctGuess = 0;
var guesses = 10;
var answerArray = [];
answerArray.fill("_", 0,14);
var wrongLetters = [];

answerArray = new Array(15);
answerArray.fill("_", 0, 15);

document.getElementById("biggie").textContent = answerArray.join(" ");

//Game Code
document.onkeyup = function(event)
{
    var userInput = event.key.toUpperCase();
    console.log(userInput);

    for(i=0; i < biggie.length; i++)
    {
        if(userInput === biggie[i])
        {
            answerArray[i] = biggie[i];
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

    document.getElementById("biggie").textContent = answerArray.join(" ");
    document.getElementById("guesses").textContent = "Guesses Left: " + guesses; 
    document.getElementById("wrongLetters").textContent = "Letters already guessed: " + wrongLetters.join(", ");  
}