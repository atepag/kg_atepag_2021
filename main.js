const Converter = require("./converter.js");
//Importing the object class to be used with the input from the command line once the file is run
const myConverter = new Converter(process.argv);

//Printing out to the console with stdout
console.log(myConverter.convert());



