/** ? Is a number prime? 
Description:

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
*/


// let num = parseInt(prompt("input a nummber"));


function isPrime2(num) {
    if (num <= 0){
        return false;
    }
    let cont = 0;
    for (let i = 1; i <= num; i++){
        if (num % i === 0){
            cont++;
        }
    }

    if (cont === 2){
        return true;

    }else {
        return false;
    }
}

// console.log(`El numero es primo? ${isPrime2(num)}`);
console.clear();



/** 
 * * SCAR EL MAXIMO
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max 
 * ! Maximum subarray sum
 */

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.



valor = 1

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSequence1 (arr){
    let valor = arr[0];

    if (arr.length === 0){
        valor = 0;
        return valor;
    }else{
        if (arr.length ===1){
            valor = arr[0];
            return valor;
        }
    }

    for (let i = 1; i < arr.length; i++){
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
        valor = Math.max(valor, arr[i]);
    }
    
    
    return valor;
}

console.log(`La suma de la mayor secuencia es: ${maxSequence1(arr1)}`);



/**
 * ! SACAR EL MAYOR NUMERO DE UN ARRAY
 */

const array3 = [1, 2, 3, 4, 5];

var max = Math.max(...array3);

console.log(max);







/**
 * BUSCAR LA SUMA SUBSECUENTE 
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 *   
 * ? caso 1
 * Son todos positivos asi que se suma el array normal
 * ? caso 2 
 * Son todos negativos por lo que la respuesta es 0
 * ? caso 3
 * Es un array vacio por lo que la respuesta es 0
 * ? caso 4 
 * Si dan valores mezclados se hace así
 * ([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -------------> should be 6: [4, -1, 2, 1]  
 */

let arrayCaso1 = [2, 4, 6, 8];
let arrayCaso2 = [-2, -4, -6, -8];
let arrayCaso3 = [];
let arrayCaso4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSequence (arr){

    let acu = 0;

    for (let i = 0; i < arr.length; i++){
        // caso 1
        if (arr[i] >=1){ 
            acu = acu + arr[i];
        }else{
            if (arr[i] > acu){
                acu = acu - arr[i];
            }else{
                acu = 0;
            }
        }
        
    }

    if (arr.length === 0) {
        return acu = 0;
    }else {
        return acu;
    }

}

console.log(maxSequence(arrayCaso4));




function maxSubArraySum(a, size)
{
	var maxint = Math.pow(2, 53)
	var max_so_far = -maxint - 1
	var max_ending_here = 0
	
	for (var i = 0; i < size; i++)
	{
		max_ending_here = max_ending_here + a[i]
		if (max_so_far < max_ending_here)
			max_so_far = max_ending_here

		if (max_ending_here < 0)
			max_ending_here = 0
	}
	return max_so_far
}

// Driver code
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
document.write("Maximum contiguous sum is",
			maxSubArraySum(a, a.length));





function prueba(arr){
    let max_so_far = 0,
        max_ending_here = 0;

        for (let i = 0; i < arr.length; i++){
            max_ending_here = arr[i];

            if (max_so_far < max_ending_here){
                max_so_far= max_ending_here;
            }else{
                if (max_ending_here < 0){
                    max_ending_here = 0;
                }
            }
        }
        return max_so_far;
}

console.log(prueba(arrayCaso4));



/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);



/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);


/**
 * !Ordered Count of Characters
 * * https://www.codewars.com/kata/57a6633153ba33189e000074
 * Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. 
  *For empty output return (an empty list).
 * Consult the solution set-up for the exact data structure implementation depending on your language. 
 * Example: orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

 */

let palabra = "HELLO",
    strMap = new Map(),
    count = 0;

    for (key of palabra){
        strMap.set(key, count); // map, divide la palabra por letra, con esto lo que hace en poner cada key en 0
    }
    console.log(strMap); // Map(4) { H → 0, E → 0, L → 0, O → 0 }

    for (key of palabra){
        let count = strMap.get(key);
        strMap.set(key, count + 1)
    }

    console.log(strMap);

    for ([key, value] of strMap){
        console.log(key, value);
    }


/**
* 

*/

let word = 'hello',
    wordMap = new Map(),
    contador = 0;

for (key of word){
    wordMap.set(key, contador); // uso contador para poner todo en 0, si uso value por ejemplo, me pone todo en 1 y así no quiero
}
console.log(wordMap);

for (key of word){
    contador = wordMap.get(key);
    wordMap.set(key, contador + 1)
}
console.log(wordMap);

for ([key, value] of wordMap){
    console.log(key, value);
}








