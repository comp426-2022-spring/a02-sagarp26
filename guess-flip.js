import { flipACoin} from "./modules/coin.mjs";
const arg = process.argv.slice(2);
let value = arg[0];
var guess = "";
if(value != null && value.includes("--call=") && (value.slice(7) == "heads" || value.slice(7) == "tails")) {
    guess = value.slice(7);
    console.log(flipACoin(guess));
}
else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}