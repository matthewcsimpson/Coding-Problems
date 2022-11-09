// 2022-11-04

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let words = str.split(" ");
  let newStr = [];

  for (let i = 0; i < words.length; i++) {
    let first = words[i].slice(0, 1);
    let remainder = words[i].slice(1);
    newStr.push(remainder + first + "ay");
  }

  return newStr.join(" ");
}

console.log(pigIt("hello world"));
