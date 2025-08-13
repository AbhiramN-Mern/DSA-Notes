function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped=false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true
            }
        }
        if(!swapped)break
    }
    return arr
}

let array=[61,50,21,43]
console.log(bubblesort(array));

