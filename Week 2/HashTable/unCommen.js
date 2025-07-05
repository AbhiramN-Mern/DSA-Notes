// Find uncommon elements from two different arrays using a hash table

function uncommen(arr1,arr2){
    let hashMap={}
    let map1={}
    let map2={}
    for(let value of arr1){
        map1[value]=true
    }
    for(let value of arr2){
        map2[value]=true
    }
    let result=[]
    for(let value of arr1){
        if(!map2[value]&&!result.includes(value)){
            result.push(Number(value))
        }
        
    }
     for(let value of arr2){
        if(!map2[value]&&!result.includes(value)){
            result.push(Number(value))
        }
        
    }
    return result
}


    console.log(uncommen([1,2,3,4,4],[2,5,6,7,8]))
