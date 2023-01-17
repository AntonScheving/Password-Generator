// Array of special characters to be included in password
// I choose to use the const variable because the characters do not change.
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// The '= 0;' initialises the variables to zero.
let characterLength = 0;
let characterLengthPrompt = 0;
// This variable is used to store the characters chosen by the user for the password. It is initialized as an empty array and will be filled later in the code.
let promptChoices = [];
let passwordLength = 0;

// this is a function to prompt user for password options.
function getPasswordOptions() {
  // parseInt makes the input value a number.
  // the values derived from the prompts are stored inside the characterLenghtPrompt variable.
  characterLengthPrompt = parseInt(prompt('How many characters do you want in your password? Please choose a number between 10 and 64'));
// The 'while' statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement. As long as the characterLengthPrompt variable is not returning as null, meaning the user has not clicked on the cancel button the function can go ahead.
  while (characterLengthPrompt !== null) {
    // if the user inputs a number below 10 or above 64 or any other caracter that is not a number the below message will be displayed.
  if (isNaN(characterLengthPrompt) || characterLengthPrompt < 10 || characterLengthPrompt > 64) {
    characterLengthPrompt = parseInt(prompt("Ooops, it looks like you entered an invalid number or letter. Please enter a number between 10 and 64 to choose the length of your password."));
    // The 'else' statement is used to specify if the statement above is false then it will go ahead and execute the code below it. The 'break' statement breaks out of the loop and continues executing the code after the loop.
  } else{
    break;
  }
}

// The 'confirm()' method displays a dialog box with a message, an OK button, and a Cancel button.
if (confirm("Do you want to include special characters in your password?")) {
  // the 'promptChoices' variable is initialised to nothing when it is declared. The = adds the true or false value from the user input in the confirm window as the user clicks either cancel(false) or ok(true) stored in the promptChoices. If the promptChoice variable becomes true the 'concat' combines the character type with the 'promptChoices' variable.
  if (confirm){
  promptChoices = promptChoices.concat(specialCharacters)
}
}

if (confirm("Do you want to include numbers in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(numericCharacters)
}
}

if (confirm("Do you want to include lowercase letters in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(lowerCasedCharacters)
}
}

if (confirm("Do you want to include uppercase letters in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(upperCasedCharacters)
}
}
// If the user chooses to click cancel on all the confirm windows the following message will be displayed and the user has to start again.
if (promptChoices.length === 0) {
  alert("Ooops, you must choose at least one character type. Please try again.");
}
// When the function has reached the end it will return the results. The return statement is used to return a particular value from the function to the function caller. The function will stop executing when the return statement is called.
return;
};

// Randomised characters
// After the 'promptChoices' variable has been populated with the character types that the user wants to include in the password in the above function the 'math.random()' element randomises wich characters are used in the password. 'Math.floor' always rounds down and returns the largest integer less than or equal to a given number. '* promptChoices.length' ensures that the randomised characters are taken from the chosen pool of character types chosen by the user in the confirm windows.
function getRandom() {
  return promptChoices[Math.floor(Math.random() * promptChoices.length)];
}

// Function to generate password with user input
function generatePassword() {
  // Here is where the function 'getPasswordOptions' is connected to the function 'generatePassword'. 'getPasswordOptions()' function is called to execute and gather the user's input for the password length and character choices in the 'generatePassword' function.
  getPasswordOptions();

  // displayPassword is declared and assigned a empty string value.
  let displayPassword = ""
// A for loop is used to generate the password. The loop will run for as many iterations as the value of the 'characterLengthPrompt' variable, which is the length of the password entered by the user.
  for (let i = 0; i < characterLengthPrompt; i++) {
// The += operator adds the random caracters in 'getRandom' to 'displayPassword'.
    displayPassword += getRandom();
  }
  // The final password is returned
  return displayPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


