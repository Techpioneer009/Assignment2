const num = parseInt(prompt('Enter a number : '));

let reverse = 0;
let temp = num;

while (temp > 0) {
    const lastDigit = temp % 10;
    reverse = (reverse * 10) + lastDigit;
    temp = Math.floor(temp / 10);
}
console.log(`After reverse number is ${reverse}`);