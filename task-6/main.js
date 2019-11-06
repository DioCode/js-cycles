let userNumbers = prompt('Write operation: \n Example (a * b)');
userNumbers = userNumbers.split(' ');

let num1 = +userNumbers[0];
let sign = userNumbers[1];
let num2 = +userNumbers[2];
let result;

if (sign == '*') {
  result = num1 * num2;
} else if (sign == '/') {
  result = num1 / num2;
} else if (sign == '+') {
  result = num1 + num2;
} else if (sign == '-') {
  result = num1 - num2;
}

alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result)

let next = confirm('Want to keep?');
while (next) {
  userNumbers = prompt('Write operation:');
  userNumbers = userNumbers.split(' ');
  num1 = +userNumbers[0];
  sign = userNumbers[1];
  num2 = +userNumbers[2];
  if (sign == '*') {
    result = num1 * num2;
  } else if (sign == '/') {
    result = num1 / num2;
  } else if (sign == '+') {
    result = num1 + num2;
  } else if (sign == '-') {
    result = num1 - num2;
  }
  alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result)
  next = confirm('Want to keep?');
}