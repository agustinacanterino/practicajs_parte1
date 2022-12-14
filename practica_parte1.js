/* COMENTAR Y DESCOMENTAR
UNA O VARIAS LINEAS DE CODIGO
ALT + SHIFT + A */

// FOR OF, RECORRER TODO UN ARRAY O UN STRING
let frutas = ['banana', 'manzana', 'kiwi', 'pera'];

for (let fruta of frutas){
    console.log(fruta);
}

// FOR OF, RECORRE TODO EL STRING, LETRA POR LETRA
let miNombre = 'agustina';

for (let nombre of miNombre){
    console.log(nombre);
}

/* COMENTAR Y DESCOMENTAR
UNA O VARIAS LINEAS DE CODIGO
ALT + SHIFT + A */

const frutas = [];

frutas.push('sandia', 'banana', 'manzana');

console.log(frutas);

let newFruit = prompt('add a new fruit');

frutas.push(newFruit);

console.log(frutas); 

/////////////////////////

/* USUARIO INGRESA ELEMENTOS CON PUSH A UN ARRAY  */

const fruits = [];

let numberFruits = parseInt(prompt('enter the number of fruits you wanna add'));

for (let i = 1; i <= numberFruits; i++){
    let addFruit = prompt('enter the new fruit, please');
    fruits.push(addFruit);
    
}

console.log(fruits); 


///////////////////////////////
/* USUARIO INGRESA ELEMENTOS CON PUSH A UN ARRAY  */
const makeUp = [];

let numberOfMakeUp = parseInt(prompt('enter the number of cosmetics you want to add'));

for (let i = 0;numberOfMakeUp > i; i++){
    let newMakeUp = prompt('enter the name of the new cosmetic');
    makeUp.push(newMakeUp);
}
console.log(makeUp); 

///////////////////////////////

/* USUARIO INGRESA ELEMENTOS CON UNSHIFT A UN ARRAY  */
const makeUp1 = [];

let numberOfMakeUp1 = parseInt(prompt('enter the number of cosmetics you want to add'));

for (let i = 0;numberOfMakeUp1 > i; i++){
    let newMakeUp1 = prompt('enter the name of the new cosmetic');
    makeUp1.unshift(newMakeUp1);
}
console.log(newMakeUp1);


///////////////////////////////
/* ELIMINAR Y MOSTRAR QUE SE ELIMINO CON METODO POP*/

const frutas = ["manzana", "pera"];

frutas.unshift("uva");

const frutaEliminada = frutas.pop();

console.log(frutas);
console.log(frutaEliminada);


///////////////////////////////
/* ELIMINAR Y MOSTRAR QUE SE ELIMINO CON METODO POP*/
// POP → primero, lo que hace es eliminar el ultimo item del array
// pero también, si guardamos el array.pop(); en una variable
// como es el caso de booksDelate, en esa variable guardamos
// ese item que eliminamos


const books = ['harry potter', 'the little prince', 'rebecca', 'percy jackson'];

// array completo para ver
console.log(books);

// eliminamos el {ultimo} del array
const booksDelate = books.pop();

// aca queda guardado que elemento se borro
console.log(booksDelate);

//asi es como queda al final luego de borrarlo
console.log(books);


///////////////////////////////////////////
// funcion declarativa
// esta funcion, puede ser llamada en cualquier momento, incluso antes de declarar la funcion

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNum(1,11));

// funcion expresada en una variable
// esta funcion se lee en orden, es decir, no puede ser llamada antes de ser declarada

const randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber(1,101));


// funcion expresada → PUEDE SER UNA funcion flecha
// FUNCION FLECHA
// const nombre_de_la_variable = () paréntesis donde van mis parametros
// luego, va el igual y el mayor que hace una flechita => y despues las llaves
// dentro, va el conteniod de mi funcion!
const randomFlecha = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomFlecha(1,1001));


// LA FUNCION FLECHA SE PUEDE, ADEMAS, ACORTAR MÁS
// no se usan llaves, y el return no va, porque ya se sabe que despues de la flecha => va lo que devuelve
const randomFlechaCorto = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(randomFlechaCorto(1,51));

// se puede también, mandarle los parámetros dentro de la propia funcion, fijandolos ahi y no cuando lo pongo en consola

const randomFlechaOtro = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

console.log(randomFlechaOtro());

// si paso un parametro, me lo toma para el primero no el segundo
// los parametros pueden ir sin paréntesis, SI Y SOLO SI hay UN SOLO PARAMETRO, ej, solo hay min 

const randomFlechaNueva = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

console.log(randomFlechaNueva(null, 200));

// si queres pasar solo el segundo parametro, en el primero se pone null o undefined!!

//////////////////////////
//////////////////////////
/////// FOR EACH /////////
//////////////////////////
//////////////////////////

const btsHyungLine = ['kim namjoon', 'kim seokjin', 'min yoongi', 'jung hoseok'];

btsHyungLine.forEach( (hyungLine) => console.log(hyungLine) );
/* si copio el mismo nombre que el array también funciona
btsHyungLine.forEach( (btsHyungLine) => console.log(btsHyungLine) ); */

btsHyungLine.forEach( (btsHyungLine, index, array) => console.log(`${index} : ${btsHyungLine}`, console.log(array)));


const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

// ENTRE PARENTESIS VA LA PROPIEDAD QUE ESTOY BUSCANDO
// EL NOMBRE LITERAL, SI ME EQUIVOCO NO APARECE
// entre comillas simples o dobles

console.log(gato.hasOwnProperty("nombre"))
console.log(gato.hasOwnProperty('edad'));
console.log(gato.hasOwnProperty("salud"))

const otroGato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}

console.log(otroGato.otros.amigos[0])
console.log(otroGato.otros.favoritos.comida.fria)

