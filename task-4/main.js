let n = parseInt(prompt('Writa any number'));
let amt = 0;

do {
  n /= 10;
  amt++
} while (n >= 1);

console.log('В переменной %d знаков', amt)