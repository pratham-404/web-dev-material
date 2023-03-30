// every module file can atmost contain one default function
export default function () {
    console.log("user.js file");
}

// exporting name variable to file that import user.js
export let name = "pratham"; 
let age = 19;

// exporting code() function to file that import user.js
export function code() {
    console.log("coding...");
}

function cook() {
    console.log("cooking...");
}
