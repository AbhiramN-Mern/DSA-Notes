// function binary(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(target==arr[mid]){
//             return mid
//         } 
//         if(target<arr[mid]){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return "NULL"

// }
// //3. Implement Binary Search and replace found number with 0.
// function binary(arr,tar){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let mid=Math.floor((left+right)/2)
//         if(tar==arr[mid]){
//              arr[mid]=0
//              return mid
//         }
//         if(left<tar){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
// }
// let array=[5,10,15,20]
// console.log(binary(array,15))
// console.log(array)


// //4. Find min in rotated sorted array (Binary Search).
// function binary(arr){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]>arr[right]){
//             left=mid+1
//         }else{
//             right=mid
//         }
        
//     }
//     return arr[left]
// }
// let array=[4,5,6,7,8,1,2]
// console.log(binary(array))


// // 7. Binary search on array of strings.
// function binary(arr,tar){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let mid=Math.floor((left+right)/2)
//         if(tar==arr[mid]){
//              return mid
//         }
//         if(left<tar){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
// }
// let arr = ["apple", "banana", "cherry", "grape", "orange"];
// let target = "cherry";


// console.log(binary(array,target))

// //8. Reverse array; compare complexity of linear vs binary search.
// let array=[1,2,3,4,5]

// function reverse(arr){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]]
//         left++
//         right--
//     }
//     console.log(arr)
// }
// reverse(array)


// // 10. Remove middle element from linked list.
//   removeMiddle(){
//         let slow=this.head
//         let fast=this.head
//         let prev=null
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//         prev.next=slow.next
//     }

//     // 11. Find middle of linked list.
//         middle(){
//         let slow=this.head
//         let fast=this.head
//         while(fast&&fast.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//     return slow.value
//     }

//     // 12. Delete 2nd element from end of Linked List.
   
//     removeAT2(){
//         if(!this.head&&!this.head.next){
//             console.log("node is not enof")
//             return
//         }
//         let slow=this.head
//         let fast=this.head
//         for(let i=0;i<2;i++){
//             fast=fast.next
//         }
//         while(fast.next){
//             fast=fast.next
//             slow=slow.next
//         }
//         if(slow.next){
//             slow.next=slow.next.next
//         }
//     }

// //13. Remove duplicates in Linked List (no extra space).
//         dupicates(){
//         let current=this.head
//         while(current!=null){
//             let runner=current
//             while(runner.next!=null){
//                 if(runner.next.value==current.value){
//                     runner.next=runner.next.next
//                 }else{
//                     runner=runner.next
//                 }
//             }
//           current=current.next  
//         }
//     }
//     //14. Delete K-th node from end of Linked List.

//      kth(k){
//         let current=this.head
//         let slow=this.head
//         let fast=this.head
//         for(let i=0;i<k;i++){
//             fast=fast.next
//         }
//         while(fast.next){
//         slow=slow.next
//         fast=fast.next
//         }
//         if(slow.next){
//             slow.next=slow.next.next
//         }
//     }

//     // 16. Implement append & prepend operations in list.
//     addLast(value){
//         let node=new Node(value)
//         let current=this.head
//         if(!this.head){
//             this.head=node
//         }else{
//             while(current.next){
//                 current=current.next
//                 }
//                 current.next=node
//         }
//     }
// //17. Delete element from specific position in linked list.
//     removeAt(index) {
//     if (index < 0 || index >= this.size()) {
//       console.error("Invalid Index");
//       return;
//     }

//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     if (current.next) {
//       current.next = current.next.next;
//     }
//   }

// //18. Reverse a linked list.
//     reverce(){
//         let current=this.head
//         let prev=null
//         while(current){
//             let nextnode=current.next
//             current.next=prev
//             prev=current
//             current=nextnode
//         }
//         this.head=prev
//     }

