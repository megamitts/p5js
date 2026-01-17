/* fizzbuzz

The game of fizzbuzz is to change any number that can be divided by 3 to the word fizz, any number that can be divided by 5 to the word buzz and any number that can be divided by both 3 and 5 to the word fizzbuzz.

This version also changes all other numbers into the word POP 

*/

/* https://leetcode.com/problems/fizz-buzz/description/ 

leetcode 412

*/

let array = [];
let y = 20;

function setup() {
  createCanvas(400, 1800);
  array.push('POP'); // force POP into element 0 so that the rest of the array fills in from element 1.
  noLoop();
  
}

function draw() {
  background(220);
  
  textSize(10);
  
  // use modular 3 or 5 to get fizzbuzz, fizz, or buzz
  
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('fizzbuzz');
      text(`${i}: fizzbuzz`, 0, y);
    } else if (i % 3 === 0) {
      array.push('fizz');
      text(`${i}: fizz`, 0, y);
    } else if (i % 5 === 0) {
      array.push('buzz');
      text(`${i}: buzz`, 0,y);
    } else {
      array.push('POP'); // if not fizz, buzz or fizzbuzz add POP!
      text(`${i} POP`,0,y);
    }
    y+=16;
  }
  
  console.log(array); // array for testing reasons.
}
