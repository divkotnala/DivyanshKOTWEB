// Q2  for keep adding number to array till entered 0

let xx = [];
let a1 = prompt("Enter number to added to array : ");
while(true) {
    let a = parseInt(a1)
    xx.push(a);
    if (a == 0) {
        break;
    }
    else {
        a1 = prompt("Enter number to added to array : ");
    }
}
console.log(`Array created successfully : ${xx}`);