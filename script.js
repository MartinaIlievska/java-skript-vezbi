console.log("Dobar den");

var doorCode = 6789;

if (doorCode == 6789) {
    console.log('Correct code. The door is open.')
} else {
    console.log('Wrong code.')
}

var number = 4;

 
if (number % 3 == 0) {
    console.log('Fizz');
} else if(number % 5 == 0) {
    console.log('Buzz');
} else if(number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz');
} else {
    console.log(number);
}


function fizzBuzz(broj) {
    let i;
    for(let i = 1; i <= broj; ++i) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
         else if(i % 5 == 0) {
            console.log('Buzz');
        }
         else if(i % 3 == 0 ) {
            console.log('Fizz');
        } 
        else {
            console.log(i.toString());
        }
    }
    return 0;
}

var broj = 24;
fizzBuzz(24);
console.log();



var hour = 20;
 if(hour < 12) {
    console.log('Dobro utro');
 } else if (hour > 12 && hour < 19) {
    console.log('Dobar den');
 } else {
    console.log('Dobra vecer');
 }

 var cas = 15;
 if(cas >= 7 && cas <= 12) {
    console.log('Prva smena vo uciliste');
 } else if (cas >= 13 && cas <= 19) {
    console.log('Vtora smena vo uciliste');
 } else { console.log('Doma sme');}

var x = 5;

 switch(x) {
    case 0:
        console.log('Ligts ON');
        break;
    case 1: 
        console.log('Ligts OFF');
        break;
    default: 
        console.log('ERROR');
 }