import url from "url";

const urlString = "https://www.google.com/search?q=learning+nodejs";

// URL Object.
const urlObj = new URL(urlString);
console.log(urlObj);

// Let's say you only want specific information, in this case, just the pathname.
const urlObj2 = new URL(urlString);
console.log(urlObj2.pathname);

// format(): takes object and turns it into a string.
console.log(url.format(urlObj));

// import.meta.url: gives the file an URL
console.log(import.meta.url);

// fileURLToPath(): file url is turned into a path
console.log(url.fileURLToPath(import.meta.url));

// Let's say you only want specific information, in this case, just the search query.
console.log(urlObj.search);

// URLSearchParams
// To retrieve a single value, you use get() method as shown below:
// Since dot notation wouldn't work in this situation.
const params = new URLSearchParams(urlObj.search);
console.log(params.get("q")); //this log returns a string.
params.append("limit", "5");
params.delete("limit");
console.log(params); // returns object appended to the get("q") method
