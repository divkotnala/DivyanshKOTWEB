
// accessing all the elements of an array 
let ar = [1,2,3,4,5,6,7,8,9,10,11,12,13]
for(let i =0;i<ar.length;i++){
    console.log(ar[i]);
}

let a = "Hello, world!"
console.log(`I want to say ${a}`);

// Opertations while accessing elements of array and Usage of forEach
// square printing
ar.forEach((elements)=>{
})


//for of and for in
let ax = [353,64,654,632,554,886,9785,5463,1432];
for ( item of ax) {
    console.log(item);}

for ( item in ax) {
    console.log(item);}

console.log("The key value pairs ==>")
for ( key in ax) {
    console.log(`Key no. : ${key}`, `Value : ${ax[key]} `);}
