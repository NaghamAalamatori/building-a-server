// Access the command-line arguments using 'process.argv' (an array of strings)
// The first element (index 0) is the node executable path, the second (index 1) is the path of the script,
// and any additional arguments passed to the script will follow.
console.log(process.argv);  // Outputs all command-line arguments as an array

// Access the third argument passed from the command line (index 3)
console.log(process.argv[3]);  // Outputs the third argument if available

// Access environment variables using 'process.env'.
// 'LOGNAME' (used on Unix-based systems) is an environment variable that contains the current logged-in username.
// On Windows, this may be replaced with 'USERNAME'.
console.log(process.env.LOGNAME);  // Outputs the username (on Unix systems) or undefined on other systems

// Get the current process ID using 'process.pid'
console.log(process.pid);  // Outputs the process ID of the current Node.js process

// Get the current working directory using 'process.cwd()'
console.log(process.cwd());  // Outputs the directory from where the Node.js process was started

// Get the title of the current process (default is 'node' unless changed)
console.log(process.title);  // Outputs the title of the process (typically 'node')

// Get memory usage statistics of the current process using 'process.memoryUsage()'
// It returns an object with details like heapUsed, heapTotal, rss, etc.
console.log(process.memoryUsage());  // Outputs an object containing memory usage statistics

// Get the uptime of the current process in seconds using 'process.uptime()'
console.log(process.uptime());  // Outputs the number of seconds the Node.js process has been running

// Register an event listener for the 'exit' event.
// This event is emitted when the process is about to exit. It can be used to run cleanup code.
// The 'code' argument represents the exit code (0 for successful exit).
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);  // Outputs the exit code when the process is about to exit
});

// Exit the process using 'process.exit()'.
// Exit code 0 means a successful exit. Non-zero codes indicate failure.
process.exit(0);  // Exits the process with a status code of 0 (success)

// This line will not run because 'process.exit()' terminates the Node.js process immediately.
console.log('Hello from after exit');  // This won't be executed
