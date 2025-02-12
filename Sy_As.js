const fs = require("node:fs");

// fs.readFileSync() is blocking
const data = fs.readFileSync("file.md"); // blocks here until file is read
console.log(data);

console.log("File read completed successfully with readFileSync");

// fs.readFile() is non-blocking
fs.readFile("file.md", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("File read completed with fs.readFile()");
