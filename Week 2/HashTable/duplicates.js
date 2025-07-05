//Remove duplicates from a string using a hash table

function dup(str){
    let result=""
    let hashTable={}
    
    for(let value of str){
        if(!hashTable[value]){
            hashTable[value]=true
            result+=value
        }
    }
    return result
}

console.log(dup("hello"))