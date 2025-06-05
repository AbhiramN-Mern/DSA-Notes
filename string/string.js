function removeL(str){
    if(str.length==0)return ""
    
    let firstChar=str[0]=="L" ? "":str[0]
    return firstChar+removeL(str.slice(1))
}
const result=removeL('HELLO WORLD')
console.log(result)


function reverseWords(str) {
    let result = "";
    let word = "";

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            // Reverse the collected word
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            // Add space if not at the end
            if (i !== str.length) result += " ";
            word = ""; // Reset word
        } else {
            word += str[i];
        }
    }

    return result;
}

// Example:
let input = "HELLO WORLD";
console.log(reverseWords(input)); // "OLLEH DLROW"



function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("HELLO")); // Output: "OLLEH"
