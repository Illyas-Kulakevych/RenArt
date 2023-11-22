//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript\
//Convert a string to an array
const stringToArray = (string) => string.split(' ');

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNAtoRNA
const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Find Maximum and Minimum Values of a List
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Smallest value of an array
function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  return queue[queue.length - 1] === 'wolf' 
    ? "Pls go away and stop eating my sheep" 
    :`Oi! Sheep number ${queue.length - 1 - queue.lastIndexOf('wolf')}! You are about to be eaten by a wolf!`
}

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
//Beginner - Lost Without a Map
const maps = (x) => x.map((x) => x * 2);

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
//Find the first non-consecutive number
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
const century = (year) => Math.ceil(year / 100);

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = (num) => (num < 0 ? num : -num);

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => Math.floor(s / 0.036);

//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n - 1) * 2;

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = n => (n <= 0) ? n : n - (n >= 13 ? 2 : 1);

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
