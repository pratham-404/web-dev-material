({
    plugins: ['jsdom-quokka-plugin'],
    "jsdom": {
        "file": "./index.html"
    }
})

// ways to output using javascript

// alert("Hello, World")

// needs defer in script tag in head else script should be mention after the id
// document.getElementById("j").innerHTML = "Pratham";

// needs async(by default) in script tag in head
// added dynamically and hence cannot be viewed in source code
// document.write("Pratham");

// text output in the console
console.log("Hello, World");

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// comments
/*
    This is a multiline comment
    line1
    line2
    line3
*/
// This is a singleline comment

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// statements
var q;
q = 5;
console.log(q);

// this works but is not recommended as it is not easily readable
var q;
q = 5;
console.log(q);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// variables
// variable name should start with $, _, any alphabetical character
// variale names are case sensitive (i.e abc, ABC, Abc ... are all different variables)
// cannot use reserved keywords in javascript i.e(let, var, const, console, ...)

// var x;
// x = 2;
var i = 2;
// string are enclosed in single and double quotes and varibles are used without any quotes
console.log(i);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// after es6 var was deprecated and 2 new terms(i.e const, let) were introduced
const o = 15;
// o = 12; // error as x is a const variable
console.log(o);

let p = 13;
console.log(p);
p = 14; // here value can be updated as it is a let variable
console.log(p);

let n = "Pratham";
// let n = 'Pratham'
console.log(n);

let name = "Pratham",
    r_no = 201080068;
console.log(name);
console.log(r_no);

let k;
console.log(k);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// operation
let aa = 5,
    bb = 6;
let cc = aa + bb;
console.log(cc);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Arithmatic & Assigment Operators
let a = 5,
    b = 4;

console.log("a = " + a + ", b = " + b);
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log("a ** b = " + a ** b);

console.log("a = " + a + ", b = " + b);
// a++ is same as a+=1
console.log("a += b");
a += b;
console.log("a = " + a + ", b = " + b);
console.log("a -= b");
// a-- is same as a-=1
a -= b;
console.log("a = " + a + ", b = " + b);
console.log("a *= b");
a *= b;
console.log("a = " + a + ", b = " + b);
console.log("a /= b");
a /= b;
console.log("a = " + a + ", b = " + b);

let g = "hello";
let h = "world";
console.log("x = " + g + ", y = " + h);
console.log("x + y = " + (g + h));
h = 4;
// during concatination of a string and number the number is converted into string and concatinated
console.log("x = " + g + ", y = " + h);
console.log("x + y = " + (g + h));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Comparison & Logical Operator
// equal value
console.log(5 == 5);
console.log(5 == 6);
console.log(5 == "5"); // IMP(True)

// equal value AND equal type
console.log(5 === 5);
console.log(5 === 6);
console.log(5 === "5"); // IMP(False)

// NOT equal value
console.log(5 != 5);
console.log(5 != 6);
console.log(5 != "5"); // IMP(False)

// NOT equal value OR NOT equal type
console.log(5 !== 5);
console.log(5 !== 6);
console.log(5 !== "5"); // IMP(True)

// Greater than
console.log(5 > 5);
console.log(6 > 5);

// Greater than equal to
console.log(5 >= 5);
console.log(6 >= 5);

// Less than
console.log(5 < 5);
console.log(6 < 5);

// Less than equal to
console.log(5 <= 5);
console.log(6 <= 5);

// && operator
console.log(5 == 5 && 5 == 5);
console.log(5 == 5 && 6 == 5);
console.log(6 == 5 && 5 == 5);
console.log(6 == 5 && 6 == 5);

// || operator
console.log(5 == 5 || 5 == 5);
console.log(5 == 5 || 6 == 5);
console.log(6 == 5 || 5 == 5);
console.log(6 == 5 || 6 == 5);

// ! operator
console.log(!(5 === 5));
console.log(!(5 === 6));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Data types
// in JS the data type of the variable could be changes and it could be assigned to any other type at any instance
console.log(typeof 5);
console.log(typeof "pratham");
console.log(typeof -76.43);
console.log(typeof 2 > 3);
console.log(typeof ["pratham", "rajendra", "loya"]);
console.log(typeof {fname: "pratham", reg_no: 201080068});
console.log(typeof qrt);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Conditional Statements
let w = 6,
    u = 5;

// if statements
if (w > u) {
    console.log(`${w} is greater than ${u}`);
}

