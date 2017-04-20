function bubbleSort(array) {
  if(!array.length) {
    return [];
  }
  // sort arrays from smallest to largest
  var count = array.length;
  for(var i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i + 1]) {
      var left = array[i];
      var right = array[i + 1]
      array[i] = right;
      array[i + 1] = left;
    }
  }
  count--;
  if(count) {
    debugger;
    bubbleSort(array);
  }
  return array;
}

// [6,5,3,1,8]
// 5,6,3,1,8
// 5,3,6,1,8
// 5,3,1,6,8

// count = 4
// 5,3,1,6,8
// 3,5,1,6,8
// 3,1,5,6,8
// 3,1,5,6,8

// count = 3
