var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " "
];

var morseAlphabet = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
    "-----",
    "/"
];



function morseEncypher() {


    // Gets textarea elements
    var englishTextarea = document.getElementById("english-textarea");
    var morseTextarea = document.getElementById("morse-textarea");

    // Gets textarea values
    var englishValue = englishTextarea.value;
    var morseValue = morseTextarea.value;

    // Creates a variable to output with
    var outputString = "";


    // For loop loops through all characters in the input string
    for (var i = 0; i < englishValue.length; i++) {

        // Temporary object to store each character in
        var tempChar = englishValue.charAt(i).toLowerCase();

        // Checks alphabet array for character
        var arrayIndex = alphabet.indexOf(tempChar);

        // Validates character as being A-Z or 0-9
        if (morseAlphabet[arrayIndex] == null) {
            alert("Please only enter letters A-Z and numbers 0-9");
        } else {

            // Adds the translated character to the output string
            outputString += morseAlphabet[arrayIndex] + "  ";
        }
    }

    // Ouputs string
    morseTextarea.value = outputString;
}






function morseDecypher() {
    var englishTextarea = document.getElementById("english-textarea");
    var morseTextarea = document.getElementById("morse-textarea");

    var englishValue = englishTextarea.value;
    var morseValue = morseTextarea.value;
        morseValue = morseValue.split(/\//);

    var outputString = "";


    for (var i = 0; i < morseValue.length; i++) {
        var tempChar = morseValue[i];


        var arrayIndex = morseAlphabet.indexOf(tempChar);

        if (morseAlphabet[arrayIndex] == null) {
            console.log(tempChar);
            // alert("Please only enter valid Morse");
        } else {
            console.log(tempChar);
            outputString += alphabet[arrayIndex] + " ";
        }

    }

    englishTextarea.value = outputString;

}




















