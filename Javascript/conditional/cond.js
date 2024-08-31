// let a = prompt("Driving Test Eligibility check");

// a = Number.parseInt(a)
// if (a < 0 && a>110){
//   alert("This is an invalid age")
// }

// else if (a < 9){
//   alert("You are a kid and you cannot even think of driving")
// }

// else if (a < 18 && a >= 9){
//   alert("You are a kid and you can think of driving after 18")
// }

// else if(a>=18 && a<90){
//   alert("You can now drive as you are above 18")
// }

// else {
//   alert("Sorry you are too old to drive, you should stay at home... you may have deafness of partial catract")
// }
let a = prompt("Driving Test Eligibility check");

        a = Number.parseInt(a);
        if (a < 0 || a > 110) {
            alert("This is an invalid age");
        } else if (a < 9) {
            alert("You are a kid and you cannot even think of driving");
        } else if (a < 18 && a >= 9) {
            alert("You are a kid and you can think of driving after 18");
        } else if (a >= 18 && a < 90) {
            alert("You can now drive as you are above 18");
        } else {
            alert("Sorry, you are too old to drive, you should stay at home... you may have deafness or partial cataract");
        }