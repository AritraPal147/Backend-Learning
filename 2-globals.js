// GLOBAL VARIABLES - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - infor about env where the program is being executed

console.log(__dirname)
console.log(__filename)

// Prints "Hello World" in 1 second intervals
setInterval(() => {
    console.log("Hello World")
}, 1000)