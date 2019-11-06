let str = prompt("Введите число!");
let c = prompt("На сколько цифр его сдвинуть?");

alert(str.substring(c) + str.substring(0, c));
