// function bubbleSort(array) {
//   var numTimesFnRan = 0;
//   if(!array.length) {
//     return [];
//   }

//   function helper(array){
//     for(var i = 0; i < array.length - 1; i++) {
//       if(array[i] > array[i + 1]) {
//         var left = array[i];
//         var right = array[i + 1]
//         array[i] = right;
//         array[i + 1] = left;
//       }
//     }
//   }

//   if(numTimesFnRan < array.length) {
//     debugger;
//     numTimesFnRan++;
//     helper(array);
//   }
//   return array;
// }


// function bubbleSort(array) {
//   if(!array.length) {
//     return [];
//   }
//   for(var i = 0; i < array.length; i++) {
//     for(var j = 0; j < array.length - 1; j++) {
//       if(array[j] > array[j + 1]) {
//         var left = array[j];
//         var right = array[j + 1];
//         array[j] = right;
//         array[j + 1] = left;
//       }
//     }
//   }
//   return array;
// }


// // [6,5,3,1,8]
// // 5,6,3,1,8

// // 5,3,6,1,8
// // 5,3,1,6,8

// // count = 4
// // 5,3,1,6,8
// // 3,5,1,6,8
// // 3,1,5,6,8
// // 3,1,5,6,8

// // count = 3

// 'use strict';
// function bubbleSort(array) {
//   if(!array.length) return [];
//   for(var i = 0; i < array.length; i++) {
//     for(var j = 0; j < array.length; j++) {
//       if(array[j+1] < array[j]) {
//         var firstVal = array[j];
//         array[j] = array[j + 1];
//         array[j+1] = firstVal;
//       }
//     }
//   }
//   return array;
// }

'use strict';

const bubbleSort = function(array) {
  let sorted = false;
  passes: for(let end = array.length; end > 0 & !sorted; end--) {
    sorted = true;
    bubbling: for(let j = 0; j < end; j++) { //bubbling
      // if function not in order, keep swapping left and right values
      if(!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }
  console.log(array);
  return array;
};

// returns whether index ordered at array provided. looking at last element
function inOrder(array, index) { //pure function
  if(index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

// modifying array in place vs creating new array to swap is that it saves memory space
function swap (array, index) { // side effects
  const oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}

const numerically = function (a, b) { return a - b; }

const generateArray = function (size, lower, upper) {
  const randomArray = [];
  while (size--) {
    let randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}
