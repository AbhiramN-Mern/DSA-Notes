// Count frequency of characters in a string using a hash table

function freequncy(str){
    let hashmap={}
    for(let value of str){
        if(hashmap[value]){
            hashmap[value]++
        }else{
            hashmap[value]=1
        }
    }
    return hashmap
}
console.log(freequncy("hello"))