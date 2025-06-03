function removeL(str){
    if(str.length==0)return ""
    
    let firstChar=str[0]=="L" ? "":str[0]
    return firstChar+removeL(str.slice(1))
}
const result=removeL('HELLO WORLD')
console.log(result)