// import fs from "fs";
import fs from "fs/promises";
import { log } from "util";

// FS stands for File System
// readFile() - callback
// Asynchronous version:
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync()
// Synchronous version:
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// readFile() - Promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile(): writes to a file and if it doesn't exist, it creates one.
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "I'm learning the PERN stack which is:");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile(): this adds content to the file
// \n: is a newline character. When included it in a string, it signals a line break
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nPsql/Express/React/Node");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
