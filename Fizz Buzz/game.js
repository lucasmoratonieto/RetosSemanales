// for (number = 1; number <= 100; number++) {
//   if (Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
//     console.log("Fizzbuzz");
//   } else if (Number.isInteger(number / 3)) {
//     console.log("Fizz");
//   } else if (Number.isInteger(number / 5)) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }

let number = 1;

function Fizzbuzz() {
  for (number; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 == 0) {
      console.log("Fizzbuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(number);
    }
  }
}

Fizzbuzz();
