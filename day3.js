let x = 10;
if(x >0) console.log("Positive");
else console.log("Negative");

let age = 19;
let abc = age>=18? "Adult" : "Not Adult";
console.log(abc);

let a = 100, b = 900, c = 30;

if(a > b){
    if(b > c){
        console.log(a);
    }
    else if(c > a) console.log(c);
}
else{
    if(b > c){
        console.log(b);
    }
    else console.log(c);
}

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
}


let grade = 70;

switch (true) {
    case grade <40:
        console.log("F");
        break;
    case grade <60:
        console.log("D");
        break;
    case grade <70:
        console.log("C");
        break;
    case grade <85:
        console.log("B");
        break;
    case grade <=100:
        console.log("A");
        break;
    default:
        console.log("Invalid");
        break;
}

let num = 100;
let ans = num%2 == 0? "Even":"Odd";
console.log(ans);

let year = 1600;

if((year % 4 == 0 && year %100 != 0) || year % 400 == 0){
    console.log("Its a Leap year");
}
else console.log("Not a leap year");

/*

Answers:
Positive
Adult
900
Monday
B
Even
Its a Leap year


*/
