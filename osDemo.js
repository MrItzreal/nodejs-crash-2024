import os from "os";

/*The `os` module provides utility methods and properties for interacting with 
the operating system, including information about your system's memory, CPU, and network interfaces. 
This is helpful when building applications that need to access or manage system resources.
*/

// userInfo()
console.log(os.userInfo());

// Let's say you only want specific information, in this case, just the username.
console.log(os.userInfo().username);

// The methods below have to do with memory which are calculated in bites.
// totalmem()
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

// cpus()
console.log(os.cpus());
