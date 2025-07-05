
//Find the least occurred number using a hash table

function min(arr){
    let result=[]
    let hashTable={}
    for(let value of arr){
        if(hashTable[value]){
            hashTable[value]++
            }else{
                hashTable[value]=1
            }
    }
    let first=Infinity
    let final=null
    for(let value in hashTable){
        if(hashTable[value]<first){
            first=hashTable[value]
            final=Number(value)
        }
    }
    return final
}
console.log(min([10,20,30,10,30]))