/*
Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
  if (!numbers) return [];
  //get the min number
  let min = Math.min.apply(null, numbers);
  //make a copy of the numbers array
  let newArray = [...numbers];
  //get the index of where that min number is in the array
  let indexOfSmallNumber = newArray.indexOf(min);
  //remove the min number from the lowest index
  newArray.splice(indexOfSmallNumber, 1);
  //return a new array with the new numbers
  return newArray;
}
