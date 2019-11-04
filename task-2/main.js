// my version

// let x = parseInt(prompt('Write first number'));
// let y = parseInt(prompt('Write second number'));
// let comfac = 0;

// for (let i = 0; i <= 100; i++) {
//   if (x < y && x % i == 0) {
//     comfac = i;
//   } else if (y < x && y % i == 0) {
//     comfac = i;
//   }
// }

// console.log(comfac);

// David version

let userInput = prompt('Enter 2 numbers');
userInput = userInput.split(' ');

let [num1, num2] = [+userInput[0], +userInput[1]];

let current = Math.min(num1, num2);

for (let i = current; i > 0; i--) {
  if ((num1 % i == 0) && (num2 % i == 0)) {
    console.log(i);
    break;
  }
}
