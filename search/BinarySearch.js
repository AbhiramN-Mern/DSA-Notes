function binarryserch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let mid=Math.round((right+left)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return "not found"
}
let array=[7,8,9,10,11]
let target=10
console.log(binarryserch(array,target))












function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 5));


function exists(arr, target) {
  return binarySearch(arr, target) !== -1;
}
console.log(exists([2, 4, 6, 8, 10], 6)); 


function findFirstOccurrence(arr, target) {
  let low = 0, high = arr.length - 1, result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return result;
}
console.log(findFirstOccurrence([1, 2, 4, 4, 4, 5], 4)); 
