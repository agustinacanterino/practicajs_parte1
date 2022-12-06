var perro = new Object();

perro = {
    name: "Camelia",
    age: 7,
    size: "Medium",
}

function animal2(obj){
    return console.log(`The dog's name is ${obj.name}, her age is ${obj.age} and her size is ${obj.size}`);
}

animal2(perro);
  

var dog = new Object();

dog = {
    name: "dog",
    legs: 4,
    color: "white",
}

function animal(obj){
    return console.log(`This ${obj.color} ${obj.name} has ${obj.legs} legs.`);
}

animal(dog);







// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]




// con for each 

const array = [1, 2, 3];
const arrayDouble = [];

array.forEach((item, index) => arrayDouble[index] = item + item);

// console.log(arrayDouble);

// con funcion 
const x = [1,2,3]

function maps(x){
   let arraydoble = [];
   for (let i = 0; i < x.length; i++){
        arraydoble[i] = x[i] + x[i];
   }
   return arraydoble;
}

maps(x);

console.log(maps(x));




/* CONSOLE CLEAR 🐷🐽*/
console.clear();