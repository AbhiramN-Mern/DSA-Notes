// 1. Find Maximum and Minimum in an Array
function findMaxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log("1. Max:", max, "| Min:", min);
}
findMaxMin([3, 5, 1, 9, 2]);

// 2. Reverse an Array Without Using reverse()
function reverseArray(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log("2. Reversed:", rev);
}
reverseArray([10, 20, 30, 40]);

// 3. Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [...new Set(arr)];
  console.log("3. Unique:", unique);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// 4. Find the Sum of All Elements
function sumOfArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("4. Sum:", sum);
}
sumOfArray([5, 10, 15]);

// 5. Check if Array Contains a Given Element
function containsElement(arr, target) {
  let found = arr.includes(target);
  console.log(`5. Contains ${target}?`, found);
}
containsElement([1, 3, 5, 7], 3);

// 6. Find the Second Largest Element
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  if (unique.length < 2) return console.log("6. Not enough elements.");
  unique.sort((a, b) => b - a);
  console.log("6. Second Largest:", unique[1]);
}
secondLargest([10, 5, 20, 10, 20]);

// 7. Count Even and Odd Numbers
function countEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let num of arr) {
    if (num % 2 === 0) even++;
    else odd++;
  }
  console.log("7. Even:", even, "| Odd:", odd);
}
countEvenOdd([1, 2, 3, 4, 5, 6]);

// 8. Find All Pairs with Given Sum
function findPairsWithSum(arr, target) {
  console.log(`8. Pairs with sum ${target}:`);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${arr[i]} + ${arr[j]} = ${target}`);
      }
    }
  }
}
findPairsWithSum([1, 2, 3, 4, 5, 6], 7);
