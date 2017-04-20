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


function bubbleSort(array) {
  if(!array.length) {
    return [];
  }
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length - 1; j++) {
      if(array[j] > array[j + 1]) {
        var left = array[j];
        var right = array[j + 1];
        array[j] = right;
        array[j + 1] = left;
      }
    }
  }
  return array;
}
