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


/* 
1. Done: prompt the user for the password criteria
      a. set password lenght 10 to 64
      b.Lowercase, Uppercase, numbers & special characters
2. Validate the input
3. Generate password based on criteria
4. Display the password on the page. This is the return
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
*/

let characterLength = 0;
let characterLengthPrompt
let promptChoices = [];
let passwordLength = 0;

// Function to prompt user for password options

function getPasswordOptions() {
  // parseInt makes the input value a number
  characterLengthPrompt = parseInt(prompt('How many characters do you want in your password? Please choose a number between 10 and 64'));

  while(isNaN(characterLengthPrompt) || characterLengthPrompt < 10 || characterLengthPrompt > 64) {
    characterLengthPrompt = parseInt(prompt("Ooops, it looks like you entererd an invalid number or letter. Please enter a number between 10 and 64 to choose the length of your password."))
    // return False;
  } 


// if (characterLengthPrompt === null) {
//     console.log("Prompt closed by user.");
// }
// else {
//       break
//     }


  if (confirm("Do you want to include special characters in your password?")) {
    promptChoices = promptChoices.concat(specialCharacters)
  }

  if (confirm("Do you want to include numbers in your password?")) {
    promptChoices = promptChoices.concat(numericCharacters)
  }

  if (confirm("Do you want to include lowercase letters in your password?")) {
    promptChoices = promptChoices.concat(lowerCasedCharacters)
  }

  if (confirm("Do you want to include uppercase letters in your password?")) {
    promptChoices = promptChoices.concat(upperCasedCharacters)
  }

  if (promptChoices.length === 0) {
    alert("Ooops, You must choose at least one character type. Please try again.");
    // return false;
  }
  return
};


// Randomised characters

function getRandom() {
  // String.lowerCasedCharacters(Math.random());
  return promptChoices[Math.floor(Math.random() * promptChoices.length)];

}

// Do not touch

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


