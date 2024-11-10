console.log("Dobar den");
// Password, door code
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


// Pozdravuvanja
var hour = 20;
 if(hour < 12) {
    console.log('Dobro utro');
 } else if (hour > 12 && hour < 19) {
    console.log('Dobar den');
 } else {
    console.log('Dobra vecer');
 }

 // Prva ili vtora smena vo uciliste
 var cas = 15;
 if(cas >= 7 && cas <= 12) {
    console.log('Prva smena vo uciliste');
 } else if (cas >= 13 && cas <= 19) {
    console.log('Vtora smena vo uciliste');
 } else { console.log('Doma sme');}


 // On/Off
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
// Boduvanje oceni
 var bodovi = 30;
 if(bodovi >= 51 && bodovi <= 60){
    console.log('6');
 } else if (bodovi>=61 && bodovi <=70) {
    console.log('7');
 } else if (bodovi>=71 && bodovi <=80) {
    console.log('8');
 } else if (bodovi>=81 && bodovi <=90) {
    console.log('9');
 } else if (bodovi>=91 && bodovi <=100) {
    console.log('10');
 } else {
    console.log('5');
 }

 // Star rating
 var rating = 3;
  if(rating <= 2){
    console.log('Bad rating');
  } else if(rating >= 4){
    console.log('Good rating');
  } else {
    console.log('Average rating');
  }

// Vremenska prognoza
  var stepeni = 5;

  if (stepeni <= 0 ) {
    console.log('Nadvor e ladno, ima ${stepeni} stepeni i mrzne');
  } else if (stepeni > 0 && stepeni < 15 ) {
    console.log('Nadvor e ladno i oblacno, ima ${stepeni} stepeni');
  } else if (stepeni >=16 && stepeni < 25 ) {
    console.log('Nadvor e soncevo i ptijatno, ima ${stepeni} stepeni');
  } else if (stepeni >=25 && stepeni < 30 ) {
    console.log('Nadvor e soncevo i toplo, ima ${stepeni} stepeni');
  } else if (stepeni >= 30 && stepeni < 50 ) {
    console.log('Nadvor e soncevo i zesko, ima ${stepeni} stepeni');
  } 

  // Age for driving license
  var age = 20;

  if (age < 16) {
    console.log('Sorry, you are to young to drive.');
  } else {
    console.log('Qualifies for driving');
  }
