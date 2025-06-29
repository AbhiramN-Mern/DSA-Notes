let array=[1,2,3,4,5,6]
function t(arr){
let first=-Infinity
let second=-Infinity
let third=-Infinity
for(let i=0;i<array.lenght;i++){
    if(array[i]>first){
        first=array[i]
        second=first
        third=second
    }
    if(large>array[i]&&second!=arr[i]){
        second=arr[i]
        third=second
    }
    return third
}
}
console.log(t(array))




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    addFirst(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    removemid(){
        let current=this.head
        let slow=this.head
        let fast=this.head
        while(fast&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        // if(fast.next){
            slow.next=slow.next.next
        // }
        
    }
    print(){
        let current=this.head
        let str=""
        while(current){
            str=`${current.value}->`
            current=current.next
        }
        console.log(str+"NULL")
    }
}
let list=new LinkedList
list.addFirst(10)
list.addFirst(20)
list.addFirst(30)
list.addFirst(40)
list.removemid()
list.print()


















function binary(arr,target,left=0,right=arr.length-1){
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }else if(right<mid){
            return binary(array,target,mid+1,right)
        }else{
            return binary(array,target,left+1,mid)
        }
    }
}

let array=[5,10,15,20,25]
console.log(binary(array,20))















function feb(limit,a=0,b=1){
while(a<=limit){
    console.log(a)
    return feb(limit,a+b)
}
}
console.log(feb(5))














function factrial(n){
    if(n==0)return 0
    if(n==1)return 1
    return factrial(n-2)*factrial(n-1)
}
console.log(factrial(5))