/**
 * ! Quarter of the year
 * * https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
 * Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
 * For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 
 * (November), is part of the fourth quarter.

 */
const month = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const quarterOf = ((month) =>{
    let solution = 0;
    const obj = {
        firstQuarter: [1,2,3],
        secondQuarter: [4,5,6],
        thirdQuarter: [7,8,9],
        forthQuarter: [10,11,12],
    }

    for (const x of obj.firstQuarter){
        if (month === x){
            return solution = 1;
        }
    }

    for (const x of obj.secondQuarter){
        if (month === x){
            return solution = 2;
        }
    }

    for (const x of obj.thirdQuarter){
        if (month === x){
            return solution = 3;
        }
    }

    for (const x of obj.forthQuarter){
        if (month === x){
            return solution = 4;
        }
    }

});

console.log(quarterOf(11));

// OTRA OPCION

// lo que hace es que Math.ceil sube el numero que divido para arriba, o sea m (mi mes) 
// lo divido en 3 (para q me de 1 - 2 - 3 - 4)
// entonces cuando ejecuto la funcion, me da 1, 2, 3, 4 si es el primero, segundo, tercero o cuarto cuarto del año 
const quarterOf2 = m => Math.ceil(m/3);

console.log(quarterOf2(11));


// OTRA OPCION

const quarterOf3 = (month) => {
    if (month <= 3) {
      return 1;
    } else if (month <= 6) {
      return 2;
    } else if (month <= 9) {
      return 3;
    } else if (month <= 12) {
      return 4;
    }
    
  }





/**
 * ! Grasshopper - Summation
 * * https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 * Summation
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 * For example (Input -> Output):
 * 2 -> 3 (1 + 2)
 * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 * 
 */


var summation = function (num) {
    let inicio = 1;
    let suma = 0;
    for (i = 1; i <= num; i++){
        suma = inicio + suma;
        inicio++;
    }
    return suma;


}

console.log(summation(8));








/**
 * ! Function 2 - squaring an argument
 * * https://www.codewars.com/kata/523b623152af8a30c6000027
 * Description:
 * Now you have to write a function that takes an argument and returns the square of it.

 */

const square = function (num){
    let result = 0;

    result = Math.pow(num, 2)
    return result;
}

console.log(square(5));

/// también se puede hacer así

const cuadrado = n => n*n;

console.log(cuadrado(5));






/**
 * !Training JS #7: if..else and ternary operator
 * * https://www.codewars.com/kata/57202aefe8d6c514300001fd
 * Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer    
 * will buy, different numbers have different prices (refer to the following table), return how much money will the customer        
 * spend to buy that number of hotdogs.
    number of hotdogs 	price per unit (cents)
        n < 5 	100
        n >= 5 and n < 10 	95
        n >= 10 	90

You can use if..else or ternary operator to complete it.
 */


function saleHotdogs(n){
    let solution = 0;

    if (n < 5){
        return solution = n * 100;
    }else{
        if (n>= 5 && n < 10){
            return solution = n * 95;
        }else{
            if (n >= 10){
                return solution = n * 90;
            }
        }
    }
}

console.log(saleHotdogs(11));










/**
 * ! Localize The Barycenter of a Triangle
 * * https://www.codewars.com/kata/5601c5f6ba804403c7000004
 */

function barTriang(a, b, c){
    let aCopia = [], bCopia = [], cCopia = [];

    aCopia.push(a[0]), aCopia.push(a[1]);
    bCopia.push(b[0]), bCopia.push(b[1]);
    cCopia.push(c[0]), cCopia.push(c[1]);
    
    let x0 = (aCopia[0] + bCopia[0] + cCopia[0]) / 3;
    let y0 = (aCopia[1] + bCopia[1] + cCopia[1]) / 3;
    // REDONDEAR DECIMALES DE UN NUMERO!
    let x1 = Number(x0.toFixed(4));
    let y1 = Number(y0.toFixed(4));

    let result = [x1, y1];
    return result; 
    
    
    
}

console.log(barTriang([4,6], [12,4], [10,10]));







/**
 * !Count the likes
 * *
 * 
 */


var evalLikes = function(words){
    let contlike = 0, 
        tot = words.length,
        prom = 0;
   
    for(let i = 0; i <words.length; i++){
      if (words[i] === "like"){
        contlike++;
      }
    }
    if (contlike === 0){
        return false;
    }else{
        if (contlike != 0){
            prom = tot / contlike; 
        }
        if (prom > 0.5){
            return true;
        }else{
            return false;
        }
    }
  }


  console.log(evalLikes(['hola', 'casa', 'likee']));


  


/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);