// if-else statements
let is_LoggedIn = 1;
if (is_LoggedIn == 1) {
    console.log("Logout");
} else {
    console.log("Login");
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// ternary operator
let option = is_LoggedIn == 1 ? "Logout" : "Login";
//               Condition        True      False
console.log(option);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// ?? operator
let user;
console.log(user ?? "Guest User"); // IMP
// if value before ?? is undefined it assigns the value right of the ?? to given variable

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// if-else-if-else statements
// let input = 'y';
let input = "no";
if (input == 1 || input == "y" || input == "yes") {
    console.log("Continue");
} else if (input == 0 || input == "n" || input == "no") {
    console.log("Exit");
} else {
    console.log("Wrong Input");
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// switch case statements
// multiple values for a case can have same result
switch (input) {
    case 1:
    case "y":
    case "yes":
        console.log("Continue");
        break;
    case 0:
    case "n":
    case "no":
        console.log("Exit");
        break;
    default:
        console.log("Wrong Input");
    // no use of break
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Loops
let fname = "Pratham";

let counter = 0;
while (counter < 5) {
    console.log(fname);
    counter++;
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let count = 0;
do {
    console.log(fname);
    count++;
} while (count < 5);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

for (let i = 0; i < 5; i++) {
    console.log(fname);
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// continue
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        console.log(3);
        continue;
    }
    console.log("Pratham");
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// break
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        break;
    }
    console.log("Pratham");
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// nested-loop
outer: for (let i = 0; i < 5; i++) {
    console.log("Name: ");
    for (let j = 0; j < 3; j++) {
        console.log("Pratham ");
        if (i == 2) {
            // break;
            break outer; //IMP
        }
    }
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// functions to interact with users alert, prompt, confirm
// Note: All these pause script execution don't allow user to interact with rest of the page until window have been dimissed

// alert() - shows a message
// alert('Welcome !');

// prompt() - shows a message, input text. It returns the text on ok or, if cancel button or esc is clicked, null
let username;
// username = prompt("Username", "root");

if (username === "pratham") {
    console.log("ACCESS GRANTED");
} else {
    console.log("ACCESS DENIED");
}

// confirm() - shows a message, confirm with "OK" or "Cancel". It return true for OK and false for Cancel/Esc
let bool;
// bool = confirm("Is your AGE greater than 18 ?");

if (bool) {
    console.log("ACCESS GRANTED");
} else {
    console.log("ACCESS DENIED");
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// type conversion
let x = 12;
// x = true;
// x = "hello";
// x /= [1,2,3];
// x = {1:"first", 2:"second", 3:"third"};

// automatic
// null == 0 for arithmatic operations
x += null; // x+=0
console.log(x);
// null == "null" for string concatination
x = "hello";
x += null; // hellonull
console.log(x);
// string + int results a string output of concatination of both
x = "12";
x += 5;
console.log(x);
// string - int results a int output of operation
x = "12";
x -= 5;
console.log(x);
// string * int results a int output of operation
x = "12";
x *= 5;
console.log(x);
// string * string results a int output of operation
x = "12";
x *= "5";
console.log(x);
// string * string results a NaN output of operation
x = "12";
x *= "yes";
console.log(x);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// using function to typecast --> String(), Number(), Boolean()
x = 5;
x = String(x);
console.log(x);

x = true;
x = String(x);
console.log(x);

x = "13";
x = Number(x);
console.log(x);

x = "yes";
x = Number(x);
console.log(x);

x = 0;
x = Boolean(x);
console.log(x);

x = 2313;
x = Boolean(x);
console.log(x);

x = "";
x = Boolean(x);
console.log(x);

x = "0";
x = Boolean(x);
console.log(x);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// String manipulation
// string are case sensitive hence Pratham !== pratham

// escape character
console.log("Pratham \nLoya");
console.log("Pratham \tLoya");
console.log("Pratham \\ Loya");
console.log('Pratham " Loya');

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let str = "String";

// string length
console.log(str.length);

// indexing in string ( only +ve index are allowed )
console.log(str[0]);
console.log(str[1]);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// concatination
let str1 = "Pratham";
let str2 = "Loya";
console.log(str1 + str2);
console.log(str1 + " " + str2);
let str3 = str1.concat(str2);
console.log(str3);
str3 = str1.concat(" ", str2);
console.log(str3);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// substring
let sentence = "Hello, Myself Pratham Loya.";

// here substr() is deprecated and currently we can use substring()
console.log(sentence.substring(0, 5));
console.log(sentence.substring(14, 21));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// locating a substring
sentence = "Hello, Myself Pratham Loya, Hello";

// gives starting index of first occurence from the start of string for given substring
console.log(sentence.indexOf("Hello"));

// starts searching after a given index and gives corresponding results
console.log(sentence.indexOf("Hello", 5));

// gives -1 if substring is not present in string
console.log(sentence.indexOf("Kunal"));

// gives starting index of first occurence from the end of sring for given substring
console.log(sentence.lastIndexOf("Hello"));
// camel-case

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

sentence = "    Hello, Myself Pratham Loya.            ";

// results into a string without whitespaces at start and end of the string
console.log(sentence.trim());

// results into a string without whitespaces at start of the string
console.log(sentence.trimStart());

// results into a string without whitespaces at end of the string
console.log(sentence.trimEnd());

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// UPPERCASE & lowercase
let naam = "Pratham";

// converts string to UPPERCASE
console.log(naam.toUpperCase());
// converts string to lowercase
console.log(naam.toLowerCase());

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// replacing a substring
sentence = "Hello, Myself Pratham Loya.";

// replaces the given substring by other given substring
console.log(sentence.replace("Myself", "I am"));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// does string contain following substring
sentence = "Hello, Myself Pratham Loya.";

// returns true if substring is present in string else resturn false
console.log(sentence.includes("Pratham"));
console.log(sentence.includes("pratham"));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Arrays

// initializing
let webDev = ["HTML-5", "CSS-3", "JS", 101, true];
// let webDev = new Array("HTML-5", "CSS-3", "JS");

// accessing elements from index number
console.log(webDev[1]); // returns value at given index in an array
// speciality in JS is that array can have multiple data-types
console.log(webDev[3]);
console.log(webDev[4]);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Operations on Array
webDev = ["HTML-5", "CSS-3", "JS"];

// length of array
console.log(webDev.length);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// inserting values into array
console.log(webDev);
// inserting values at the end of array
webDev.push("TailWind");
console.log(webDev);

console.log(webDev);
// inserting values at the start of array
webDev.unshift("Browser");
console.log(webDev);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// removing values from array
webDev.pop(); // removes last element from the array
console.log(webDev);

webDev.shift(); // removes first element from the array
console.log(webDev);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);
webDev.splice(3); // removes elements from index(3) till the last element i.e (3,4)
console.log(webDev);

webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);
webDev.splice(1, 3); // removes n(3) elements from current index(1) to index(3) i.e(1,2,3)
console.log(webDev);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// empty a complete array
webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);
// webDev=[];
webDev.length = 0;
console.log(webDev);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// getting index value from element
webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);
// gives index of given element
console.log(webDev.indexOf("JS"));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// string is an array of characters
// all functions of array also work on strings

webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);
// returns true only when given input is an Array
console.log(Array.isArray(webDev));

