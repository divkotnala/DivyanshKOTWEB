// Range is from 1 to 100
// score caluclation formula = 100 - no.of guess
document.getElementById("startGame").addEventListener("click", function() {
    let x1 = prompt("Welcome to Number guess Game!\nThe Range of this game is from 1 to 100\nWhats you Good Name : ");
    console.log(x1);
    let x = Math.floor((Math.random()*100)+1); // 1(inclusive) to 101(exclusive)
    let y = parseInt(prompt("Please enter your first guessed number : "));
    console.log(y);
    let guess = 0;

    while(true) {

        if (y < x && x-y >= 50){
            alert("Move ahead, your guess is too small!");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y < x && x-y > 15 && x-y < 50){
            alert("Move ahead Bro, keep Going! ");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y < x && x-y <= 15 && x-y >5){
            alert("Move ahead Bro, you're closer. keep Going! ");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y < x && x-y <=5 ){
            alert("Move a little ahead, You are too close, keep Going! ");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y > x && y-x >=50){
            alert("Move back, your guess is too large");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y > x && y-x < 50 && y-x > 15){
            alert("Move back bro, keep Going!");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y > x && y-x <= 15 && y-x > 5){
            alert("Move back bro, you're closer. keep Going!");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if (y > x && y-x <= 5){
            alert("Move back bro, you're too close. keep Going!");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
        else if ( y===x ){ 
            alert(`Hurray! ${x1}, you got it right, number was ${x}\nYour Score is : ${100 - guess}\nThankyou! for Playing the Game`);
            break; 
        }
        else  {
            alert("Invalid input! Please enter a number between 1 and 100");
            y = parseInt(prompt("Guess the number again : "));
            ++guess;
        }
    }
});