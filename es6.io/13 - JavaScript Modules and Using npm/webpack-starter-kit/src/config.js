// This is where we put all our API calls so that all requests are automated 
// Whenever we want to move files between modules, you always have to remember to export the file 

// this is a named export, and its name must match the import statement 
export const apiKey = 'abc123';

export const url = 'https://byteacademy.co/'

//export default allows you to import a module in whatever name you desire 
// you may only have one export defauly per file, but you may have multiple export named functions in a file 
// export default apiKey;


// now lets export a function
export function sayHi (name) {
    console.log(`Hello there ${name}`)
}

// alternative way of exporting multiple variables 

const age = 100;
const dog = 'Oswald'

export { age, dog }