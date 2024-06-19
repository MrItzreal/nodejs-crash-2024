import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename(): returns last portion of a path
console.log(path.basename(filePath));

// dirname(): returns directory name
console.log(path.dirname(filePath));

// extname(): returns extension name
console.log(path.extname(filePath));

// parse(): returns object
console.log(path.parse(filePath));

/* These paths are incompatible with ES Modules and will cause errors if used. 
But you can make your own using variables and methods:
__filename: gives both path & file name;
__dirname: only gives the path;
*/

// Get current path.
// file url is turned into a path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// path.join(): Joins arguments together which results in a path.
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

// path.resolve(): creates a full absolute path to a file or directory.
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