/// CON ESTO RECORRE LOS VALORES DEL OBJETO
console.log(Object.values(gato));

// CON ESTO RECORRE LOS NOMBRES, LLAVES, 
console.log(Object.keys(gato));


const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafoExa = document.querySelector('#parrafoExa');
const cardColor = document.querySelector('#cardColor');

btnVisualizar.addEventListener("click", () => {
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.background = inputColor.value;
})



// DAYS OF THE WEEK, FUNCTION
let days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

let peekDay = parseInt(prompt('choose a day of the week'));

function daysWeek(peekDay){
    if (peekDay <1 || peekDay >7) {
        throw new Error('Out of range');
    }
    return days[peekDay-1];
}

console.log(daysWeek(peekDay));

///////////////////////////////////////////////////////////////////////////////

// ADDITION 

function addition (n1, n2){
    return parseInt(n1) + parseInt(n2);

}

number1 = prompt('enter a number');
number2 = prompt('enter another number');

console.log(addition(number1, number2));

// BUSCAR OPERADOR TERNARIO EN JAVASCRIPT

///////////////////////////////////////////////////////////////

let userName = 'Jungkook';

console.log(`Bienvenido bebe ${userName.toUpperCase()}`);








let alumnos = parseInt(prompt('ingrese la cantidad de alumnos'));
let contador = 0;
let nota = 0;
let bandera = true;
let maxNota = 0;
let maxNombre = "";

while (contador != alumnos && nota != 10){
    contador++;
   let nombre = prompt('Ingrese el nombre del alumno');
    nota = parseFloat(prompt("Ingrese la nota del alumno"));
    if (bandera === true){
        maxNota = nota;
        maxNombre = nombre;
        bandera = false;
    }else{
        if (nota >= maxNota){
            maxNota = nota;
            maxNombre = nombre;
        }
    }
    

    
} 

console.log(`La mayor nota fue ${maxNota} y la obtuvo ${maxNombre}`);



// MIRAR EL VIDEO DE OBJETOS EXPLICACION
// https://www.youtube.com/watch?v=4xig5UPRC00&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=14 

const kinnporsche = { 
    therapanyakul: ['kinn', 'kim', 'kin', 'vegas', 'macao'],
    hermanos: ['chay', 'porsche'],

}

console.log(kinnporsche.therapanyakul);
console.log(kinnporsche.hermanos);

const jungkook = {
    nombre: "jungkook",
    apellido: "jeon",
    edad: 25,
    nacimiento: "1 de septiembre de 1997",
    signo: "virgo",
    pais: "corea del sur",
    ciudad: "busan",
    cantar: function(){
        console.log(this.nombre, 'está cantando en el mundial Qatar 2022');
    }

    
}

console.log(`El maknae de BTS se llama ${jungkook.apellido} ${jungkook.nombre}, tiene ${jungkook.edad} años, nació el ${jungkook.nacimiento},
su signo es ${jungkook.signo}, nació en la ciudad de ${jungkook.ciudad} en ${jungkook.pais}`);

jungkook.cantar();

// factory function
// VIDEO super bien explicado → https://www.youtube.com/watch?v=5CsVRHNy2iA 

function bts (nombre, edad){
    return {
        nombre,
        edad,
        pais(){
            console.log(this.nombre, 'es de corea del sur');
        },

    }
}

let yoongi = bts ('yoongi', 30);
console.log(yoongi);

let namjoon = bts ( 'namjoon', 28);
console.log(namjoon);

// recorrer un objeto
// se puede recorrer con nombreDeObjeto.propiedad 
// o se puede usar, para saber las llaves: Object.keys(miObjeto) → es un array
// para saber los valores: Object.values(miObjeto) → es un array
// se puede recorrer con un forEach
// video de esto → https://www.youtube.com/watch?v=lOzLMKLSn3A 

Object.keys(jungkook).forEach((valor) => {
    console.log(valor);
})

Object.values(jungkook).forEach((valor) => {
    console.log(valor);
})












/**
 * ! EJERCICIOS EN CODEWAR
 * ? https://www.youtube.com/watch?v=sqRk0Ly66Ps 
 * ? https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions 
 */


//  https://github.com/DiscoDurodeRoer/ejercicios-javascript-youtube/blob/master/arrays/arrays%2002/ejercicio%204/main.js

//  https://www.youtube.com/watch?v=UbQVrpUlmH8 
 
//  Manejo de errores
//  video → https://www.youtube.com/watch?v=SPVL8uAezaw&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=17 
 
 
 
 try {
     console.log('en la parte de try se pone el codigo que quiero que se evalue');   
     // console.log(seokjin);  aca aparece catch porque seokjin no esta determinado
 } catch (error) {
     console.log('catch captura cualquier error que surge del try. Si no hay error en el TRY entonces catch nunca se ejecuta en consola');
 }finally {
     console.log('el bloque finally se ejecuta al final de un bloque de codigo try-catch. Haya error o no, finally se ejecuta siempre y al final ');
 }
 
 let numero = 0;
 let cuenta = 0;
 try {
     numero = prompt('ingrese un numero');
     if (isNaN(numero)){ 
         throw new Error('el caracter que ingresó NO ES UN NÚMERO');
         
     }else{
         cuenta = numero * 10;
         console.log(`Su número muktipdlciado por 10 es: ${cuenta}`);
     }
 
 
 } catch (error) {
     console.log(`se encontró el siguiente error: ${error}`);
     
 }
 
 while (isNaN(numero)){
     numero = prompt('ingrese un numero');
 }
 
 if (!isNaN(numero)){
     cuenta = numero * 10;
     console.log(`Su número muktipdlciado por 10 es: ${cuenta}`);
 }
 
 
