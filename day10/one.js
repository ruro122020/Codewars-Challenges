/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
  const strCase = str.toLowerCase();
  const strArr = strCase.split("");
  const filteredArr = strArr.filter(
    (letter, index) => strArr.indexOf(letter) !== index
  );
  return filteredArr.length === 0 || str === "" ? true : false;
}

isIsogram("Dermatoglyphics");
