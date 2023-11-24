//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}
//cycle version
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < min) min = args[i];
    }
    return min;
  }
}


//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
//Geometry Basics: Circle Circumference in 2D
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  let val = [];
  for (let key in obj) {
    if (key.length === 5) val.push(key);
    if (obj[key].length === 5) val.push(obj[key]);
  }
  return val;
}
  
//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
//Understanding closures - the basics
function buildFun(n) {
  let val = [];
  for (let i = 0; i < n; i++) val.push(() => i);
  return val;
}


//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript
//Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

