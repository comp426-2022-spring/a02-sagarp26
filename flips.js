import { coinFlips, countFlips } from "./modules/coin.mjs";
const arg = process.argv.slice(2);
let value = arg[0];
var number = 1;
if(value != null && value.includes("--number=")) {
    number = value.slice(9);
}
let arr = coinFlips(number);
console.log(arr);
console.log(countFlips(arr));