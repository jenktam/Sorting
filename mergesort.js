'use strict'

// used in merge function
function mergeSort(mergedArray){
  if(mergedArray.length <= 1) return mergedArray;

  for(let i = 0; i < mergedArray.length; i++) {
    for(let j = 0; j < mergedArray.length; j++) {
      const leftElem = mergedArray[j];
      const rightElem = mergedArray[j+1];
      if(rightElem < leftElem) {
        mergedArray[j] = rightElem;
        mergedArray[j+1] = leftElem;
      }
    }
  }
  return mergedArray;
}

// takes in merged array from merge fn
// mergeSort(mergedArray);
// console.log("mergeSort:", mergeSort([9, 1994, 18, 1, -90, 1234, 56]));

function split(array) {
  var center = array.length / 2;
  var leftArray = array.slice(0,center);
  var rightArray = array.slice(center);
  return [leftArray, rightArray];
}

function merge(left,right){
  // takes sorted arrays and turns into 1 sorted array
  var merged = [];
  var sorted = false;

  split(left);

  // returns an empty merged array if both sides empty
  if(!left.length && !right.length) return merged;

  // implement checkSorted fn on both sides
  // if both sorted then add to merged list
  // debugger;
  if(!checkSorted(left) || !checkSorted(right)) {
    left = mergeSort(left);
    right = mergeSort(right);
  }

  merged = merged.concat(left).concat(right);
  merged = mergeSort(merged);
  return merged;
}

function checkSorted(array) {
  var sorted = false;
  for(var i = 0; i < array.length - 1; i++) {
    if(array[i] < array[i+1]) sorted = true;
    else sorted = false;
  }
  return sorted;
}

// // [6,5,3,1,];
// // // [ [6,5]   [3,1][8] ]
// var left = [1,16,10,200,5];
// var right = [2,4,11];


// var left = [1,-16,10,200,5];
// var right = [2,4,11, 1];


// console.log("solution", merge(left, right));
// // console.log("sorted?", checkSorted(left));
