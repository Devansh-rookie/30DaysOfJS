// const prompt = require("prompt-sync")();

//Arithematic
let a = 10, b = 20;
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a - b);


// Comparison operators, wil return bool

console.log(a == b);
console.log(a === b);
console.log(a !== b);
console.log(a != b);
console.log(a == b && a>1 || b < 2);


/*
Equal to :  == , only val can be equal like "5"== 5
Not equal to:  !=, 
Equal to & type: ===
Not equal to & type:  !==
*/

console.log("5"== 5);// Equal to :  == , only val can be equal like "5"== 5
console.log("5"=== 5);// Equal to & type: ===, the value is equal but type is different
console.log("6"!= 5); // Not equal to:  !=, 
console.log("5"!==5)//Not equal to & type:  !==
console.log(5!==5)// because type is same it will give false

/*
Logical AND : &&
Logical OR : ||
Logical NOT: !
*/

// parseInt
// parseFloat
let age = 19;
// Ternary Operator short of if and else statements
let abc = age>18? "Adult" : "Not Adult";
// console.log(abc);