//  Ejemplo 2
 
 
 
 const arrayBebe2 = [];
 const arrayAux2 = [];
 let ingresaUnNumero2 = 0;
 try {
     for (let i = 0; i <3; i++){
         ingresaUnNumero2 = prompt('ingresa un numero');
         if (isNaN(ingresaUnNumero2)){
             throw new Error('lo que ingresó no es un numero');
         }else{
             arrayBebe2.push(ingresaUnNumero2);
         }
         
     }
     
     
     for (let i = 0; i <3; i++){
         let aux2 = arrayBebe2[i];
         let contador2 = 0;
         for(let x = 0; x <3; x++){
             if (aux2 < arrayBebe2[x]){
                 contador2++;
             }
     
         }
     
         arrayAux2[contador2] = aux2;
     }
     
     for (let i = 0; i <3; i++){
         console.log(arrayAux2[i]);
     }
     
     
 } catch (error) {
     console.log(Error, 'no es un numero, ingrese un numero');
 
     for (let i = 0; i <3; i++){
         ingresaUnNumero2 = prompt('ingresa un numero');
         if (isNaN(ingresaUnNumero2)){
             throw new Error('lo que ingresó no es un numero');
         }else{
             arrayBebe2.push(ingresaUnNumero2);
         }
         
     }
     
     
     for (let i = 0; i <3; i++){
         let aux2 = arrayBebe2[i];
         let contador2 = 0;
         for(let x = 0; x <3; x++){
             if (aux2 < arrayBebe2[x]){
                 contador2++;
             }
     
         }
     
         arrayAux2[contador2] = aux2;
     }
     
     for (let i = 0; i <3; i++){
         console.log(arrayAux2[i]);
     }
     
     
 }
 
 
