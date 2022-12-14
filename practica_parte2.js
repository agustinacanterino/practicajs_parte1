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






// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// Muchos dragones
// 1 dragon → 2 balas para morir

function hero(bullets, dragons){
    if (bullets >= dragons  * 2){
        return true;
    }else{
        if (bullets  < dragons * 2) {
            return false;
        }
        
    }
    }
    
console.log(hero(3, 2));

// lo mismo pero con arrow function . » 

const hero2 = ((bullets, dragons ) => dragons * 2 <= bullets );

console.log(hero2(4, 2));



// EXCERCISE | Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
let suma = 0;

// recorre cada item del array, y lo suma

for (let n of array1){
    suma = suma + n;
}

for (let n of array2){
    suma = suma + n;
}

console.log(suma);

// otra forma, pero en una funcion como pide codewars

function arrayPlusArray(arr1, arr2) {
    let suma2 = 0;
    for (let n of arr1){
      suma2 = suma2 + n;
  }
  
  for (let n of arr2){
      suma2 = suma2 + n;
  }
    return suma2;
  }


console.log(arrayPlusArray(array1, array2));


/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);


// Century From Year
// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function centuryTest(year) {
    let mensaje = "";
    if (year <= 100){
        mensaje = "1st century";
       return mensaje;
    }
    if (year >=101 && year <200){
        mensaje = "2nd century";
       return mensaje;
    }
    if (year >= 200 && year <300){
        mensaje = "3th century";
       return mensaje;
    }
    if (year >= 300 && year <400){
        mensaje = "4th century";
       return mensaje;
    }
    if (year >= 400 && year <500){
        mensaje = "5th century";
       return mensaje;
    }
    if (year >= 500 && year <600){
        mensaje = "6th century";
       return mensaje;
    }
    if (year >= 600 && year <700){
        mensaje = "7th century";
       return mensaje;
    }
    if (year >= 700 && year <800){
        mensaje = "8th century";
       return mensaje;
    }
    if (year >= 800 && year <900){
        mensaje = "9th century";
       return mensaje;
    }

    if (year >= 900 && year <1000){
        mensaje = "10th century";
       return mensaje;
    }
    
    if (year >= 1000 && year <1100){
        mensaje = "11st century";
       return mensaje;
    }
    if (year >= 1100 && year <1200){
        mensaje = "12nd century";
       return mensaje;
    }
    if (year >= 1200 && year <1300){
        mensaje = "13th century";
       return mensaje;
    }
    if (year >= 1300 && year <1400){
        mensaje = "14th century";
       return mensaje;
    }
    if (year >= 1400 && year <1500){
        mensaje = "15th century";
       return mensaje;
    }
    if (year >= 1500 && year <1600){
        mensaje = "16th century";
       return mensaje;
    }
    if (year >= 1600 && year <1700){
        mensaje = "17th century";
       return mensaje;
    }
    if (year >= 1700 && year <1800){
        mensaje = "18th century";
       return mensaje;
    }
    if (year >= 1800 && year <1900){
        mensaje = "19th century";
       return mensaje;
    }
    if (year >= 1900 && year <2000){
        mensaje = "20th century";
       return mensaje;
    }
    if (year >= 2000 && year <2100){
        mensaje = "21st century";
       return mensaje;
    }
  }

console.log(centuryTest(1990));


const century = year => Math.ceil(year/100);

console.log(century(2998));


// La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
// O sea que si vos entras 4 devuelve 4, pero como aca lo que hace es que al numero que enterome lo divide por 100, entonces entro 1994 / 100 = 19.94 y me lo redondea a 20

function century2(year){
    return Math.ceil(year/100)
}

console.log(century2(4));




// Total amount of points

// Description:

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

//DESTRUCTURACION ----- https://www.youtube.com/watch?v=7OFwvmpxT2U

const games = ["3:1", "2:2", "0:1:", "5:2", "3:0", "0:1", "2:3", "4:7", "0:0", "0:1"];

console.log(games);
function points(games) {
    let total = 0;
    
    games.forEach(game => {
        const [x, y] = game.split(':').map(Number);
        if (x > y){
            total += 3;
        }else if (x === y){
            total+= 1
        }
    })
    return total;
}


console.log(points(games));





let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray);



const games2 = "3:1, 2:2, 0:1:, 5:2, 3:0, 0:1, 2:3, 4:7, 0:0, 0:1";
const arraySplit = games2.split(':');
const str = arraySplit.toString();
const otro = str.split(', ');
const str2 = otro.toString();
const otro2 = str2.split(',')
console.log(otro2);




