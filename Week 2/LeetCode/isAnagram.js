
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false
    let map1={}
    let map2={}
    for(let value of s){
        if(map1[value]){
            map1[value]++
        }else{
            map1[value]=1
        }
    }
    for(let value of t){
        if(map2[value]){
            map2[value]++
        }else{
            map2[value]=1
        }
    }
    for(let value in map1){
        if(map1[value]!=map2[value]) return false
    }
    return true
};