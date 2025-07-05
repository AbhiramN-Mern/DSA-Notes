// Find the first non-repeating character in a string using a hash table

function freequncy(str){
    let hashmap={}
    for(let value of str){
        if(hashmap[value]){
            hashmap[value]++
        }else{
            hashmap[value]=1
        }
    }
    for(let char of str){
        if(hashmap[char]==1){
            return char
        }
    }
    return null
}
console.log(freequncy("abhiram"))