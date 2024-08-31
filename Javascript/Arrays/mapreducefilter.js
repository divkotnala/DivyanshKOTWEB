// Map Vs for each
let ar = [54,21,43,246]
let x = ar.forEach((value,index,array)=>{
    console.log(`Index : ${index}, Value : ${value}, Array : ${array}`);
    return value*value;
})
console.log(ar);

let a = ar.map((value,index,array)=>{
    console.log(`Index : ${index}, Value : ${value}, Array : ${array}`);
    return value*value;
});
console.log(a);

//Filter Function

let ard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let a1 = ard.filter((a)=>{
    return a>=(a*a);
})
console.log(a1);

//reduce function : Multiplication of all the elements of the array
let a2 = ard.reduce((x1,x2)=>{
    return x1*x2    
})
console.log(a2);