webDev = "Pratham";
console.log(webDev);
console.log(Array.isArray(webDev));

webDev = 1;
console.log(webDev);
console.log(Array.isArray(webDev));

webDev = true;
console.log(webDev);
console.log(Array.isArray(webDev));

webDev = {one: 1, two: 2, three: 3};
console.log(webDev);
console.log(Array.isArray(webDev));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// converting sentences into array of words
sentence = "Hello, Myself Pratham here !!";
console.log(sentence);
let wordArray = sentence.split(" "); // splits sentence whenever it encounters a blank space and stores as an element in the array
console.log(wordArray);
wordArray = sentence.split("e"); // excludes the given character and spilts the sentence and results the output array
console.log(wordArray);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// converting values of array into a sentence
webDev = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];
console.log(webDev);

let arraySentence = webDev.join(" "); // joins the elements of array into a sentence by " "
console.log(arraySentence);

arraySentence = webDev.join(" -- "); // joins the elements of array into a sentence by " -- "
console.log(arraySentence);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let webDev1 = ["HTML-5", "CSS-3", "JS"];
let webDev2 = ["Tailwind", "Bootstrap"];
let webDev3 = ["NodeJS", "Angular", "Vue"];

// concatinating 3 Arrays
let webDev4 = webDev1.concat(webDev2, webDev3);
console.log(webDev4);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Multidimentional Array
// initializing
let price = [
    ["Science", 400],
    ["Math", 500],
    ["Computer-Science", 200],
];

// gives the array at given index
console.log(price[0]);

// gives the value at certain address in the given array
console.log(price[1][0]);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Looping in Array
let techStack = ["HTML-5", "CSS-3", "JS", "Tailwind", "Bootstrap"];

