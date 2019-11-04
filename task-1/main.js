// my version

// let a = parseInt(prompt("Начало диапазона"));
// let b = parseInt(prompt("Конец диапазона"));
// let total = 0;

// while (a <= b) {
//   total += a;
//   a++;
// }
// alert(total) 

// David version

let userInput = prompt('Enter 2 numbers');
userInput = userInput.split(' ');
let [from, to] = [+userInput[0], +userInput[1]];

let sum = 0;
for (let i = from; i < to; i++) {
  sum += i;
}

console.log(sum);