// This first example passes all the test specs but doesn't recurse through the merge fn. Therefore, when checking hte performance.js file, the speed is increasingly worst than bubblesort with more data. Possibly O(n^2). See recursive and proper solution below:

// Method 1: no recursion: worse
// 'use strict'

// // used in merge function
// function mergeSort(mergedArray){
//   if(mergedArray.length <= 1) return mergedArray;

//   for(let i = 0; i < mergedArray.length; i++) {
//     for(let j = 0; j < mergedArray.length; j++) {
//       const leftElem = mergedArray[j];
//       const rightElem = mergedArray[j+1];
//       if(rightElem < leftElem) {
//         mergedArray[j] = rightElem;
//         mergedArray[j+1] = leftElem;
//       }
//     }
//   }
//   return mergedArray;
// }

// // takes in merged array from merge fn
// // mergeSort(mergedArray);
// // console.log("mergeSort:", mergeSort([9, 1994, 18, 1, -90, 1234, 56]));

// function split(array) {
//   var center = array.length / 2;
//   var leftArray = array.slice(0,center);
//   var rightArray = array.slice(center);
//   return [leftArray, rightArray];
// }

// function merge(left,right){
//   // takes sorted arrays and turns into 1 sorted array
//   var merged = [];
//   var sorted = false;

//   // returns an empty merged array if both sides empty
//   if(!left.length && !right.length) return merged;

//   // implement checkSorted fn on both sides
//   // if both sorted then add to merged list
//   // debugger;
//   if(!checkSorted(left) || !checkSorted(right)) {
//     left = mergeSort(left);
//     right = mergeSort(right);
//   }

//   merged = merged.concat(left).concat(right);
//   merged = mergeSort(merged);
//   return merged;
// }

// function checkSorted(array) {
//   var sorted = false;
//   for(var i = 0; i < array.length - 1; i++) {
//     if(array[i] < array[i+1]) sorted = true;
//     else sorted = false;
//   }
//   return sorted;
// }

// // // [6,5,3,1,];
// // // // [ [6,5]   [3,1][8] ]
// // var left = [1,16,10,200,5];
// // var right = [2,4,11];


// // var left = [1,-16,10,200,5];
// // var right = [2,4,11, 1];


// // console.log("solution", merge(left, right));
// // // console.log("sorted?", checkSorted(left));


// Method 2: using recursion: better
'use strict';
/* eslint-disable no-use-before-define */

const mergeSort = function(array) {
  if(array.length <= 1) return array; //base case
  // debugger;
  const splits = split(array);
  const left = splits[0];
  const right = splits[1];

  return merge(mergeSort(left), mergeSort(right))
}

// console.log("mergesort:", mergeSort([9, 1994, 18, 1, -90, 1234, 56]));
const split = function(array) {
  const center = array.length / 2,
        left = array.slice(0, center),
        right = array.slice(center);
  return [left, right];
};

const merge = function(left,right) {
  const merged = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while(leftIdx < left.length  && rightIdx < right.length) {
    if(left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  // This neat feauture adds the last left or right element that was not pushed to the merged array in lines 125-130.
  for(; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for(; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);

  return merged;
}

// console.log(merge([1, 5, 10], [2, 4, 11]));
