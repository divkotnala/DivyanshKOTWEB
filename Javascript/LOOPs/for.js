
// Factorial normal for loop
let n = 10;
let fact = 1;
 for (let i = 1; i < (n+1); i++){
    fact *= i;

 }
 console.log("Factorial of", n, "is", fact);


//for in loop
let obj = {name: 'John', age: 30, city: 'New York'};
for(let i in obj){
   console.log("key:",i, "value:",obj[i]);

}


//for of loop
let b ="Divyansh"
for(let i of b){
   console.log(i);
}

