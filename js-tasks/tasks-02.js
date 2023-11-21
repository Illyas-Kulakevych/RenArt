//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript\
//Convert a string to an array
function stringToArray(string){
  return string.split(" ");
}


//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNAtoRNA
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Find Maximum and Minimum Values of a List
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//Smallest value of an array
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  }
  if (toReturn === "index") {
    const minIndex = arr.indexOf(minValue);
    return minIndex;
  }
}

function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let wolfIndex = queue.indexOf("wolf");
    let sheepNumber = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}

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
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  // Finish this :)
  return year % 100 === 0 ? Math.floor(year/100) : Math.ceil(year/100);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num < 0 ? num : -num
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  const metersInKilometers = 1000;
  const santimetersInMeters= 100;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  
  return Math.floor(s * metersInKilometers * santimetersInMeters / (minutesInHour * secondsInMinute));
}
