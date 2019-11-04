// my version

let x = parseInt(prompt('Write any number'));
let divs;
let htmlString = [];

for (let i = 0; i <= x; i++) {
  if (x % i == 0) {
    divs = i;
    htmlString.push(divs);
    console.log(divs);
  }
  document.getElementById("divs").innerHTML = htmlString.join(', ');
}

// David version 

// let num = +prompt('Enter any number:');
// let arr = [];

// for (let i = num; i > 0; i--) {
//   if (num % i == 0) {
//     arr.push(i);
//   }
// }

// console.log(arr)