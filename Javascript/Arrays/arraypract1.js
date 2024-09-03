
// Q1 - Create an array and take input from user to add new elements to the array
let x = [];
let a = prompt("Enter Element to be added : ");
while(true){ //ERROR : Used True but correct is true
    x.push(a);
    n = prompt("Do you want to add more elements to the array (y/n)? : ");
    if (n == "y"){ 
        a = prompt("Enter Element to be added : "); // dont use again push command, it will automatically pass
    }
    else {
        break;
    }
        
}
//error - forgot to use consolelog
console.log(`Array Entered is : ${x}`);