for (let i = 0; i < techStack.length; i++) {
    console.log(techStack[i]);
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// preffered over traditional loops as it requires less syntax[IMP]
techStack.forEach(fun);
function fun(value) {
    console.log(value);
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Functions
// you can identify functions as they have parenthesis
// array.length; here length is not a function but it is property of the array

function line(a, b) {
    // here a and b are parameters
    console.log(`${a} x ${b} = ${b * b}`);
    console.log("<br>");
}

function mulTable(n) {
    // here n is a parameter
    for (let i = 1; i <= 10; i++) {
        line(n, i); // here n and i are arguments
    }
}

mulTable(5); // here 5 is an argument

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// The Arguments Object[IMP]
function add() {
    console.log(arguments); // function stores all the parameters passed to it in an array named "arguments"

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
}

add(1, 2); // 3
add(1, 2, 3); // 6
add(1, 2, 3, 4); // 10

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let sum = add; // now we can call add function from "sum" (i.e storing function as a variable)
sum(1, 2, 3, 4, 5); // 15

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Return in Function
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    // if you dont return a value function automatically returns undefined
    // we can return numbers, boolean, strings, arrays, ... etc
    // after the execution of return statement the function is exited and hence is not further executed
    return sum;
}

console.log(add(1, 2));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Global and Local Variables
// variables defined inside a function() are local variables and variables defined outside the funtion() are global variables
function add() {
    let sum = 0; // local variable
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
// console.log(sum); // gives ERROR as sum is a local variable defined inside the function add()
console.log(add(1, 2));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Anonymous Functions[IMP]

// here we have a name (i.e greet) assigned to function
// function greet(){
//     console.log("Hello, World");
// }

// assigning a variable to the function
// this saves ram as in compilation memory is not occupied by the function
// so if we want to execute function not so many times we can use it this way and save memory
// but for large number we should define the function in standard function defination

// Anonymous
let greet = function () {
    // Function Expression
    console.log("Hello, World");
};

// setTimeout(_function_name_, _time_in_ms);
setTimeout(greet, 3000); // executed in every 3000 ms

// can also be defined like this for specific piece of code that need to be executed inside the function
setTimeout(function () {
    console.log("Hello, World");
}, 3000);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Immediately Invoked Functions [IMP]

// anonymous function
// let callFun = function(){
//     console.log("Hello, World");
//     confirm("Do you wish to continue");
// }

// immediately invoked function --> automatically invoked
// it occupies less ram as the variables initiated in function occupy low memory comapared to that of global variables
// and we can re-initialize global varibles in funtions
// we dont know what variables have been used by third party scripts hence using them may give us initialize errors if same variable is used in both the scripts hence here we can use immediately invoked functions in this case
(function () {
    console.log("Hello, World");
    // confirm("Do you wish to continue");
})();

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Objects

// 1) Properties 2) Methods

// 1) Propeties
// let person = {}; // initializing an empty object
// console.log(person);

let person = {
    firstname: "Pratham",
    middlename: "Rajendra",
    "last name": "Loya",
};

console.log(person.firstname);
console.log(person["middlename"]);

// here dot notation FAILS
// console.log(person.'last name'); // ERROR
console.log(person["last name"]);

console.log(person.age);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// modifing object properties
person.firstname = "Kunal"; 
person["middlename"] = "Suresh";
person["last name"] = "Loya";

console.log(person.firstname);
console.log(person.middlename);
console.log(person["last name"]);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// adding new properties in object
console.log(person);
person.age = 101;
console.log(person);
console.log(person.age);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// deleting property of an object
console.log(person);
delete person.middlename;
console.log(person);
console.log(person.middlename); // undefined

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// check wheather a property of funtion exist or not
// 'in' operator returns true if property is present in the object and false if it is not present in the object
console.log("height" in person); // false
console.log("firstname" in person); // true

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// iterating through all the properties of the object
// for in loop
for (key in person) {
    // key gives all the properties of the object
    console.log(key + ": " + person[key]);
    // person[key] gives all the values of properties of object
    // here dot operator again FAILS
}

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// 2) Methods --> functions related to an object

person = {
    firstname: "pratham",
    lastname: "loya",
    age: 19,

    // 3. declaring methods inside the object using anonymous functions
    sayHello3: function () {
        return "3. Hello !";
    },

    // 4. after es6 we can declare funtions in much more easy syntax inside an object
    sayHello() {
        return "4. Hello !";
    },
};
console.log(person);
console.log(person.sayHello());

// 1. assigning anonymous function to object method
person.sayHello1 = function () {
    return "1. Hello !";
};

console.log(person);
console.log(person.sayHello1());

// 2. replacing anonymous functions with normal functions
function greet101() {
    return "2. Hello !";
}
person.sayHello2 = greet101;
console.log(person);
console.log(person.sayHello2());

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// this keyword
person = {
    firstname: "pratham",
    lastname: "loya",
    age: 19,

    sayHello() {
        // console.log("Hello " + person.firstname);
        // for accessing the elements of same object we can use this keyword(Good Practice)
        return "Hello " + this.firstname;
    },
};

console.log(person.sayHello());

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Math Object
let pi = Math.PI;
console.log(pi);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let e = Math.E;
console.log(e);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let num = 4.65;
console.log("num = " + num);

console.log("Math.round(num) = " + Math.round(num));
console.log("Math.floor(num) = " + Math.floor(num));
console.log("Math.ceil(num) = " + Math.ceil(num));
// removes the decimal places
console.log("Math.trunc(num) = " + Math.trunc(num));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

console.log("Math.pow(2, 10) = " + Math.pow(2, 10));
console.log("Math.sqrt(10) = " + Math.sqrt(16));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

console.log("Math.min(4, 7, 1, 2,  4, -2, 9) = " + Math.min(4, 7, 1, 2, 4, -2, 9));
console.log("Math.min(4, 7, 1, 2,  4, -2, 9) = " + Math.max(4, 7, 1, 2, 4, -2, 9));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Math.random()
let dice = Math.random(); // 0 to 1
dice = (Math.floor(dice * 10) % 6) + 1;
console.log(dice);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

function getRandom(lowerlimit, upperlimit) {
    let x = Math.floor(Math.random() * (upperlimit - lowerlimit) + lowerlimit); // including lowerlimit & excluding upperlimit
    return x;
}
console.log(getRandom(15, 25));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Date object
let d = new Date();
console.log(d);
// milliseconds
console.log(d.getTime());
console.log(d.getSeconds());
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

let y = new Date(2022, 10, 5, 12, 50, 45);
//          Date(year, month, date, time-hours, time-minutes, time-seconds) [0 indexed]
console.log(y);
z = new Date("October 5 , 2002, 4:50:55");
console.log(z);
y.setDate(z.getDate() + 10);
console.log(y);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// new keyword
// creating objects using new keyword
person = new Object();

person.name = "pratham";
person.age = 19;

console.log(person);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// getters and setters
person = {
    name: "pratham",
    age: 19,

    // used to access data members
    get getName() {
        return this.name;
    },

    get getAge() {
        return this.age;
    },

    // used to update data members
    set setName(n) {
        this.name = n;
    },

    set setAge(a) {
        this.age = a;
    },
};

console.log(person);

person.setName = "kunal";
person.setAge = 23;

console.log(person);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Object Constructor functions
function Student(first, last, age, cls) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.class = cls;
}

let student1 = new Student("pratham", "loya", 19, 11);
console.log(student1);

// added and extra data member to student1 object
student1.nationality = "indian";
console.log(student1)

// 'nationality' is not added to Student() object constructor function
console.log(Student);

// added method to student1 object
student1.name = function () {
    return this.firstname + " " + this.lastname;
};
console.log(student1.name());
console.log(student1);

// 'name()' is not added to Student() object constructor function
console.log(Student);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Object prototypes
// Used to add members to Object Constructor function after its declaration
Student.prototype.nationality = "indian";

student2 = new Student("kunal", "loya", 23, 15);
console.log(student1.nationality);
console.log(student2.nationality);
console.log(student1);
console.log(student2);
console.log(Student); // not visible here because nationality parameter was added added using prototype

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Nested Objects

user = {
    id: 101,
    email: "email@domain.com",
    personal: {
        name: "pratham",
        age: 19,
        birtdate: {
            date: 5,
            month: 10,
            year: 2002,
        },
    },
};

console.log(user);
console.log(user.id);
console.log(user.email);
console.log(user.personal);
console.log(user.personal.name);
console.log(user.personal.age);
console.log(user.personal.birtdate);
console.log(user.personal.birtdate.date);
console.log(user.personal.birtdate.month);
console.log(user.personal.birtdate.year);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Hoisting => to lift/pull
("use strict");

hello(); // ERROR: hello is not defined

// but even if we declare function after the initialization of function then also it is accepted unlike C/C++ not function prototype is required
// due to hoisting i.e before running JS interpreter scans for declarations and automatically place it on the top hence no need of funtion prototyping
function hello() {
    console.log("Hello !");
}

// no error due to hoisting: initialization is done on the top
// x = 7
// console.log(x); // 7 i.e 1. let x; 2. x = 7; 3. console.log(x);
// var x; // by default: undefined

// y = 7 // ERROR: cannot access 'y' before initialization
// console.log(y);
// let y;

// var z;
// console.log(z); // undefined i.e 1. let x; 2. x = 7; 3. console.log(x);

// let a;
// console.log(a); // undefined i.e 1. let x; 2. x = 7; 3. console.log(x);

// console.log(b); // undefined, Since ((var b1) === (let b = undefined))
// var b;
// b = 7;

// console.log(c); // ERROR: cannot access 'c' before initialization (let & const lack feature of undefined initialization)
// let c;
// c = 7;

// JS interpreter automatically initializes i.e var d;
// d = 7;
// console.log(d); // 7

// after enabling the strict mode at the top(used for debugging)
// e = 7; // uncaught reference: e is not defined
// console.log(e);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Document Object Model (DOM)
// API to manipulate HTML(i.e add, remove & modify parts of HTML documents)
// In DOM every HTML element are defined as objects hence it has both property and method
// add script file after the </body> and before </html>

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// getElementById()
// 'id' is unique key for each element
// document.getElementById("element_id"); // gives element in HTML with given 'element_id'

// we can execute script after window reloads(in this case it's fine if we have script file in <head> tag)
// window.onload = dothis;
// function dothis() {
//     document.getElementById("one").innerHTML = "Hola Amigos";
// }

let ele = document.getElementById("one");
console.log(ele); // complete tag with given 'id'

let ele2 = document.getElementById("zero");
console.log(ele2); // null if given id is not present

// accessing inner HTML
console.log(ele); // GET
// ele.innerHTML = "Holla Amigos" // SET
console.log(ele);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Search an element by class name
ele = document.getElementsByClassName("cls");
// we can give multiple classes above for more precision 
console.log(ele); // HTML collection of elements with given class_name
console.log(ele[0]); // can be accesed like arrays
console.log(ele[1]);

// ele.innerHTML = "hell"; // no output
ele[0].innerHTML = "cls 1";
ele[1].innerHTML = "cls 2";

// changing values of all the elements of given class
// for (let key in ele)
// {
//     ele[key].innerHTML = "jkl";
// }

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

//search element by tag name
el = document.getElementsByTagName("p")
console.log(el) // no output as we 
console.log(el[2])
// for(let key in el)
// {
//     el[key].innerHTML = "para"
// }

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

//combination
d = document.getElementById("d");
e = d.getElementsByClassName("cls");
// for (key in e) {
//     e[key].innerHTML = "pop";
// }

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Query Selector
el1 = document.querySelector("p.cls") // just like we use in CSS
// console.log(el1); // only the first element is selected

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Query Selector All
// but we exepect to select all the <p> tags with class_name = cls
el2 = document.querySelectorAll("p.cls")
console.log(el2); // list of all elements

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// traversing parent elements from child elements
ele = document.getElementById("ls");
console.log(ele);
prt = ele.parentElement;
console.log(prt);

chd = prt.getElementsByTagName("li");
// console.log(chd);
chd[1].innerHTML = "pratham"

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// traversing childen element from parent element
e = document.getElementById("par")
console.log(e);
console.log(e.firstElementChild); // first element
console.log(e.lastElementChild); // last element
console.log(e.children); // collection of child elements

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// traversing siblings
elo = document.getElementById("l1");
console.log(elo);
console.log(elo.previousElementSibling);
console.log(elo.nextElementSibling);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// inner HTMl
let f = document.getElementById("ls");
console.log(f);

let co = f.innerHTML; // call by value
console.log(co);

f.innerHTML = "101";
console.log(f);
// console.log(co); // notice there is no change in value here i.e call by value is done

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// create & append element
n = document.getElementById("par");

let m = document.createElement("li"); // creating tag
// m.innerHTML = "List d"; // adding text (not preffered)

m.id = "p-p" // setting id of element
m.className = "hel po"; // setting classes of element

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// 1. adding text using methods
// let txtt = document.createTextNode("List d");
// m.appendChild(txtt); // appending textNode to element

// 2. adding text using properties
m.textContent = "List d"
// we can also read text content of elements using this property 
// console.log(document.getElementById("l1").textContent);

// In innerHTML property we get all the tags along with text content of the element
// but textcontent property we get only the text content excluding the tags of the element

n.appendChild(m); // appending element to tag

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// insert before
// 1. parent element 2. position element 3. 
prt = document.getElementById("par");

let itm = document.createElement("li");
itm.textContent = "line 2.5";

// let pos = prt.firstElementChild; // 1st element
// let pos = document.getElementById("par").children[0] // 1st element
// let pos = prt.firstElementChild.nextElementSibling.nextElementSibling; // 3rd element
let pos = document.getElementById("par").children[2] // 3rd element

prt.insertBefore(itm, pos);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// remove child element
g = document.getElementById("par");

c = g.firstElementChild;
// g.removeChild(c); // reomving 1st children

// g.removeChild(c.nextElementSibling); // removing 2nd children
g.children[1].remove(); // removing 2nd children

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// clone element
let ie = document.getElementById("par");
// let r = i.cloneNode(); // only parent element is cloned
let rdx= ie.cloneNode(true);
// console.log(rdx);
rdx.id = 101;
// document.body.appendChild(rdx)
// console.log(document.getElementById(101));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

/// replace element
let pa = document.getElementById("par")

let lp = document.createElement("li");
lp.id = "op";
lp.textContent = "John";

let rw = document.getElementById("par").firstElementChild;
// pa.replaceChild(lp, rw);
// rw.replaceWith(lp)

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

//  insert adjacent element
let mdl = document.getElementById("d");

// before begining
//<div>
// after begining

//    <p></p>

// before end
//</div>
//after end

let opl = document.createElement("h1");
opl.textContent = "10101";

mdl.insertAdjacentElement("beforebegin", opl);
console.log(mdl);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// attributes
let fp = document.getElementById("one");
// creating attributes
fp.setAttribute("name", "ONE") // "name" attribute of element is set to "ONE"
// similarly we can add other attributes like id, class etc.

// accessing attributes
console.log(fp.getAttribute("id"));

// remove attribute
fp.removeAttribute("name");

// checking if attribute is present or not
console.log(fp.hasAttributes("name"));
console.log(fp.hasAttributes("id"));

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// inline style
let btn = document.getElementById("btn");

// inline CSS is added to the element and replaces previous inline styling if present
// if we want to update styles along with old ones then we should use '+=' instead of '+' with cssText
// btn.style.cssText = "color: red; background-color: blue";

// using setAttribute method
// btn.setAttribute("style", "color: blue; background-color:yellow")

// setting each style separtely
// btn.style.color = "red";
// btn.style.background = "blue";

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// get CSS of element
btn = document.getElementById("btn");
let css = getComputedStyle(btn);

console.log(css);
console.log(css.color);
console.log(css.backgroundColor);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// CSS classes
let div = document.getElementById("foo");

// accesing className
console.log(div.className);
// div.className += " dim";
console.log(div.className);

// accessing classList
console.log(div.classList);// gives an array consisting of classes of element
// array properties like add("a"), remove("b"), replace("a", "b"), contains("a") can be used with classList property
// div.classList.add("dim"); 
// div.classList.remove("bg");
// div.classList.replace("bg","dim");
// div.classList.toggle("bg"); // if a class is present then remove it
// div.classList.toggle("dim"); // if a class is not present then add it
// console.log(div.classList.contains("bg")); // true if element is present elese false
console.log(div.classList);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// height and width of an element
let bx = document.getElementById("foo");

// offset => including border & padding
console.log(bx.offsetHeight);
console.log(bx.offsetWidth);
// client => does not include border but include padding
console.log(bx.clientHeight);
console.log(bx.clientWidth);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// DOM events
// state change or action by user => event

let ipl = document.getElementById("foo");

// 1. adding function in HTML tag "onclick"
function hemlo() {
    console.log("clicked");
}

// 2. adding event listener method
// ipl.addEventListener("click", hemlo);

// can also be added as anonymous function
// ipl.addEventListener('click', function(){
//     alert("clicked");
// });

// 3. using anonymous functions with object methods
// ipl.onclick = function() {
//     alert("clicked");
// };

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// remove eventlistener
function click1() {
    console.log("click1");
}

function click2() {
    console.log("click2");
}

// ipl.addEventListener("click", click1);
// ipl.addEventListener("click", click2);

// removing eventlistener
// ipl.removeEventListener("click", click2);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// page load events 
// DOMContentLoaded: fully loaded HTML and completed building DOM tree but havent loaded external resources like images, stylesheets, etc
// load: when full content is loaded i.e HTML & external resources

window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Tree Created");
});