//     //convert array to Liked LIst
//      arTOll(arr){
//         for(let value of arr){
//             this.addLast(value)
//         }
//     }
// //26. Palindrome check using linked list.
//       palindome(){
//        let str1=""
//        let str2=""
//        let current=this.head
//        while(current){
//            str1=`${current.value}${str1}`
//            str2=`${str2}${current.value}`
//            current=current.next
//        }
//        return str1==str2
//    }

//    //34. Implement delete function in Doubly Linked List.
//      delete(index){
//         let current=this.head
//         for(let i=0;i<index;i++){
//             current=current.next
//         }
//         current.prev.next=current.next
//         current.next.prev=current.prev    
//         }
    
//     // 36. Delete by value in doubly linked list.
//           removeAt(value){
//         let current=this.head
//         while(current.value!=value){
//             current=current.next
//         }
//         current.prev.next=current.next
//         current.next.prev=current.prev
        
//     }
//     // 37. Reverse print a doubly linked list.
//       reverse(){
//       let current=this.head
//       let prev=null
//       while(current){
//           let nextnode=current.next
//           current.next=prev
//           current.prev=nextnode
//           prev=current
//           current=nextnode  
//       }
//         [this.head,this.tail]=[this.tail,this.head]
//       }
        
    
//     // ----------------------------------------------------------------------------------------------------------------------------------
//     //48. Palindrome using recursion.
//     function palindram(str){
//     function helper(left,right){
//         if(left>=right)return true
//         if(str[left]!=str[right])return false
//         return helper(left+1,right-1)
//     }
//     return helper(0,str.length-1)
     
// }
// console.log(palindram("hello"))

// // 49. Find sum, largest etc. using recursion.
// function sum(arr,index=0){
//     if(arr.length==index)return 0
//     return arr[index]+sum(arr,index+1)
// }
// console.log(sum([1,2,3,4,5]))
// //largest
// function largest(arr,index=0,large=-Infinity,second=-Infinity){
//     if(index==arr.length)return second
//         let current=arr[index]
//         if(current>=large){
//                 return largest(arr,index+1,current,large)
//         }else if(current>second&&current!=large){
//             return largest(arr,index+1,large,current)
//         }else{
//             return largest(arr,index+1,large,second)
//         }
// }
// console.log(largest([1,4,3,6,7,5]))

// //51. Reverse string using recursion.
// let str="hello World"
// function reverseWord(str, index = 0) {
//   if (index == str.length) return '';
//   return reverseWord(str, index + 1) + str[index];
// }
// console.log(reverseWord(str))

// //52. Remove character from string using recursion.
// function removeChar(str, target, index = 0) {
//   if (index === str.length) return "";

//   const currentChar = str[index] === target ? "" : str[index];
//   return currentChar + removeChar(str, target, index + 1);
// }


// //54. Find sum of even numbers using recursion.
// let array=[1,2,3,4,5,6,7,8]
// function sumEven(arr,index=0){
//   if(arr.length==index)return 0
//     const iseven=arr[index]%2==0?arr[index]:0
//     return iseven+sumEven(arr,index+1)
// }
// console.log(sumEven(array))

// // 58. Recursively remove duplicates.
// function removeDuplicates(str, index = 0, seen = new Set()) {
//   if (index === str.length) return "";

//   const currentChar = str[index];
//   if (seen.has(currentChar)) {
//     return removeDuplicates(str, index + 1, seen);
//   } else {
//     seen.add(currentChar);
//     return currentChar + removeDuplicates(str, index + 1, seen);
//   }
// }

// //fibinochi
// function fibinochi(n){
//     if(n==0)return 0
//     if(n==1)return 1
//     return fibinochi(n-1)+fibinochi(n-2)
// }
// console.log(fibinochi(5))

// // 55. Recursively print Fibonacci series up to limit.
// function limitrec(limit,a=0,b=1){
//     if(a>limit)return
//         console.log(a)
//         return limitrec(limit,b,a+b)
    
// }
// limitrec(5)

