/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    //subtract a by 1 to get the numbers between a and b when a is greater than b
    return a + getSum(a - 1, b);
  } else {
    //add a by 1 to get the numbers between a and b when a is less than b
    return a + getSum(a + 1, b);
  }
}

getSum(-1, 2);
getSum(1, 0);
