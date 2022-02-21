/*
 Check to see if a string has the same amount of 'x's and 'o's. 
  The method must return a boolean and be case insensitive.
  The string can contain any char.
*/

function XO(str) {
  let strArray = str.toLowerCase().split("");
  return (
    strArray.filter((x) => x === "x").length ===
    strArray.filter((o) => o === "o").length
  );
}
