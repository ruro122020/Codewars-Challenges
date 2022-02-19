/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */
function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    //the includes function returns a boolen.
    //if str at i position is an 'aeiou' letter then the condition will result to true
    if ("aeiou".includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

getCount("abracadabra");
