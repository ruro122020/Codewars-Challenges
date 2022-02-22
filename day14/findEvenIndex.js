/*
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr) {
  let sum = 0;
  let leftSum = 0;

  //add up all the numbers in the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //go through the array again
  for (let i = 0; i < arr.length; i++) {
    //subtract the number at the i index from sum
    sum -= arr[i];
    //continue subtracting from the sum amount until leftSum equals sum
    if (leftSum === sum) {
      //then return the index number
      return i;
    }
    //add the number at the i position to leftSum until leftSum equal sum
    leftSum += arr[i];
  }
  return -1;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
