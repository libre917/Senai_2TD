const readline = require("readline-sync");

const num = readline.question("digite um numero: ");
let t = 1;
let con = 1;
for (i = -1; con <= num; con++) {
  let newValue = i + t;
  console.log(newValue);
  t = newValue;
  i = newValue - i;
}
//1,1,2,3,5,8,13,21
