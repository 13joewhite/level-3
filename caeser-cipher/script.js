const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//split message into an array
let messageArr = []

messageArr = input.split("")

let newMessageArr = []
// loop around and find the index of each of the letters in the message
for(i = 0; i < messageArr.length; i++) {
    const index = alphabet.indexOf(messageArr[i])

    if(index !== -1) {
        // if it exists in the alphabet than do the logic
        let newNumber = index + shift
        // newNumber = 11.
        if(newNumber > 25) { 
            newNumber = newNumber - 26
        } 
        // if statement that says if any number is greater than 25 than you need to - 26
        newMessageArr.push(alphabet[newNumber])
    } else {
        // else just push the item.  ie: space, exclamation point, whatever, etc.
        newMessageArr.push(messageArr[i])
    }
}

const finalMessage = newMessageArr.join('')

console.log(finalMessage)
// ex: v = 21
//indexOf()

// 21 + 11
// equals more than 26 than I need to minus 26


// push alphabet into new array

// 

























// let originalMessage = "abcdefg";
// let shift = 1;

// function startEncryption() {
//   let encryptedMessage = ""

//   for (letter of originalMessage) {
//       encryptedMessage += shiftLetter(letter, shift)
//   }

//   console.log(encryptedMessage)
// }
// startEncryption();

// function shiftLetter(letter, shift) {
//     let newLetter = ""

//     let letterCode = letter.charCodeAt(0)
//     let newLetterCode = letterCode + shift

//     if (newLetterCode < 97) {
//         newLetterCode += 26
//     } else if (newLetterCode > 122) {
//         newLetterCode -= 25
//     }

//     newLetter = String.fromCharCode(newLetterCode)

//     return newLetter
// }