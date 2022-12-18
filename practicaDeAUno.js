

/* CONSOLE CLEAR*/
console.clear(); console.log(`🐷🐽`);   

/**
 * ! 
 * * 
 * 
 */

function arithmetic(a, b, operator){
    switch(operator){
        case "add":
            return a+b;

        case "subtract":
            return a-b;
            
        case "divide":
            return a/b;
            
        case "multiply":
            return a*b;
    }
}

  console.log(arithmetic(952,2,'subtract'));