//  Ejemplo 3
 
 
 
 /**
  * Hola
  *  * Hola
  * TODO: Hola
  * ! Hola
  * ? hola
  * @hola 
  */
 
 /**
  * ! BREAK Y CONTINUE
  */
 
 /**
  * ? CONTINUE
  * @almacenar solo los numeros impares
  */
 
 
 const numeros = [];
 let entrada = 0;
 let contador = 0;
 
 for (let i=0; i < 5; i++){
     entrada = parseInt(prompt('ingrese un numero'));
     if (entrada % 2 === 0){
         continue;
     }else{
         if (entrada % 2 !== 0){
             numeros[contador]=entrada;
             contador++;
         }
     }
     
 }
 for (let x=0; x < numeros.length; x++){
     console.log(`los numeros impares que ingresó son: ${numeros[x]}`);
 }
 
 
 
 /**
  * ? BREAK
  * @romper el programa, en caso que se ingrese un numero impar
  */
 
 const numerosPares = [];
 let num = 0;
 let cont = 0;
 
 for (let i = 0; i <5; i++){
     num = parseInt(prompt('ingrese un numerito ♥'));
     if (num % 2 !== 0){
         break;
     }
     numerosPares[cont] = num;
     cont++;
 }
 
 console.log('los numeros pares que acumuló son: ');
 
 for (let i = 0; i <numerosPares.length; i++){
     
     console.log(`→ ${numerosPares[i]}`);
 }
 
 
 
 /**
  * ? BREAK
  * @romper el programa, en caso que se ingrese el numero 10
  */
 
 
 let numero = 0;
 
 for (let i = 0; i <= 5; i++){
     numero = parseInt(prompt('ingrese un numero'));
 
     if (numero === 10){
         console.log('perdiste, ingresaste el numero 10');
         break;
     }else{
         if (i === 5){
             console.log('ganaste, nunca ingresaste el numero 10!');
         }
     }
 }
 
 
 
 
 
 /**
  * ! DAR VUELTA UNA PALABRA/ INTENTO 1
  */
 
 let palabra = prompt('ingrese palabra');
 
 
 let palabra = 'hello';
 
 function splitStr (x){
     let array = x.split('');
     let rev = array.reverse();
     return rev.join("");
      
 }
 
 console.log(splitStr(palabra));
 
 
 
 
 
 
 
 /**
  * ! DAR VUELTA UNA PALABRA/ INTENTO 2
  */
 
 
 function solution(str){
     const array = str.split("");
     const reverse = array.reverse();
     const final = reverse.join("");
     
     return final;
     
   }
 
 let word = prompt('ingrese una palabra');
 console.log(solution(word));
 
 
 
 
 
 
 
 
 
 
 /**
  * ! OPCION 1 
  * ? Jenny has written a function that returns a greeting for a user. 
  * ? However, she's in love with Johnny, and would like to greet him slightly different. 
  * ? She added a special case to her function, but she made a mistake.
  */
 
  function greet(name){
     if(name === "Johnny"){ 
       return "Hello, my love!";
     }else{
         return "Hello, " + name + "!";
     }
   }
 
 let name = prompt('ingrese su nombre');
 console.log(greet(name));
 
 
 
 
 
 /**
  * ! OPCION 2 
  * ? Jenny has written a function that returns a greeting for a user. 
  * ? However, she's in love with Johnny, and would like to greet him slightly different. 
  * ? She added a special case to her function, but she made a mistake.
  */
 
 
 
 function greet2(name){
     return name === "Johnny" ? "Hello, my love!" : "Hello " + name + "!";
 }
 
 let name2 = prompt('ingrese su nombre');
 console.log(greet2(name2));
 
 
 
 
 
 
 
 
 
 /**
  * ! OPCION 1 
  * ? Create a function that checks if a number n is divisible by two numbers x AND y. 
  * ? All inputs are positive, non-zero numbers.
  * ? Examples:
  * ? 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3 
  * ? 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6 
  * ? 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3 
  * ? 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  */
 
 
 
  let n = parseInt(prompt('enter a number to devide'));
  let x = parseInt(prompt('enter a number'));
  let y = parseInt(prompt('enter another number'));
 
  
 function isDivisible(n, x, y) {
     
     if (n % x === 0 && n % y === 0){
         return console.log(`The number ${n} is divisible by ${x} and ${y}`);
     }else{
         if (n % x !== 0) {
             return console.log(`The number ${n} is not divisible by ${x}`);
         }else{
             if (n % y !== 0){
                 return console.log(`The number ${n} is not divisible by ${y}`); 
             }else{
                 if (n % x !== 0 && n % y !== 0){
                     return console.log(`The number ${n} is not divisible by ${x} and ${y}`); 
                 }
             }
         }
 }
 }
 
 isDivisible(n, x, y);
 
 
 
 /**
  * ! OPCION 2 
  * ? Create a function that checks if a number n is divisible by two numbers x AND y. 
  * ? All inputs are positive, non-zero numbers.
  * ? Examples:
  * ? 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3 
  * ? 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6 
  * ? 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3 
  * ? 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  */
 
 
  let n = parseInt(prompt('enter a number to devide'));
  let x = parseInt(prompt('enter a number'));
  let y = parseInt(prompt('enter another number'));
 
  function isDivisible(n, x, y) {
     if (n <=0){
         return console.log('please input a positive number');
     }else{
         if (n % x === 0 && n % y === 0){
             return true;
         }else{
             if (n % x === 0 && n % y !== 0){
                 return false; 
             }else{
                 if (n % x !== 0 && n % y === 0){
                     return false;
                 }else {
                     if (n % x !== 0 && n % y !== 0){
                         return false;
                     }
                 }
             }
         }
     }
  }
 
  isDivisible(n, x, y);
  console.log(isDivisible(n, x, y));
 
 
 /**
  * TODO: Excercise | | Return Negative
  * ! OPCION 1
  * ? In this simple assignment you are given a number and have to make it negative. 
  * ? But maybe the number is already negative? 
  * ? Examples 
  * ? makeNegative(1);    // return -1
  * ? makeNegative(-5);   // return -5
  * ? makeNegative(0);    // return 0
  * ? makeNegative(0.12); // return -0.12
  * ? NOTES: The number can be negative already, in which case no change is required.
  * ? Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
  */
 
 let number4 = parseFloat(prompt('input a number'));
 
 function makeNegative(num) {
     let negative = 0;
     if (num === 0){
         return negative = num;
     }else{
         if (num < 0){
             return negative = num;
         }else{
             if (num >= 1){
                 return negative = num * (-1);
             }
         }
         
     }
 }
 
 console.log(makeNegative(number4));
 
 
 
 
 /**
  * TODO: Excercise | | Return Negative
  * ! OPCION 2
  * ? In this simple assignment you are given a number and have to make it negative. 
  * ? But maybe the number is already negative? 
  * ? Examples 
  * ? makeNegative(1);    // return -1
  * ? makeNegative(-5);   // return -5
  * ? makeNegative(0);    // return 0
  * ? makeNegative(0.12); // return -0.12
  * ? NOTES: The number can be negative already, in which case no change is required.
  * ? Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
  */
 
 
 let num5 = parseFloat(prompt('input a number'));
 
 function makeNegative(num) {
     if (num <= 0){
       return num;
     }else{
       return num * (-1);
     }
 }
 
 console.log(makeNegative(num5));
 
 
 
 
 
 
 
 /**
  * TODO: Excercise | | Find the smallest integer in the array
  * ! OPCION 1
  * ? Given an array of integers your solution should find the smallest integer.
  * ? For example:
  * ? Given [34, 15, 88, 2] your solution will return 2
  * ? Given [34, -345, -1, 100] your solution will return -345
  * ? You can assume, for the purpose of this kata, that the supplied array will not be empty.
  */
 
 
 
 
 
 
 
 
 
 
 
 
 /**
  * TODO: Excercise | | Grasshopper - Summation
  * ! OPCION 1
  * ? Write a program that finds the summation of every number from 1 to num. 
  * ? The number will always be a positive integer greater than 0.
  * For example:
      summation(2) -> 3
         1 + 2
      summation(8) -> 36
 }       1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
  */
 
 let num4 = parseInt(prompt('input a number'));
 var summation = function (num){
     let aux = 0;
     for (let i = 1; i <= num; i++){
         aux = aux + i;
     }
     return aux;
 
 }
 
 console.log(summation(num4));
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**\
  * ? DESTRUCTURACIÓN!
  * todo: VIDEO : https://youtu.be/YTtZ9TUQ48E 
  */
 
 
 /**
  * ! ARRAY
  * * primero se tiene que hacer un array normal, con los valores que yo quiera
  * * luego, se pone que es una constante, entre corchetes se pone el nombre de la variable 
  * * y se pone, variable 0, se pone el elemento que está en el 0, variable 1, valor 1 array
  * * variable 2, se pone el valor 2 array */
 
 const maknaeLine = ['jungkook', 'jimin', 'taehyung'];
 
 const [jungkook, jimin, taehyung] = maknaeLine;
 
 console.log(jungkook, taehyung, jimin);
 
 /**
  * !OBJETO
  * * En el objeto, hay que poner el nombre de la key como nombre de la variable
  * * No se puede poner otro nombre, y cuando se determina hay que ponerlo
  * * En el real orden let {nombre, apellido, edad} = perrita; va en orden
  * * porque si poner {edad, nombre, apellido} = perrita; se va a poner
  * * el valor de nombre en edad, el valor de apellido en nombre, y el valor de 
  * * edad en apellido.
  */
 
 const perrita = {
     nombre: "Camelia",
     apellido: "Von Funkle",
     edad: 7,
 }
 
 let {nombre, apellido, edad} = perrita;
 console.log(edad, apellido, nombre);
 
 /**
  * TODO: OBJETOS LITERALES
  * ? video → https://www.youtube.com/watch?v=XhJaPRfJaz0 
  */
 
 let nombre = "camelia";
 let edad = 7;
 
 const perro = { 
     nombre,
     edad, 
     ladrar (){ // antes poniamos así → ladrar: function (){ }
 
         console.log("guauuuu guauuu!");
     }
 }
 
 console.log(`El nombre del perro es ${perro.nombre}, tiene ${perro.edad} años & le gusta ladrar así ↓`);
 perro.ladrar();
 
 
 /**
  * TODO: EXCERCISE | Rock Paper Scissors!
  * ? Let's play! You have to return which player won! In case of a draw return Draw!
  * 
  * Examples(Input1, Input2 --> Output):
     "scissors", "paper" --> "Player 1 won!"
     "scissors", "rock" --> "Player 2 won!"
     "paper", "paper" --> "Draw!"
 
  */
     let p1 = prompt('input → paper, scissors, or rock');
     let p2 = prompt('input → paper, scissors, or rock');
     
 const rps = (p1, p2) => {
     
     
     if (p1 === "scissors" && p2 === "paper"){
         return "Player 1 won!";
     }else{
         if (p2 === "scissors" && p1 === "paper"){
             return "Player 2 won!";
         }
     }
 
     if (p1 === "paper" && p2 === "rock"){
         return "Player 1 won!";
     }else{
         if (p2 === "paper" && p1 === "rock"){
             return "Player 2 won!";
         }
     }
 
     if (p1 === "rock" && p2 === "scissors"){
         return "Player 1 won!";
     }else{
         if (p2 === "rock" && p1 === "scissors") {
             return "Player 2 won!";
         }
     }
 
     if (p1 === "rock" && p2 === "rock"){
         return "Draw!";
     }else{
         if (p1 === "scissors" && p2 === "scissors"){
             return "Draw!";
         }else{
             if (p1 === "paper" && p2 === "paper"){
                 return "Draw!";
             }
         }
     }
     
 };
 
 
 console.log(`the result is: ${rps(p1, p2)}`);
 
 
 
 
 
 
 
 /**
  * TODO: Excercise | Remove First and Last Character
  * * It's pretty straightforward. Your goal is to create a function that removes the 
  * * first and last characters of a string. You're given one parameter, the original string. 
  * * You don't have to worry with strings with less than two characters.
  */
 
 str = prompt('input any word you want! ☺');
 
 function removeChar(str){
     str = str.slice(0, -1);
     let other = str.slice(1);
     return other;
 };
 
 console.log(removeChar(str));
    
 
 name = prompt("type your name, please");
 
 function hello(name) {
     console.log(`Hello ${name}, have a nice day ♥`)
 }
 
 hello(name);
    
 
 
 
 
 
 
 
 /**
  * TODO | excercise | Basic Mathematical Operations
  * Your task is to create a function that does four basic mathematical operations.
  * The function should take three arguments - operation(string/char), value1(number), value2(number).
  * The function should return result of numbers after applying the chosen operation.
             Examples(Operator, value1, value2) --> output
 
             ('+', 4, 7) --> 11
             ('-', 15, 18) --> -3
             ('*', 5, 5) --> 25
             ('/', 49, 7) --> 7
  
  */
 
 let value1 = parseInt(prompt('input the first number'));
 let value2 = parseInt(prompt('input the second number'));
 let operation = prompt('choose the operation you wanna do');
 
 function basicOp(operation, value1, value2) {
     let result = 0;
     switch(operation){
         case '+':
             return result = value1 + value2;
         case '-':
             return result = value1 - value2;
 
         case '*':
             return result = value1 * value2;
 
         case '/':
             return result = value1 / value2;
     }
    
 }
 
 console.log('The result is: ', basicOp(operation, value1, value2));
     
 
 
 
 
 
 
 
 
 
 /**
  * TODO | Excercise |String repeat
  * ! OPCION 1 | MIO
  * Write a function that accepts an integer n and a string s as parameters, 
  * and returns a string of s repeated exactly n times.
  * 
         Examples (input -> output)
 
         6, "I"     -> "IIIIII"
         5, "Hello" -> "HelloHelloHelloHelloHello"
 
  */
 
 
 let n = parseInt(prompt('input number'));
 let s = prompt('input a letter or a word'); 
 
 
 function repeatStr (n, s) {
     let aux = [];
     for (let l = 1; l <=n; l++){
         aux[l]=s;
     }
     return aux.join("");
     
 
 }
 
 
 
 
 console.log(repeatStr(n,s));
 
 
 
 
 
 
 
 /**
  * TODO | Excercise |String repeat
  * ! OPCION 2 | DE CODEWAR
  * Write a function that accepts an integer n and a string s as parameters, 
  * and returns a string of s repeated exactly n times.
  * 
         Examples (input -> output)
 
         6, "I"     -> "IIIIII"
         5, "Hello" -> "HelloHelloHelloHelloHello"
 
  */
 
         
 
 
 
 
 
 
 let n = parseInt(prompt('input number'));
 let s = prompt('input a letter or a word');
 
 
 function repeatStr (n, s) {
     return s.repeat(n);
   }
 
 console.log(repeatStr(n,s));
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**
  * TODO | Excercise | Convert a string to an array
  * Write a function to split a string and convert it into an array of words.
         Examples (Input ==> Output):
 
         "Robin Singh" ==> ["Robin", "Singh"]
 
         "I love arrays they are my favorite" ==>
          ["I", "love", "arrays", "they", "are", "my", "favorite"]
 
 
  */
 
          let string = prompt('input a word or sentence');
 
          let stringToArray = function (string){
          
              const result = string.trim().split(/\s+/);
              return result;
                  
          }
          
          console.log(stringToArray(string));
          
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**
  * TODO | Excercise | Convert a string to an array
  * ! OPCION 2 | CODEWAR
  * Write a function to split a string and convert it into an array of words.
         Examples (Input ==> Output):
 
         "Robin Singh" ==> ["Robin", "Singh"]
 
         "I love arrays they are my favorite" ==>
          ["I", "love", "arrays", "they", "are", "my", "favorite"]
 
 
  */
 
 
 
 let string = prompt('input a word or sentence');
 function stringToArray(string){
     return string.split(' ');
   }
 
   console.log(stringToArray(string));
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**
  * TODO EXCERCISE | Beginner - Reduce but Grow
  * Given a non-empty array of integers, return the result of multiplying the values 
  * together in order. Example:
 
     [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 
 
  */
 
 
 
 
 
    /**
  * TODO | | FOR EACH
  * ! VIDEO → https://www.youtube.com/watch?v=5UPnfDenb6s
  * ! OTRO https://www.youtube.com/watch?v=H1Si1bAt9Bk 
  * */ 
 
 
 /**
  * ? ejemplo 1 
  */
 const numeros = (a, b) => {
    let resultado = a+b;
    return resultado;
 }
 
 let num1 = parseInt(prompt('input a number'));
 let num2 = parseInt(prompt('input a number'));
 
 
 console.log(numeros(num1,num2));
    
 
 
 /**
  * ? ejemplo 2 // forEach Strings
  */
 
 const btsMembers = ['namjoon', 'seokjin', 'yoongi', 'hoseok', 'jimin', 'taehyung', 'jungkook'];
 
 btsMembers.forEach((item, index) => {
    console.log(`miembro número: ${index+1}, nombre: ${item}`);
 });
 
 
 
 /**
  * ? ejemplo 3 // forEach evado al cuadrado
  */
 
 
 
 const numeros = [2, 4, 6, 8, 10];
 
 numeros.forEach((item) => {
    let res = item * item;
    console.log(`El número: ${item} elevado al cuadrado es: ${res}`);
 });
 
 
 
 
 /**
  * ? ejemplo 4 // sumar todos los elementos de un array
  */
 
 
 const numeros = [10, 2, 8, 55, 4, 3, 67, 88, 1, 66, 9, 45, 78, 32, 68, 42, 49, 92]
 let suma = 0;
 
 numeros.forEach((item) => {
    suma += item;
    
 });
 
 console.log(`La suma total del array ${numeros} es de: ${suma}`);
 
 
 /**
  * ! FECHAS EN JAVASCRIPT
  * ? video → https://www.youtube.com/watch?v=JWCDkQnRwd8
  * ? video hacer cronometro y fecha → https://www.youtube.com/watch?v=IowfM4bkyb8 
  */
 
 function dateN(){
    var fecha = new Date();
    document.write(fecha);
    console.log(fecha.getHours() - 12 ); // con esto, se saca que son de a 12 hs, o sea, no son las 19 horas sino las 7 pm 
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
 
    console.log(fecha.getDay()); // dia, 0 domingo, 1 lunes, 2 martes, etc
    console.log(fecha.getDate());
    console.log(fecha.getMonth()); // mes, arrancha de 0 en enero 11 dic
    console.log(fecha.getFullYear());
 }
 
 dateN();
 
 
 /**
  * ! CRONOMETRO
  * ? video hacer cronometro y fecha → https://www.youtube.com/watch?v=IowfM4bkyb8 
  */
 
 
 /**
  * TODO | | Parámetros REST & Operador Spread 
  * ? VIDEO → https://www.youtube.com/watch?v=yGJdRAXHCPM 
  * */  
 
 
 
 






  EJERCICIO ARRAYS 1 !!! Rellena un array con los numeros del 1 al 10. Muestralo por la consola.
  https://www.youtube.com/watch?v=xRect0of_H4
  
  const array = [];
  
  for (let i = 1; i<=10; i++){
      // array[i] = i; → esto sirve, pero deja un espacio mas y el array tiene 11 y no 10
      array.push(i); // → este si tiene 10 y lo rellena
  
  }
  console.log(array);
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO ARRAYS 2 !!! Rellena un array con numeros aleatorios (10 por ejemplo). Muestralo por la consola.
//   https://www.youtube.com/watch?v=xRect0of_H4
  
  const numerosRandom = [];
  
  for (let i = 1; i <=10; i++){
      let aleatorios = Math.ceil(Math.random()*100);
      numerosRandom.push(aleatorios);
  }
  
  console.log(numerosRandom);
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO ARRAYS 3 !!! Del array anterior, creale una copia (que no sea el mismo en sí). Muestralos por la consola.
//   https://www.youtube.com/watch?v=xRect0of_H4
  
  const numerosRandom = [];
  
  for (let i = 1; i <=10; i++){
      let aleatorios = Math.ceil(Math.random()*100);
      numerosRandom.push(aleatorios);
  }
  
  console.log('ARRAY 1');
  console.log(numerosRandom);
  
  const numerosRandom2 = numerosRandom.slice();
  
  numerosRandom2.push(20);
  
  console.log('ARRAY 2');
  console.log(numerosRandom2);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   30 EJERCICIOS EN JAVASCRIPT
//   VIDEO https://www.youtube.com/watch?v=PescFjv1UXM
  
//   EJERCICIO 1 | | | Programa que pida dos numeros, y que nos diga cual es el mayor, el menor y si son iguales
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  let numero1 = prompt('ingrese un numero');
  let numero2 = prompt('ingrese otro numero');
  
  if (numero1 === numero2){
      console.log(`ambos son el número ${numero1}`);
  }else{
      if (numero1 > numero2){
          console.log(`el primer número: ${numero1} es mayor al segundo número: ${numero2}`);
      }else{
          if (numero2 > numero1){
              console.log(`el segundo numero: ${numero2} es mayor al primer número: ${numero1}`);
          }
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 2 | | | Programa que pida dos numeros, y que nos diga cual es el mayor, el menor y si son iguales.
//   Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelve a pedir
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  let num1 = prompt('ingrese un numero');
  let num2 = prompt('ingrese otro numero');
  
  
  while (isNaN(num1) || isNaN(num2)){
      console.log('no es un numero, ingrese un numero');
      num1 = prompt('ingrese un numero');
      num2 = prompt('ingrese otro numero');
  }
  
  while(num1 == 0 || num2 == 0){
      console.log('es un cero, ingrese un numero mayor');
      num1 = prompt('ingrese un numero');
      num2 = prompt('ingrese otro numero');
  }
  
  
  
  if(num1 === num2){
      console.log(`ambos son el número ${num1}`);
      }else{
          if(num1 > num2){
              console.log(`el primer número: ${num1} es mayor al segundo número: ${num2}`);
              }else{
                  if(num2 > num1){
                      console.log(`el segundo numero: ${num2} es mayor al primer número: ${num1}`);
                  }  } }
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 3 | | | utilizando un bucle, mostrar la suma y la media de los numeros introducidos
//   hasta introducir un numero negativo y ahi mostrar el resultado
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  let number  = parseInt(prompt('ingrese un numero'));
  let media = 0;
  let contador = 0;
  let suma = 0;
  
  while (number > 0){
      suma = suma + number;
      contador = contador + 1;
      number  = parseInt(prompt('ingrese un numero'));
  
  }
  
  media = suma / contador;
  
  console.log(`la suma total es de: ${suma}, la media es de: ${media}, ya que se dieron un total de ${contador} vueltas`);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 4 | | |  hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  let numeroA = parseInt(prompt('ingrese el primer numero'));
  let numeroB = parseInt(prompt('ingrese el segundo numero'));
  let vecesQueHayQueIterar = 0;
  let iterarNumeroInicial = 0;
  
  
  
  if (numeroA > numeroB){
      vecesQueHayQueIterar = (numeroA - numeroB) - 1;
      iterarNumeroInicial = numeroB + 1;
  
  }else{
      if(numeroB > numeroA){
          vecesQueHayQueIterar = (numeroB - numeroA) - 1;
          iterarNumeroInicial = numeroA + 1;
      }
  }
  
  let contador = vecesQueHayQueIterar;
  
  
  while (contador > 0){
      console.log(`los números son: ${iterarNumeroInicial}`);
      iterarNumeroInicial = iterarNumeroInicial + 1;
      contador = contador - 1;
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 5 | | |  mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  let numeroA2 = parseInt(prompt('ingrese el primer numero'));
  let numeroB2 = parseInt(prompt('ingrese el segundo numero'));
  let vecesQueHayQueIterar2 = 0;
  let iterarNumeroInicial2 = 0;
  
  
  
  if (numeroA2 > numeroB2){
      vecesQueHayQueIterar2 = (numeroA2 - numeroB2) - 1;
      iterarNumeroInicial2 = numeroB2 + 1;
  
  }else{
      if(numeroB2 > numeroA2){
          vecesQueHayQueIterar2 = (numeroB2 - numeroA2) - 1;
          iterarNumeroInicial2 = numeroA2;
      }
  }
  
  let contador2 = vecesQueHayQueIterar2;
  
  
  while (contador2 > 0){
      iterarNumeroInicial2 = iterarNumeroInicial2 + 1;
      contador2 = contador2 - 1;
      if (iterarNumeroInicial2 % 2 != 0){
          console.log(`los numeros impares son: ${iterarNumeroInicial2}`);
      }
  
  }
  
  
//   EJERCICIO 6 | | |  muestre todos los numeros divisores de un numero que indica el usuario por prompt
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  const numerosUsuario = [];
  
  let numIngresado = parseInt(prompt('ingrese un numero'));
  
  for (let i = 1; i <= numIngresado; i++){
  
      if (numIngresado % i === 0){
          numerosUsuario.push(i);
      }
  }
  
  console.log(`divisores del número ${numIngresado} son: ${numerosUsuario}`);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 7 | | | programa que nos diga si un numero es par o impar, por ventana prompt. Si no es valido que nos pida de nuevo el numero
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  let ingresoNumero = prompt('ingrese un numero');
  
  while (isNaN(ingresoNumero)){
      console.log(`Lo que usted ingresó ${ingresoNumero}, no es un numero.
  Intente otra vez`);
      ingresoNumero = prompt('ingrese un numero');
  }
  
  ingresoNumero = parseInt(ingresoNumero);
  
  
  if (ingresoNumero % 2 === 0){
      console.log('el numero es par');
      }else{
          if (ingresoNumero % 2 != 0 ){
              console.log('el numero es impar');
          }
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 8 | | | tabla de multiplicar de un numero introducido por pantalla
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  let numeroC = parseInt(prompt('DE QUÉ NÚMERO QUIERE SABER SU TABLA DE MULTIPLICAR??'));
  let calculo = 0;
  const tabla = [];
  
  
  for (let i = 0; i <= 10; i++){
      calculo = numeroC * i;
      tabla.push(calculo);
      console.log(`${numeroC} multiplicado por ${i} es: ${tabla[i]}`);
      calculo = 0;
  }
  
  for (let i = 0; i <= 10; i++){
      console.log(`${numeroC} multiplicado por ${i} es: ${tabla[i]}`);
  }
  
  
  
//   EJERCICIO 9 | | | Calculadora:
//   1) que pida dos numeros por pantalla
//   2) Si metemos uno mal que lo vuelva a pedir
//   3) En el cuerpo de la pagina una alerta y por consola el resultado de sumar, restar, dividir y multiplicar esas dos cifras
//   encapsularlo en funciones para que sea reutilizable.
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  1) que pida dos numeros por pantalla
  let numeroD = prompt('ingrese el primer numero');
  let numeroE = prompt('ingrese el segundo numero');
  
  
  // 2) Si metemos uno mal que lo vuelva a pedir
  while (isNaN(numeroD)){
      numeroD = prompt('ingrese el primer numero');
  
  }
  
  while (isNaN(numeroE)){
      numeroE = prompt('ingrese el segundo numero');
  
  }
  
  // Paso ambos numeros a enteros
  numeroD = parseFloat(numeroD);
  numeroE = parseFloat(numeroE);
  
  
  // alerta de los resultados
  alert(`el primer número es: ${numeroD} y el segundo numero es: ${numeroE}
  Las operaciones matemáticas son las siguientes:
  
  la suma de los dos numeros es: ${sumar(numeroD, numeroE)}
  la resta de los dos numeros es: ${restar(numeroD, numeroE)}
  la multiplicación de los dos numeros es: ${multiplicar(numeroD, numeroE)}
  la división de los dos numeros es: ${dividir(numeroD, numeroE)}`);
  
  
  // console log de los resultados
  console.log(`el primer número es: ${numeroD} y el segundo numero es: ${numeroE}
  Las operaciones matemáticas son las siguientes:
  
  la suma de los dos numeros es: ${sumar(numeroD, numeroE)}
  la resta de los dos numeros es: ${restar(numeroD, numeroE)}
  la multiplicación de los dos numeros es: ${multiplicar(numeroD, numeroE)}
  la división de los dos numeros es: ${dividir(numeroD, numeroE)}`);
  
  
  // funciones de las operaciones
  function sumar (x,y){
      let resultado = x+y;
      return resultado;
  }
  
  function restar (x,y){
      if (x > y){
          let resultado = x - y;
          return resultado;
      }else{
          if (y > x){
              let resultado = y - x;
              return resultado;
          }
      }
  }
  
  function multiplicar(x,y){
      let resultado = x * y;
      return resultado;
  }
  
  function dividir(x,y){
      if (x > y){
          let resultado = x / y;
          return resultado;
      }else{
          if (y > x){
              let resultado = y / x;
              return resultado;
          }
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 10 y 11 | | | programa que pida 6 numeros por pantalla y los meta en un array. mostrar en pantalla con alert y guardar el valor en funcion
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  const array = [];
  
  for (let i = 0; i < 6; i++){
      let numeroF = parseInt(prompt('ingrese un numero'));
      array.push(numeroF);
  }
  
  
  mostrarConsole();
  
  function mostrarConsole(){
      for (let i = 0; i < 6; i++){
          console.log(`el numero ${i} del array es: ${array[i]}`);
      }
      }
  
  function mostrarAlert(){
          for (let i = 0; i < 6; i++){
              alert(`el numero ${i} del array es: ${array[i]}`);
          }
          }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 12 | | | crear un array de 6 numeros y ordenarlo de menor a mayor
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  const arrayBebe = [];
  const arrayAux = [];
  
  for (let i = 0; i <6; i++){
      let ingresaUnNumero = parseInt(prompt('ingresa un numero'));
      arrayBebe.push(ingresaUnNumero);
  }
  
  
  
  for (let i = 0; i <6; i++){
      let aux = arrayBebe[i];
      let contador = 0;
      for(let x = 0; x <6; x++){
          if (aux > arrayBebe[x]){
              contador++;
          }
  
      }
  
      arrayAux[contador] = aux;
  }
  
  for (let i = 0; i <6; i++){
      console.log(arrayAux[i]);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 13 | | | ordenar un array de 6 numeros y ordenarlo de mayor a menor
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  const arrayBebe2 = [];
  const arrayAux2 = [];
  
  for (let i = 0; i <6; i++){
      let ingresaUnNumero2 = parseInt(prompt('ingresa un numero'));
      arrayBebe2.push(ingresaUnNumero2);
  }
  
  
  
  for (let i = 0; i <6; i++){
      let aux2 = arrayBebe2[i];
      let contador2 = 0;
      for(let x = 0; x <6; x++){
          if (aux2 < arrayBebe2[x]){
              contador2++;
          }
  
      }
  
      arrayAux2[contador2] = aux2;
  }
  
  for (let i = 0; i <6; i++){
      console.log(arrayAux2[i]);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 14 | | | mostrar la cantidad de elementos que tiene el anterior ejercicio
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  const arrayAnterior = [];
  
  for (let i = 0; i <6; i++){
      let ingresaNum = parseInt(prompt('ingresa un numero'));
      arrayAnterior.push(ingresaNum);
  }
  
  
  console.log(`la cantidad de elementos del array es de:`, arrayAnterior.length, `y los elementos son: ${arrayAnterior}`);;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   EJERCICIO 15 | | | busqueda de un valor introducido por el usuario que nos diga si lo encuentra en el array o no
//   video → https://www.youtube.com/watch?v=PescFjv1UXM
  
  
  const arrayHere = [];
  
  for (let i = 0; i <6; i++){
      let ingresaNum2 = parseInt(prompt('ingresa un numero'));
      arrayHere.push(ingresaNum2);
  }
  
  let busqueda = parseInt(prompt('ingresa el numero que quieres buscar en el array'));
  
  
  
  let auxiliar = 0;
  
  for (let i = 0; i <6; i++){
  
      if (arrayHere[i] === busqueda){
          auxiliar = i;
      }
  }
  
  if (auxiliar > 0){
      console.log(`el elemento ${busqueda} que buscó se encuentra en el array, en la posicion ${auxiliar}`);
  }else{
      console.log(`el elemento ${busqueda} que buscó no se encuentra en el array`);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  