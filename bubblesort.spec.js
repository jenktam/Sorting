// describe('Bubble Sort', function(){
//   var testArr = [6,5,3,1,8];
//   var duplicates = [6,5,3,1,8,1,1];
//   var negativeNums = [6,5,3,1,8,-10,-5];
//   var fractions = [6,5,3,1,8,0.5,7.5, 7.6];

//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

//   it('Bubble Sort should be a function', function(){
//     expect(typeof bubbleSort).toEqual('function');
//   });

//   it('Input and output arrays should be equal length', function(){
//     expect( bubbleSort(testArr).length ).toEqual( testArr.length );
//     // expect( bubbleSort([1,2,3].length) ).toEqual( [1,2,3].length );
//   });

//   it('Sorts values from smallest to largest', function(){
//     expect(bubbleSort(testArr)[0]).toEqual(1);
//     expect(bubbleSort(testArr)[bubbleSort(testArr).length - 1]).toEqual(8);
//     expect(bubbleSort(testArr)).toEqual([1,3,5,6,8]);
//   });

//   it('Numbers of the same value should be adjacent to each other', function(){
//     expect(bubbleSort(duplicates)).toEqual([1,1,1,3,5,6,8]);
//   });

//   it('Should be able to sort negative or positive numbers', function(){
//     expect(bubbleSort(negativeNums)).toEqual([-10,-5,1,3,5,6,8]);
//   });

//   it('Should be able to sort negative or positive numbers', function(){
//     expect(bubbleSort(fractions)).toEqual([0.5,1,3,5,6,7.5,7.6,8]);
//   });

// });

// function test(x) {
//   console.log(x);
// }

// console.log(typeof test);


// /*
// -bubble sorting every element of array
// -consecutive order and not skipping any elements.
// -function is a stable sort that preserves order of equal elements
// -can handle objects sorted by a key
// -mutates the input array. does not create a copy
// */

'use strict';
/* global bubbleSort inOrder swap */

// const numerically = function (a, b) { return a - b; }

// const generateArray = function (size, lower, upper) {
//   const randomArray = [];
//   while (size--) {
//     let randomNum = Math.floor(lower + Math.random() * upper);
//     randomArray.push(randomNum);
//   }
//   return randomArray;
// }

describe('Bubble Sort', function(){

  it('sorts an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array of one element', function(){
    expect( bubbleSort([7]) ).toEqual( [7] );
  });

  // it('sorts an array of many elements', function(){
  //   expect( bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0]) ).toEqual([0, 1, 2, 3, 4, 5, 5, 7, 9]);
  // });

  for (let i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      const arr = generateArray(i, 0, 100);
      const sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual( sorted );
    });
  }

  it('compares the expected number of times', function(){
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(inOrder.calls.count()).toEqual(10);
  });

  it('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });

  // function spyOn (obj, method) {
  //   let counter = 0;
  //   const spy = function () {
  //     counter++;
  //   }
  //   obj[method] = spy;
  //   spy.calls = {
  //     count: function() { return counter; }
  //   };
  // }

});
