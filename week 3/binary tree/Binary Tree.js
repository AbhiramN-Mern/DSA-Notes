class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    addRoot(value){
        this.root=new Node(value)
    }
    addLeft(parent,value){
        parent.left=new Node(value)
    }
    addRight(parent,value){
        parent.right=new Node(value )
    }
    preOrder(node){
        if(node==null)return
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    hight(node=this.root){
        if(node==null)return -1
        let lefthight=this.hight(node.left)
        let rightheight=this.hight(node.right)
        return Math.max(lefthight,rightheight)+1
    }
    depth(node,current=this.root,level=0){
        if(current==null)return-1
        if(current==node)return level
        let leftdepth=this.depth(node,current.left,level+1)
        if(leftdepth!=-1)return leftdepth
        return this.depth(node(node,current.right,level+1))
    }
    degree(node){
        if(!node)return -1
        let degree=0
        if(node.left)degree++
        if(node.right)degree++
        return degree
    }
    iscomplete(node){
        if(!node)return true
        let queue=[node]
        let seenNull=false
        while(queue.length>0){
            let node=queue.shift()
            if(node==null){
                seenNull=true
            }else{
                if(seenNull)return false
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        return true
    }
    isFull(node=this.root){
        if(node==null)return true
        if(!node.left&&!node.right)return true
        if(node.left&&node.right){
            return this.isFull(node.left)&&this.isFull(node.right)
        }
        return false
    }
    isPerfect(node=this.root,depth=null,level=0){
        if(node==null)return true
        if(depth==null)depth=this.hight(this.root)
        if(!node.left&&!node.right)return depth==level
        if(!node.left||!node.right)return false
        return this.isPerfect(node.left,depth,level+1)&&
        this.isPerfect(node.right,depth,level+1)
    }
    
    inOrder(node = this.root) {
    if (node == null) return
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
    }
    preOrder(node = this.root) {
        if (node == null) return
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node = this.root) {
        if (node == null) return
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
    }

}
const bt=new BinaryTree()
 bt.addRoot(1)
 bt.addLeft(bt.root, 2)
 bt.addRight(bt.root, 3)
 bt.addLeft(bt.root.left, 455) 
 bt.addRight(bt.root.left, 16)
 bt.preOrder(bt.root)
 
 console.log("height is "+bt.hight())
  console.log("depth is "+bt.depth(bt.root.left.left))
    console.log("degree is "+bt.degree(bt.root.right))
    console.log("iscomplete is "+bt.iscomplete(bt.root))
    console.log("iscomplete is "+bt.isFull())