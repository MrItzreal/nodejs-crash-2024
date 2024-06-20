import { EventEmitter } from "events";

// Emitter Instance
const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodbyeHandler(name) {
  console.log("Goodbye " + name);
}

// Register event listeners
// .on listens for events in this case "greet" & "goodbye"
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "Pokemon");
myEmitter.emit("goodbye", "Pokemon");

// Error handling event
myEmitter.on("error", (err) => {
  console.log("An Error Occured:", err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong fam!"));

// NOTES:
/* EventEmitter: provides a way for objects (emitters) to communicate with other parts 
of your code by generating named events. You can create and emit custom made events 
and listen to them. It also has built-in events that you can listen to (e.g., http, fs, stream) 
already use EventEmitter. 
*/

// Key Methods:
/*on(eventName, listener): Registers a function (listener) to be called 
when the specified eventName is emitted.

emit(eventName, ...args): Triggers the eventName and passes any additional arguments (...args)
to the registered listeners.

once(eventName, listener): Similar to on(), but the listener is called once and then removed.
*/

/* 
You can also pass data, for example, the (name) param within the
greetHandler/goodbyeHandler functions. I was able to pass the name "Pokemon".
*/
