let userNum = prompt('Write any number from 0 to 100:');
// let userNum = 43;

let guessNum = parseInt(Math.random() * 101);
n = guessNum;

let sign = prompt('Your number <, > or = ' + n + '?');

while (userNum) {
  if (sign == '<') {
    guessNum = parseInt(Math.random() * 51);
    n = guessNum;
    sign = prompt('Your number <, > or = ' + n + '?');
  } else if (sign == '>') {
    guessNum = parseInt(Math.random() * 50) + 51;
    n = guessNum;
    sign = prompt('Your number <, > or = ' + n + '?');
  } else if (sign == '==') {
    alert('Your num is: ' + userNum);
    break;
  }
}