// Replace With Alphabet Position
// Description:

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


let hola = "The sunset sets at twelve o' clock";


function alphabetPosition(text) {

    let lowerCase = text.toLowerCase();
    let str = lowerCase.replace(/\s+/g, '');
    let arr = [];
    for (let i = 0; i < str.length; i++){
        arr[i] = str.charCodeAt(i) - 96;

    }
    let strNew = arr.toString();
    return strNew;
  }


console.log(alphabetPosition(hola));



/// OBJETOOOOO!

const holis = {
    nombre: "agustina",
    apellido: "canterino",
    contacto: {
        email: "agustina@gmail.com",
        twitter: "@agustina",
        facebook: "/agustina"
    },
    holisBebe() {
        return console.log(`Holis bb ${this.nombre} ${this.apellido}`);
    },

};

console.log(holis.nombre);

holis.holisBebe(); // como ya es un cl en el obkjeto, no es necesario poner cl acá cuando llamamos a la funcion.





const bebe = "Camelia";

console.log(bebe.at(-1)); // o .charAt
console.log(bebe[0]); // entre [] se pone el numero de indice





/**
 * !CLASES Y HERENCIAS
 * * VIDEO → https://youtu.be/C86JvqET61A
 */



class Animal { 

    // el constructor es un método especial que se ejecuta
    // en el momento de instaciar la clase 
    // A LA CLASE NO SE LE PASAN PARÁMETROS, AL CONSTRUCTOR SI

    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){
        console.log(" hago ruidos!!!");
    }

    saludar(){
        console.log(`Hola, bienvenido! me llamo ${this.nombre}`);
    }

}


const Minnie = new Animal("Minnie", "Hembra");


console.log(Minnie);
Minnie.saludar();


// HERENCIA

class Perro extends Animal {
    constructor(nombre, genero, size){
        // con el metodo super() se manda a llamar el constructor de la case padre
        super(nombre, genero);
        // no va en super porque size es un atributo especial SOLO de perro
        this.size = size;
        this.raza = null;
    }

    saludar(){
        console.log(`Hola, como te va? me llamo ${this.nombre}, es lindo verte`);
    }

    ladrar(){
        console.log("guauuuuu guuuuaauu!!!!!");
    }

    static queEres() {
        console.log("soy un tierno cachorro");
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }

};

const camelia = new Perro ("Camelia", "Hembra", "Mediana");

console.log(camelia);
camelia.saludar();
camelia.ladrar();




/**
 * ! Métodos estáticos, getters y setters
 * * Video → https://youtu.be/TEzu31q9MVA
 */

// todas las clases son publicas en js
// métodos static. es el que se puede ejecutar sin necesidad de instanciar la clase

Perro.queEres(); // se ejecuta sin tener que asignarle ese metodo a una constante, como Minnie o Camelia

// los setters y getters son metodos especiales que nos permiten establecer
// y obtener los valores de atributos de nuestra clase

// LOS SET Y GET SE TRABAJAN COMO METODOS/FUNCIONES PERO JS LOS TOMA COMO PROPIEDADES

// camelia.setRaza("Bulldog Frances"); ESTO ESTA MAL, PORQUE ES UN SET Y LOS SET Y GET NO 
// SE PASAN COMO METODOS SINO COMO PROPIEDADES, ASÍ: 

camelia.setRaza = "Bulldog Francés";

console.log(`La raza es: ${camelia.getRaza}`);

/**
 * ! SET TOMA UN PARÁMETRO, UN DATO, QUE YO LE PIDO AL USUARIO POR EJEMPLO
 * ! EN ESTE CASO LA RAZA, LO TOMO Y PONGO SETALGO = LO QUE QUIERO PONER DE DATO
 * ? GET EN CAMBIO, TOMA EL DATO DE SET Y LO MUESTRA, LO TOMA Y ALMACENA
 */




/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);


/**
 * ! OBJETO CONSOLE
 * * Video → https://youtu.be/qM9Rsv3LCWc
 */

/**
 * ! EXPRECIONES REGULARES
 * * video → https://www.youtube.com/watch?v=aPkBloR9MEI 
 */

/**
 * ! FUNCIONES ANONIMAS AUTOEJECUTABLES
 * * video → https://www.youtube.com/watch?v=gbHr5qJjLRg 
 */

