

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
])

const converter = ()=> {
    const newNumberArray =  new Array(process.argv.length-2);

    for(var i = 2; i < process.argv.length; i++){

        const currentNumber = process.argv[i];
        let currentNumberString = "";

        for(var j = 0; j < currentNumber.length; j++){

            const currentCharacterNumber = currentNumber.charAt(j);
            const currentCharacterString = numberMap.get(currentCharacterNumber);
            
            currentNumberString = currentNumberString.concat(currentCharacterString);
        }
        
        newNumberArray[i-2] = currentNumberString;
    };

    return newNumberArray.toString();
    
};

console.log(converter());



