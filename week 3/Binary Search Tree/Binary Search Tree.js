class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Bst{
    constructor(){
        this.root=null
}
    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
            return
        }else{
            let current =this.root
            while(true){
                if(node.value<current.value){
                    if(!current.left){
                        current.left=node
                        return
                    }
                    current=current.left    
                }else if(node.value>current.value){
                     if(!current.right){
                        current.right=node
                        return
                    }
                    current=current.right    
                }else{
                    return
                }
            }
            
        }
    }
    check(value){
       let current=this.root
       while(current){
       if(current.value==value)return true
       if(current.value>value){
           current=current.left
       }else{
           current=current.right
       }
    }
    return false
    }
    delete(value){
        this.root=this.deleterec(this.root,value)
    }
    deleterec(node,value){
        if(!node)return null
        if(value<node.value){
            node.left=this.deleterec(node.left,value)
        }else if(value>node.value){
            node.right=this.deleterec(node.right,value)
        }else {
            if(!node.left&&!node.right)return null
            if(!node.left)return node.right
            if(!node.right)return node.left
            
            let midRight=node.right
            while(midRight.left)midRIght=midRight.left
            node.value=midRight.value
            node.right=this.deleterec(node.right,minRight.value)
        }
        return node
    }
      preOrder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

let bs=new Bst()
bs.insert(100)
bs.insert(50)
bs.insert(40)
bs.insert(30)
bs.preOrder()
console.log('ok')
bs.delete(40)
bs.preOrder()

console.log(bs.check(410))
console.log(bs)
