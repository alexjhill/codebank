function caesarEncypher() {

    // Gets textarea elements
    var englishTextarea = document.getElementById("english-textarea");
    var caesarTextarea = document.getElementById("caesar-textarea");
    var rotValue = parseInt(document.getElementById("rot-value").value);

    // Gets textarea values
    var englishValue = englishTextarea.value;
    var caesarValue = caesarTextarea.value;

    // Creates variable to output with
    var outputString = "";


    // For loop loops through all characters in the input string
    for (var i = 0; i < englishValue.length; i++) {

        // Temporary object to store each character value in
        var tempCharCode = englishValue.charCodeAt(i);

        // Checks if character is uppercase A-Z
        if (tempCharCode >= 65 && tempCharCode <= 90) {

            // If the character becomes out of range, ouput loops around the alphabet
            if (tempCharCode + rotValue > 90) {
                var difference = (tempCharCode + rotValue) - 90;
                tempCharCode = 64 + difference;
            }
            // If the character is within range, ouputs as normal
            else {
                tempCharCode = tempCharCode + rotValue;
            }
        }
        // Checks if character is lowercase a-z
        else if (tempCharCode >= 97 && tempCharCode <= 122) {

            // If the character becomes out of range, ouput loops around the alphabet
            if (tempCharCode + rotValue > 122) {
                var difference = (tempCharCode + rotValue) - 122;
                tempCharCode = 96 + difference;
            }
            // If the character is within range, ouputs as normal
            else {
                tempCharCode = tempCharCode + rotValue;
            }
        }

        // Adds translated character to output string
        outputString += String.fromCharCode(tempCharCode);
        
    }
    // Adds translated character to output string
    caesarTextarea.value = outputString;
}

function caesarDecypher() {

    // Gets textarea elements
    var englishTextarea = document.getElementById("english-textarea");
    var caesarTextarea = document.getElementById("caesar-textarea");
    var rotValue = parseInt(document.getElementById("rot-value").value);

    // Gets textarea values
    var englishValue = englishTextarea.value;
    var caesarValue = caesarTextarea.value;

    // Creates variable to output with
    var outputString = "";

    // For loop loops through all characters in the input string
    for (var i = 0; i < caesarValue.length; i++) {

        // Temporary object to store each character value in
        var tempCharCode = caesarValue.charCodeAt(i);

        // Checks if character is uppercase A-Z
        if (tempCharCode >= 65 && tempCharCode <= 90) {

            // If the character becomes out of range, ouput loops around the alphabet
            if (tempCharCode - rotValue < 65) {
                var difference = 65 - (tempCharCode - rotValue);
                tempCharCode = 90 - difference;
            }
            // If the character is within range, ouputs as normal
            else {
                tempCharCode = tempCharCode - rotValue;
            }

        }
        // Checks if character is lowercase a-z
        else if (tempCharCode >= 97 && tempCharCode <= 122) {

            // If the character becomes out of range, ouput loops around the alphabet
            if (tempCharCode - rotValue < 97) {
                var difference = 97 - (tempCharCode - rotValue);
                tempCharCode = 123 - difference;
            }
            // If the character is within range, ouputs as normal
            else {
                tempCharCode = tempCharCode - rotValue;
            }
        }

        // Adds translated character to output string
        outputString += String.fromCharCode(tempCharCode);
        
    }

    // Adds translated character to output string
    englishTextarea.value = outputString;
}


// Limits ROT value input to 0-25
function minmax(value, min, max) 
{

    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return min; 
    else if(parseInt(value) > max) 
        return max; 
    else return value;
}


















