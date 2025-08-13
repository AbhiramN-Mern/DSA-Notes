// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([2,5,3,1,4]))

// function selectionsort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min!=i){
//             [arr[min],arr[i]]=[arr[i],arr[min]]
//         }
//     }
//     return arr
// }
// console.log(selectionsort([2,5,3,1,4]))

// function insertion(arr){
// for(let i=1;i<arr.length;i++){
//     let key=arr[i]
//     let j=i-1
//     while(arr[j]>key){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=key
// }
// return arr

// }
// console.log(insertion([2,5,3,1,4]))

// function QS(arr){
//     if(arr.length<=1)return arr
//     let value=arr[0]
//     let left=[]
//     let right=[]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>value){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...QS(left),value,...QS(right)]
// }
// console.log(QS([2,5,3,1,4]))

// function merge(arr){
//     if(arr.length<=1)return arr
//     let mid=arr.length/2
//     let left=merge(arr.slice(0,mid))
//     let right=merge(arr.slice(mid,arr.length))
//     return mergesort(left,right)
// }
// function mergesort(left,right){
//     let sorted=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// console.log(merge([2,5,3,1,4]))














