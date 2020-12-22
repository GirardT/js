let result = "";

// Day 014
// Introduction to the ES6 Challenges
// Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;

}

result += catTalk();

// Compare Scopes of the var and let Keywords
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
console.log('Function scope i is: ', i);
return i;
}

result += "<br>" + checkScope();

// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";
    // Only change code below this line
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
    // Only change code above this line
}
printManyTimes("freeCodeCamp");

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // Only change code below this line
    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
    // Only change code above this line
}
result += "<br>" + editInPlace();

// Day 015
// Prevent Object Mutation
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
result += "<br>" + freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();
result += "<br>" + magic;

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
result += "<br>" + myConcat([1, 2], [3, 4, 5]);

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    //const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
result += "<br>" + sum(1,2);

// Day 016
// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);
result += "<br>" + arr2;

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line

result += "<br>" + today + ", " + tomorrow;

// // Use Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };
// // Only change code below this line
// const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// // Only change code above this line

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
// Only change code above this line

result += "<br>" + lowToday + ", " + highToday;

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

result += "<br>" + a + ", " + b;

// Day 017
// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

result += "<br>" + arr;

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min} = stats) => (max + min) / 2.0; 
// Only change code above this line

result += "<br>" + half;

// Create Strings using Template Literals
const result1 = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    arr.forEach(
      element => failureItems.push(`<li class="text-warning">${element}</li>`)); 
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result1.failure);

  result += "<br>" + failuresList;

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };

// Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// result += "<br>" + 
document.getElementById("result").innerHTML = result;