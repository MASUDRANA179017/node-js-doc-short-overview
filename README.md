// CJS (CommonJS) and MJS (ECMAScript Modules)



# Getting Started
---
  * Introduction to Node.js:
---
  ** Node.js is a runtime environment that allows you to run JavaScript code outside the browser. It’s built on the V8 JavaScript engine and enables the development of server-side applications.
  
  It's known for its non-blocking, event-driven architecture which makes it ideal for I/O-heavy applications like web servers.
  **


  * How Much JavaScript Do You Need to Know to Use Node.js?
---
  A solid understanding of JavaScript fundamentals (variables, functions, loops, objects, etc.) is essential.
  Additionally, concepts like asynchronous programming (callbacks, promises), error handling, and ES6 features like arrow functions and destructuring will be very helpful.
  
  * Differences Between Node.js and the Browser:
---
  Node.js: Primarily used for server-side applications. It has a built-in API to interact with the file system, network, and other system-level resources.
  Browser: Focuses on rendering web pages and has APIs for interacting with the DOM, CSS, etc.
  
  * The V8 JavaScript Engine:
---
  Node.js uses Google's V8 JavaScript engine to execute JavaScript code. It compiles JavaScript to machine code for faster execution.
  The V8 engine is optimized for performance and is used in both the Chrome browser and Node.js.

# Asynchronous Work
  ---
  * Asynchronous Flow Control:
---
  In Node.js, asynchronous programming allows tasks like reading from a file or querying a database to run without blocking the rest of the code. This improves performance for I/O-heavy tasks.
  
  * Overview of Blocking vs Non-Blocking:
---
  Blocking: A function that waits for a task to complete before returning control to the rest of the program (e.g., file reading in a synchronous manner).
  Non-Blocking: A function that initiates a task and moves on without waiting for it to finish, using callbacks, promises, or async/await.
  
  * JavaScript Asynchronous Programming and Callbacks:
---
  Callbacks are functions passed as arguments to other functions. When an asynchronous operation completes, the callback is executed.
  Example: fs.readFile('file.txt', callback). When the file is read, the callback function will be invoked with the file data.
  
  * The Node.js Event Loop:
---
  The event loop is the mechanism by which Node.js handles asynchronous tasks. It checks if there’s any task in the queue (like a callback function) and executes it.
  The event loop ensures non-blocking behavior by running asynchronous code in phases, such as timers, I/O events, and process callbacks.
  
  * The Node.js Event Emitter:
---
  The Event Emitter class allows objects to emit events and register listeners (callbacks). This is how many Node.js modules (like HTTP servers) handle asynchronous events.
  Example: const emitter = new EventEmitter(); emitter.on('event', callback);.
  
  * Don't Block the Event Loop:
---
  Node.js is designed to handle multiple requests simultaneously, but long-running operations (like CPU-intensive tasks) can block the event loop, slowing down the entire system.
  To prevent this, use asynchronous operations or offload tasks to worker threads.


# Asynchronous Work
  * Don't block
  * Example code for async operations

  
> **Asynchronous Flow Control** In Node.js, asynchronous programming allows tasks like reading from a file or querying a database to run without blocking the rest of the code. This improves performance for I/O-heavy tasks.

---


```COPY
// JavaScript async operations

console.log("Start Operation");

function sleep(ms) {
  console.log("operation is running");
  return new Promise((resolve) => setTimeout(() => {
    console.log("operation is done!");
    resolve();
  }, ms));
}

async function run() {
  await sleep(1000);
  console.log("do something else...");
}

run();


```


---

  ![Image Alt](https://github.com/MASUDRANA179017/node-js-doc-short-overview/blob/main/DOCUMENTSS/Screenshot_8.png?raw=true)



# More complex operations are made up of many functions:

  1. initiator style / input
  2. middleware
  3. terminator

** The "initiator style / input" is the first function in the sequence. This function will accept the original input, if any, for the operation. The operation is an executable series of functions, and the original input will primarily be:

 1. variables in a global environment
 2. direct invocation with or without arguments
 3. values obtained by file system or network requests


```Copy


  function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();

```


# State management
---
 * Functions may or may not be state dependent. State dependency arises when the input or other variable of a function relies on an outside function.

* In this way there are two primary strategies for state management:
 1. passing in variables directly to a function, and
 2. acquiring a variable value from a cache, session, file, database, network, or other outside source.


* You will be able to perform almost all of your operations with the following 3 patterns:

1. **In series:** functions will be executed in a strict sequential order, this one is most similar to for loops.
2. **Full parallel:** when ordering is not an issue, such as emailing a list of 1,000,000 email recipients.
3. **Limited parallel:** parallel with limit, such as successfully emailing 1,000,000 recipients from a list of 10 million users.


## All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.

**Blocking methods execute synchronously and non-blocking methods execute asynchronously.**


> **Asynchronous Flow Control** synchronous and asynchronous file read. **Sy_As.js ** run this code

```code
const fs = require('node:fs');

// fs.readFileSync() is blocking
const data = fs.readFileSync('file.md'); // blocks here until file is read
console.log(data);


// fs.readFile() is non-blocking
fs.readFile('file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});


```


**concurrency is the ability to run multiple tasks at once, while throughput is the rate of data transmitted or requests processed. **

### Concurrency 
  The ability to run multiple tasks at once
  Involves sharing resources and managing interactions
  Can improve responsiveness, throughput, and scalability
  Can be implemented using threads and processes
  Can be calculated by counting the number of active connections or threads processing requests
  
## Throughput
  The rate of data transmitted over a communication channel 
  Can be measured in ops/sec, bytes/sec, MB/sec, or GB/sec 
  Can be measured as transactions per second (TPS) or requests per second (RPS) 
  Can be improved by lowering latency and increasing concurrency 

Concurrency and throughput are related by Little's Law, which states that throughput = concurrency / latency. 
  
Concurrency and throughput are important in many areas of computing, including: 
  
Operating systems, Distributed systems, Parallel computing, Database systems, Web applications, and Cloud computing.