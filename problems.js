// Problem 1 : 
// Find "bangladesh" how many times does the following word occur?
// How many numbers were found in the first position?
const sentence = "I am Rakibul Hassan Shehab, i live in Bangladesh  i was born in bangladesh i am very proud becouse i am born in bangladesh ";
function findWord (sentence) {
      const matchWord = sentence.match(/bangladesh/gi);
      const occored = matchWord ? matchWord.length : 0;
      const firstPositionMatch = sentence.search(/bangladesh/i);
      return `The following sentence is occored ${occored} times and first match position is ${firstPositionMatch < 0 ? " Is ont found ": firstPositionMatch}`;
}
const findMatch = findWord(sentence);


// Problem 2 :
// Make a liner secrch method 
// input : linerSearch(["a","b","c","d","c"],'c')
// output : 2 or 'not found!' ;
function linerSearch(array,findElem) {
      const firstFound = array.indexOf(findElem);
      const firstFoundPosition = firstFound < 0 ? "Not found!" : firstFound;
      return firstFoundPosition
}
linerSearch(["a","b","c","d","c"],"c");

// Problem 3 : 
// Find lingest string into an array and its index number 
const stringArray = ["Rakibul", "Hassan","Shehab","Rakibul hassan shehab"];
function findLongestWord (arr) {
      let longestString = '';
      for (word of arr) {
            if (word.length > longestString.length) {
                  longestString = word;
            }
      }
      const index = arr.indexOf(longestString);
      return {longestWord : longestString, indexNumber : index }
}
const longestWord = findLongestWord (stringArray);

// Problem 4 :
// Returns the numbers from one to one hundred that are divisible by 3 and 5 and divisible by both 5 and 3

function fizzBuzz (form,to) {
      let fizzBuzzArr = [];
      let onlyFizz = [];
      let onlyBuzz = [];
      for (let i = form; i <= to; i++) {
            if (i % 15 === 0) {
                  fizzBuzzArr.push(i)
            }else if (i % 5 === 0) {
                  onlyFizz.push(i)
            }else if (i % 3 === 0) {
                  onlyBuzz.push(i)
            }
      }
      return {
            fizzBuzzArr : fizzBuzzArr,
            onlyFizzArr : onlyFizz,
            onlyBuzzArr : onlyBuzz
      }
}
const fizzBuzzArrays = fizzBuzz(1,100);

// Problem 5 : 
// Remove falsy values into an array 
const mixedArray = ["","Hello world",undefined,"0",0,null,false,true,NaN];
function removeFalsy (array) {
      let truthyValue = [];
      const length = array.length;
      for (let i = 0; i < length; i++) {
            if (array[i]) {
                 truthyValue.push(array[i])
            }
      }
      return truthyValue;
};
const removeFalsyValues = removeFalsy(mixedArray);


// Problem 6 : 
// Remove falsy values into an object;
const object = {
      a : undefined,
      b : null,
      c : false,
      d : "hello",
      e : NaN,
      f : 0,
      g : "false"
};
function removeFalsyInObj (obj) {
      const truthyObj = {};
      for (const elem in obj) {
            if (obj[elem]) {
                  truthyObj[obj[elem]] = obj[elem]
            }
      }
      return truthyObj;
}
const truthyObj = removeFalsyInObj (object);
