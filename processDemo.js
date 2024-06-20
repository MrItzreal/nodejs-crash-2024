/* What is the Process Object? 
This is a global object in Node.js that acts as a 
bridge between your JavaScript code and the underlying operating system 
and runtime environment. It provides information about and control over 
the current Node.js process.

Process Object module does not need to be imported 
since is already in the system globally.
*/

// argv property:  Access command-line arguments passed to your script.
console.log(process.argv);
console.log(process.argv[3]);

// process.env: Get environment variables (like USERNAME) that can be used to configure your application.
console.log(process.env.USERNAME);

// pid: Retrieve the unique Process ID of your running Node.js process.
console.log(process.pid);

// cwd(): this function gives current working directory where the script is executing.
console.log(process.cwd());

// title: string that represents the title of the Node js process (can be useful for debugging).
console.log(process.title);

// memoryUsage(): Monitor memory usage by your Node.js application.
console.log(process.memoryUsage());

// uptime(): time spent from when you run a command to the script execution
console.log(process.uptime());

// You can also use .on() listens for events in this case "exit"
// Registers a callback to be executed just before the process exits.
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// exit(): Terminate the current Node.js process with an optional exit code (0 = success, non-zero = errors).
process.exit(0);
console.log("Hello from after exit"); //this log does not appear because it exits the process.


