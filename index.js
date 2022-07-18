// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  //write your code here
  let vowels = 'AEIOUWaeiouw';
  numOfVowels = 0;
  for (i = 0; i < str1.length; i++) {
      if (vowels.includes(str1[i]))
          numOfVowels++;
  }
  return numOfVowels;
}
console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  //write your code here
  let id = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < l; i++)
      id.push(characters[Math.floor(Math.random() * characters.length)]);
  return id.join('');
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
  return 'abc'
}

console.log(abc());
