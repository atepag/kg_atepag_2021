//This will be the input passed on the command line(numbers)
let commandLineInput;
//A map to relate the number to its string value
const numberMap = new Map([
    ["0","Zero"],
    ["1","One"],
    ["2","Two"],
    ["3","Three"],
    ["4","Four"],
    ["5","Five"],
    ["6","Six"],
    ["7","Seven"],
    ["8","Eight"],
    ["9","Nine"],
]);

//Object to create a converter of array
class Converter {
    
    //Constructor to initialize the instance of the object with the input given
    constructor(commandLineInput){
        this.commandLineInput = commandLineInput;
    }
    
    //Method to convert the array of number into array of strings
    convert() {
        //Array to be returned, items will be pushed as they are valid numbers
        const newNumberArray =  new Array();
        
        //To iterate through the object (command line input - numbers)
        for (const property in this.commandLineInput) {
            //This if states will check to make sure the input is a valid number thus avoid any file paths or other possible wrong input
            if(!isNaN(this.commandLineInput[property])){
                
                const currentNumber = this.commandLineInput[property];  //Current Number working on
                let currentNumberString = "";   //String to be created out of the current number
                
                //For loop to iterate through each digit in the number and parse it to its string value
                for(var j = 0; j < currentNumber.length; j++){
        
                    const currentCharacterNumber = currentNumber.charAt(j);
                    const currentCharacterString = numberMap.get(currentCharacterNumber);
                    //Concatenates the current digit as a string into the value to be added to the output array
                    currentNumberString = currentNumberString.concat(currentCharacterString);
                }
                
                //Pushing the new value to the array
                newNumberArray.push(currentNumberString);
            }
        }
    
        return newNumberArray.toString();
        
    };

}

module.exports = Converter;