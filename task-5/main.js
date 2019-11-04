//my version

// let nums = prompt('Write 10 numbers').split(' ');
// or
// let nums = [10, 0, -12, 65, -354, 99, 60, 0, 0, 0];

// let posNums = [];
// let negNums = [];
// let zeros = [];
// let evenNums = [];
// let oddNums = [];

// for (let i = 0; i <= nums.length; i++) {
//   if (nums[i] >= 1) {
//     posNums.push(nums[i]);
//   } else if (nums[i] < 0) {
//     negNums.push(nums[i]);
//   } else if (nums[i] == 0) {
//     zeros.push(nums[i]);
//   }
// }
// for (let x = 0; x <= nums.length; x++) {
//   if (nums[x] % 2 == 0 && nums[x] != 0) {
//     evenNums.push(nums[x]);
//   } else if (!nums[x] % 2 == 0) {
//     oddNums.push(nums[x]);
//   }
// }

// console.log(nums.join(' '));
// document.getElementById("nums").innerHTML = 'your nums --> ' + nums;
// document.getElementById("posNums").innerHTML = 'positive nums --> ' + posNums;
// document.getElementById("negNums").innerHTML = 'negative nums --> ' + negNums;
// document.getElementById("zeros").innerHTML = 'zeroes --> ' + zeros;
// document.getElementById("evenNums").innerHTML = 'even nums --> ' + evenNums;
// document.getElementById("oddNums").innerHTML = 'odd nums --> ' + oddNums;


// David version

function stats(numbersString) {
  let numbers = numbersString.split(" ");

  let [odd, even, pos, neg, zero] = [0, 0, 0, 0, 0];

  for (let i = 0; i < numbers.length; i++) {
    let num = +numbers[i]

    if (num == 0) {
      zero += 1;
      continue;
    }

    if (num > 0) {
      pos += 1;
    } else {
      neg += 1;
    }

    if (num % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }

  return `odd number: ${odd} | even number: ${even} | pos number: ${pos} | neg number: ${neg} | zero number: ${zero}`
}

console.log(stats('10 0 12 13 25 26 -10 4'))