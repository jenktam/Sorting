describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
  var testArr = [6,5,3,1,8];

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });


  it('input and output arrays should be equal length', function(){
    expect( bubbleSort(testArr).length ).toEqual( testArr.length );
    // expect( bubbleSort([1,2,3].length) ).toEqual( [1,2,3].length );
  });

  // testArr = [78,24,94];

  it('should start at beginning of array and finish with last element', function(){
    expect( testArr[0] ).toEqual( 6 );
  });

  it('Bubble Sort should be a function', function(){
    expect(typeof bubbleSort).toEqual('function');
  });

  it('sorts values from smallest to largest', function(){
    expect(bubbleSort(testArr)[0]).toEqual(1);
    expect(bubbleSort(testArr)[bubbleSort(testArr).length - 1]).toEqual(8);
  });





});

function test(x) {
  console.log(x);
}

console.log(typeof test);


/*
bubble sorting every element of array
*/
