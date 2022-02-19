/*

Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Example: Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.


Example: 
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    //To calculate the denominator in the fraction series,
    //I'm multiplying i by 3, adding 1, and to convert it to a decimal I'm dividing the results by 1.
    //To add the nth number of times,
    //I'm adding the results of (1/(3*i+1)) to the current value of sum and reasigning the results to sum
    sum += 1 / (3 * i + 1);
  }
  //toFixed method returns a string representing the given number using fixed-point notation.
  return sum.toFixed(2);
}

SeriesSum(1);
SeriesSum(2);
SeriesSum(3);
SeriesSum(4);
