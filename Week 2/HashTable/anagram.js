// Valid anagram with hash map (compare two dictionaries)

function anagram(str1,str2){
    let map1={}
    let map2={}
    if(str1.length!==str2.length)return false
    for(let value of str1){
        if(map1[value]==undefined){
            map1[value]=1
        }else{
            map1[value]++
        }
    }
    
    for(let value of str2){
        if(map2[value]==undefined){
            map2[value]=1
        }else{
            map2[value]++
        }
    }
    
    for(let value in map1){
        if(map1[value]!==map2[value]){
            return false
        }
    }
    return true
}
console.log(anagram("listen", "silent")); // true
