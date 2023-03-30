import { code } from "./user.js"; // importing function of module in a different module 

// every module file can atmost contain one default function
export default function () {
    console.log("account.js file");
}

let account_no = 43565323;
let acconut_type = "saving";

// exporting both the functions
export function withdraw() {
    console.log("Amount deducted...");
    code(); // calling imported function
}

export function deposit() {
    console.log("Balance updated...");
}
