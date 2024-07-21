// Task 1


// process.stdout.write() can be used instead of console.log 
for(let i = 1;i <= 10;i++){
    console.log(i);
}

// Task 2

for(let i = 1;i<=10;i++){
    console.log("5 * "+i+" : " + 5*(i));
}

// Task 3
let suma = 0;
let i = 1;
while(i<=10){
    suma+= i;
    i++;
}

console.log(suma);
// var, let and const, var global scoped, let, block scoped and const can never be re declared or changed
// Task 4
i = 11;
while(--i){
    console.log(i);
}

// Task 5
i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

// Task 6

let fact = 1;
let num = 5;

do{
    fact *= num;
}while(--num);
console.log(fact);

// Task 7

let lines = 5;

for(let i=0;i<lines;i++){// block scoped so it doesn't interfere with the i in the global env
    let val = "*";
    for(let j = 0;j<i;j++){
        val += "*";
    }
    console.log(val);
}

/*
Answers:

1
2
3
4
5
6
7
8
9
10
5 * 1 : 5
5 * 2 : 10
5 * 3 : 15
5 * 4 : 20
5 * 5 : 25
5 * 6 : 30
5 * 7 : 35
5 * 8 : 40
5 * 9 : 45
5 * 10 : 50
55
10
9
8
7
6
5
4
3
2
1
1
2
3
4
5
120
*
**
***
****
*****
*/
