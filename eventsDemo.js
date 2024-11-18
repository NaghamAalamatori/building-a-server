// Import the EventEmitter class from the 'events' module in Node.js
import { EventEmitter } from 'events';

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a handler function for the 'greet' event
function greetHandler(name) {
  console.log('Hello ' + name);  // Logs a greeting message with the provided name
}

// Define a handler function for the 'goodbye' event
function goodbyeHandler(name) {
  console.log('Goodbye ' + name);  // Logs a farewell message with the provided name
}

// Register event listeners (handlers) for the 'greet' and 'goodbye' events
myEmitter.on('greet', greetHandler);   // Listens for the 'greet' event and calls greetHandler when triggered
myEmitter.on('goodbye', goodbyeHandler);  // Listens for the 'goodbye' event and calls goodbyeHandler when triggered

// Emit the 'greet' event and pass 'John' as the argument to the handler function
myEmitter.emit('greet', 'John');  // Outputs: "Hello John"

// Emit the 'goodbye' event with 'John' as the argument
myEmitter.emit('goodbye', 'John');  // Outputs: "Goodbye John"

// Register an event listener for the 'error' event, which handles errors
myEmitter.on('error', (err) => {
  console.log('An Error Occured:', err);  // Logs the error message when an 'error' event is emitted
});

// Simulate an error by emitting the 'error' event and passing an Error object as an argument
myEmitter.emit('error', new Error('Something went wrong'));  // Outputs: "An Error Occured: Error: Something went wrong"
