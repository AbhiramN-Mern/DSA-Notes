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
            word = "";                              
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


//largest string

let str="Hello Iam Abhiram from ksd"
let largest=""
let s=str.split(' ')
console.log(s)
for(let i=0;i<s.length;i++){
    if(largest.length<s[i].length){
        largest=s[i]
    }
}
console.log(largest)

//anagram
function anagram(str1, str2) {

    let s1 = str1.split('').sort().join('')
    let s2 = str2.split('').sort().join('')
    return s1 === s2
}
console.log(anagram('abhiram', 'kasargod'))

//extract num From String


function extract(str) {

   let result = ''

   for(let value of str) {
    if(isNaN(value)) {
        result+=value
    }
   }
   return result
}
console.log(extract([1,2,3,4,'a', 'b'])) 

//titleCase

function titleCase(str) {

  let result = []
  let words = str.split(' ')

  for(let word of words) {

    let first = word.charAt(0).toUpperCase()
    let rest = word.slice(1).toLowerCase()

    result.push(first + rest)
  }
  return result.join(' ')
}

console.log(titleCase('abhi ram'))


// Convert "APPLE" to "A-pp-ppp-llll-eeeee"

let str1="apple"
function convert(string){
let arr=str.split('')
let result=[]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<=i;j++){
        result.push(arr[i])
    }
    result.push("-")
}
 return result.join("")
}
console.log(convert(str1))