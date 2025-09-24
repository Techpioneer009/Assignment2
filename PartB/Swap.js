let a = prompt('Enter the first Number: ');
let b = prompt('Enter the second Number: ');

let temp = a;
a = b;
b = temp;

console.log(`The value of first number after swapping: ${a}`);
console.log(`The value of second number after swapping: ${b}`);