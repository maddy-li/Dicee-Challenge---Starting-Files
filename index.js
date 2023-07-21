// changes dice img based on randomNum generation
function rollDice(img, randomNum) {
    if (randomNum == 1) {
        document.querySelector(img).setAttribute("src", "./images/dice1.png");
    }
    else if (randomNum == 2) {
        document.querySelector(img).setAttribute("src", "./images/dice2.png");
    }
    else if (randomNum == 3) {
        document.querySelector(img).setAttribute("src", "./images/dice3.png");
    }
    else if (randomNum == 4) {
        document.querySelector(img).setAttribute("src", "./images/dice4.png");
    }
    else if (randomNum == 5) {
        document.querySelector(img).setAttribute("src", "./images/dice5.png");
    }
    else if (randomNum == 6) {
        document.querySelector(img).setAttribute("src", "./images/dice6.png");
    }    
}

// generates random number between 1 and 6
var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// rolls dice!
rollDice('.img1', randomNumber1)
rollDice('.img2', randomNumber2)

// determines winner
if (randomNumber1 > randomNumber2) {
    // player 1 wins
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩 ";
}
else if (randomNumber2 == randomNumber1) {
    // draw
    document.querySelector("h1").textContent = "Draw!";
}