/*
even length
odd length
*/
describe('Merge Sort', function(){
  var testArr = [6,5,3,1,8];
  var duplicates = [6,5,3,1,8,1,1];
  var negativeNums = [6,5,3,1,8,-10,-5];
  var fractions = [6,5,3,1,8,0.5,7.5, 7.6];

  it('Handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('Handles an array with only 1 element', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('Merge Sort should be a function', function(){
    expect(typeof mergeSort).toEqual('function');
  });

  it('Input and output arrays should be equal length', function(){
    expect( mergeSort(testArr).length ).toEqual( testArr.length );
  });

  it('Sorts values from smallest to largest', function(){
    expect(mergeSort(testArr)[0]).toEqual(1);
    expect(mergeSort(testArr)[mergeSort(testArr).length - 1]).toEqual(8);
    expect(mergeSort(testArr)).toEqual([1,3,5,6,8]);
  });

  it('Numbers of the same value should be adjacent to each other', function(){
    expect(mergeSort(duplicates)).toEqual([1,1,1,3,5,6,8]);
  });

  it('Should be able to sort negative or positive numbers', function(){
    expect(mergeSort(negativeNums)).toEqual([-10,-5,1,3,5,6,8]);
  });

  it('Should be able to sort negative or positive numbers', function(){
    expect(mergeSort(fractions)).toEqual([0.5,1,3,5,6,7.5,7.6,8]);
  });

  it('Should be able to handle even and odd lengthed arrays', function(){
    expect(mergeSort(fractions)).toEqual([1,3,5,6,8]);
  });
});

function test(x) {
  console.log(x);
}

console.log(typeof test);


/*
base case: if array.length = 1; just return array. not sorting needed.
-data structure is a binary tree

2 helper functions:
-1 to divide array into 2 arrays
-1 to merge sorted arrays back together

*/
