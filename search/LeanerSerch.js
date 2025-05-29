function LeanerSerch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
}
let array=[7,8,9,10]
let target=10
console.log(LeanerSerch(array,target))


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([10, 20, 30, 40], 30))

function findFirstVowel(str) {
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) return str[i];
  }
  return null;
}
console.log(findFirstVowel("bhrm")); 

const users = [{id: 1}, {id: 2}, {id: 3}];
function findUser(id) {
  for (let user of users) {
    if (user.id === id) return user;
  }
  return null;
}
console.log(findUser(2)); 