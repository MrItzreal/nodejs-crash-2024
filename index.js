//Different ways to import
// 1:
// import { getPosts } from "./postController.js";
// 2:
// import getPosts from "./postController.js";
// 3: importing with a default and none default function:
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Post Length: ${getPostsLength()}`);

//CommonJS Modules Example
//ES Modules is the modern implementation

// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`);
