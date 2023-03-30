// Modules in ES6

// import { age } from "./modules/user"; // ERROR
// console.log(age); //ERROR: age is not defined

// import { name, code } from "./modules/user.js";
// console.log(name);
// code();

import * as usr from "./modules/user.js";
console.log(usr.name);
usr.code();
// console.log(usr.age); // undefined since it is not exported from user.js
console.log(usr.default());

import {default as gg, withdraw as wd, deposit} from "./modules/account.js";
wd();
deposit();
gg();

// import { triangle } from "./modules/shapes/triangle.js";
// import { square } from "./modules/shapes/square.js";
// import { circle } from "./modules/shapes/circle.js";

// import {triangle, square, circle} from "./modules/shape.js"
import * as shp from "./modules/shape.js";

shp.triangle();
shp.square();
shp.circle();
