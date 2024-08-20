const hi={
    name : "Divyansh",
    value : false,
    classname : 65

}

console.log(hi)

 hi["name"]="Dic" //here we are not changing hi constant value but in reference to it we are changing a Key's value
hi["value"]= true

console.log(hi)
a= hi["classname"]
console.log(a)
console.log(hi.value)
console.log(hi["name"]);