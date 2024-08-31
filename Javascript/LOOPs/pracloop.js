// using for loop iterate key values of object

let a = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let i=0; i<Object.keys(a).length; i++) {
    console.log("key : " + Object.keys(a)[i] + " ,value : " + a[Object.keys(a)[i]]);
}