window.addEventListener("load", function(){
    console.log("Fully loaded");
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// mouse events
let fig = document.getElementById("foo");

// fig.onclick = function(){console.log("click");};
// fig.oncontextmenu = function(){console.log("right click");};
// fig.ondblclick = function(){console.log("double click");};
// fig.onmousedown = function(){console.log("mouse down");};
// fig.onmouseup = function(){console.log("mouse up");};
// fig.onmouseover = function(){console.log("mouse over");};
// fig.onmouseout = function(){console.log("mouse out");};

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Key-Down Events
// keydown => triggered when key is gone down
// keyup => triggered when key comes back to its position
window.addEventListener("keydown", function(e) {
    console.log(e.key);
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Scroll Events
window.addEventListener("scroll", function(){
    // console.log("Scrolling");

    if (window.pageYOffset > 150) {
        document.body.style.backgroundColor = "green";
    }else{
        document.body.style.backgroundColor = "white";
    }

});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Wheel Event
// used to determine scroll-up & scroll-down
window.addEventListener("wheel", function (e) {
    // deltaY => +ve -> scroll down
    //        => -ve -> scroll up
    // deltaX => +ve -> scroll right
    //        => -ve -> scroll left

    if (e.deltaY > 0) {
        console.log("scrolling down");
    }
    if (e.deltaY < 0) {
        console.log("scrolling up");
    }
    
    if (e.deltaX > 0) {
        console.log("scrolling right");
    }
    if (e.deltaX < 0) {
        console.log("scrolling left");
    }
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Input Events
let upt = document.getElementById("txt");

upt.addEventListener("focus", function(){console.log("focus");}); // when in focus
upt.addEventListener("change", function(){console.log(this.value);}); // value is changed and element is blured
upt.addEventListener("input", function(){console.log(this.value);}); // value is changed and element is in focus
upt.addEventListener("blur", function(){console.log("blur");}); // when not in focus

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Event Bubbling & Event Capturing

// A element consists of following => Body(Div(Button))
// And we have onclick for all i.e onclickBODY, onclickDIV, onclickBUTTON
// if we click on body excluding div(button) => onclickBODY is activated
// if we click on div excluding button => onclickBODY & onclickDIV is activated
// if we click on button => onclickBODY, onclickDIV & onclickBUTTON is activated

// so in the last option
// 1. Event Bubbling(by default): most specific element is activated
// i.e 1.onclickBUTTON     2.onclickDIV     3.onclickBODY 
// 2. Event Capturing: most specific element is activated
// i.e 1.onclickBODY       2.onclickDIV     3.onclickBUTTON

// syntax
// addEventListener(event, function) ==> Event Bubbling(by default: useCapture=false)
// addEventListener(event, function, useCapture=true) => Event Capturing

// event bubbling
// document.body.addEventListener("click", function(){console.log("body clicked");});
// document.getElementById("pi").addEventListener("click", function(){console.log("div clicked");});
// document.getElementById("e").addEventListener("click", function(){console.log("button clicked");});

// event capturing
// document.body.addEventListener("click", function(){console.log("body clicked");}, useCapture=true);
// document.getElementById("pi").addEventListener("click", function(){console.log("div clicked");}, useCapture=true);
// document.getElementById("e").addEventListener("click", function(){console.log("button clicked");}, useCapture=true);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Prevent Default
document.getElementById("gg").addEventListener("click", function(e){
    console.log("link clicked");
    e.preventDefault(); // now the link does not redirect
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// BOM (Browser Object Model)
// interact with browser => window object
// all global JS objects, functions and variables made using var keyword automatically become members of window object
// Global variables are properties of window object
// Global functions are methods of window object

var t = "kill";
let v = "kill";
// console.log(window.t); // "var" defined variables are properties of window object
// console.log(window.v); // undefined

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// height & width of window
// console.log(window.outerHeight);
// console.log(window.outerWidth);

let kd = document.getElementById("btn");
let win;
kd.addEventListener("click", function () {
    let url = "http://www.google.com";
    let features = "height=400,width=800";

    // windwow.open(url, name, features);
    win = window.open(url, "google", features);
});
// more features of window.open() => https://www.w3schools.com/jsref/met_win_open.asp

document.getElementById("bt").addEventListener("click", function () {
    window.open("http://youtube.com", "google", "height=400,width=800");
    // here we have google hence to open link in google window if it is present else create a new window with given features
});

document.getElementById("n").addEventListener("click", function () {
    win.close();
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// timeOut & timeInterval

// setTimeout() is a function of window object
let id = setTimeout(fun, 1000); // activates after the given milliseconds of web page reload(only once)

function fun() { 
    console.log("hola Amigos");
}

clearTimeout(id); // to clear specific function to not occur 

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// setTimeout => occurs only once
// setInterval => occurs after a given interval

// let id1 = setInterval(fun1, 500); // after the interval it repeats the function

function fun1(){
    console.log("boom !!");
}

document.getElementById("e").addEventListener("click", function(){
    clearInterval(id1);
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// location Object
// sub object / property of window object
// used to fetch url of current page & redirection of url's

// console.log(window.location.href);
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);

// 1. redirecting using window.location = url
// document.getElementById("e").addEventListener("click", function(){
//     window.location = "https://www.google.co.in/";
// });

// 2. redirecting using location.href = url
// document.getElementById("e").addEventListener("click", function(){
//     location.href = "https://www.google.co.in/";
// });

// 3. redirecting using location.assign(url)
// document.getElementById("e").addEventListener("click", function(){
//     location.assign("https://www.google.co.in/");
// });

// first 2 methods use assign method internally
// assign method stores the redirected site in the browser history

// 4. redirecting using location.replace(url)
// document.getElementById("e").addEventListener("click", function(){
//     location.replace("https://www.google.com");
// });
// location.replace() does not add entry to browser history

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// refreshing the page 
document.getElementById("e").addEventListener("click", function(){
    location.reload();
});

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// history object

// history.back() => goes to previous page
// history.forward() => goes to next page
// history.go(n) => goes to nth page forward/backward
    // history.go(-1) => history.back()
    // history.go(1) => history.forward()
// history.length() => gives length of history

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Navigator Object
// provides browser information/ browser capabilities

console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.vendor);
console.log(navigator.javaEnabled);

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==

// Screen Object

console.log(screen.width);
console.log(screen.height);
console.log(screen.orientation);
console.log(screen.colorDepth); // in bits

// ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><== ==><====><== ==><== ==><== ==><== ==><== ==><== ==><==
