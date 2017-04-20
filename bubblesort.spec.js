describe('Bubble Sort', function(){
  var testArr = [6,5,3,1,8];
  var duplicates = [6,5,3,1,8,1,1];
  var negativeNums = [6,5,3,1,8,-10,-5];
  var fractions = [6,5,3,1,8,0.5,7.5, 7.6];

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Bubble Sort should be a function', function(){
    expect(typeof bubbleSort).toEqual('function');
  });

  it('Input and output arrays should be equal length', function(){
    expect( bubbleSort(testArr).length ).toEqual( testArr.length );
    // expect( bubbleSort([1,2,3].length) ).toEqual( [1,2,3].length );
  });

  // testArr = [78,24,94];

  it('Should start at beginning of array and finish with last element', function(){
    expect( testArr[0] ).toEqual( 6 );
  });

  it('Sorts values from smallest to largest', function(){
    expect(bubbleSort(testArr)[0]).toEqual(1);
    expect(bubbleSort(testArr)[bubbleSort(testArr).length - 1]).toEqual(8);
    expect(bubbleSort(testArr)).toEqual([1,3,5,6,8]);
  });

  it('Numbers of the same value should be adjacent to each other', function(){
    expect(bubbleSort(duplicates)).toEqual([1,1,1,3,5,6,8]);
  });

  it('Should be able to sort negative or positive numbers', function(){
    expect(bubbleSort(negativeNums)).toEqual([-10,-5,1,3,5,6,8]);
  });

  it('Should be able to sort negative or positive numbers', function(){
    expect(bubbleSort(fractions)).toEqual([0.5,1,3,5,6,7.5,7.6,8]);
  });

});

function test(x) {
  console.log(x);
}

console.log(typeof test);


/*
-bubble sorting every element of array
-consecutive order and not skipping any elements.
-function is a stable sort that preserves order of equal elements
-can handle objects sorted by a key
-mutates the input array. does not create a copy
*/
