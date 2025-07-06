class HashTable{
    constructor(size=10){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1]=value
                return 
            }
        }
        this.table[index].push([key,value])
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        
        if(bucket){
        for(let pair of bucket){
            if(pair[0]==key){
                return  pair[1]
            }
        }     
        }
        return false
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        
        if(bucket){
            for(let i=0;i<bucket.length;i++){
                if(bucket[i][0]==key){
                    bucket.splice(i,1)
                    return true
                }
            }
        }
        return false
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let ht=new HashTable()

ht.set("name","abhiram")
ht.set("name","akhil")

ht.set(18,"age")
// console.log(ht.get(18)); // Abhiram
ht.display()




    