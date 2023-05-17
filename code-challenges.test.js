// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { clear } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Pseudo Code:
// input: an array 
// output: an array with the first item removed and shuffled remaining items
// function: shuffleFunction
// process: create function that first uses the .shift built in method to remove the first item from the array. Then using .sort method and Math.random shuffle the remaining items
// return the new shuffled array with 1 less value.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleFunction", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffleFunction(colors1)).toStrictEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    expect(shuffleFunction(colors2)).toStrictEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  })
})

// FAIL  ./code-challenges.test.js
// shuffleFunction
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content.

// ● shuffleFunction › takes in an array, removes the first item from the array and shuffles the remaining content.

//   ReferenceError: shuffleFunction is not defined

// b) Create the function that makes the test pass.

const shuffleFunction = (arr) => {
  arr.shift() 
  arr.sort(() => Math.random() - 0.5)
  return arr
}
// console.log(shuffleFunction(colors1))
// console.log(shuffleFunction(colors2))

// PASS  ./code-challenges.test.js
// shuffleFunction
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.091 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.40s.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Pseudo code:
// input: an object
// output: tally of values in the object
// function: totalTally
// process: to access values in an object we use the Object.value method with the object as the argument to create an array of the objects values. Then apply the reduce method to the array to subtract each value from the previous accumulated value (a - b).
// return the total tally of up votes minus the down votes.

// a) Create a test with expect statements for each of the variables provided.

describe("totalTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(totalTally(votes1)).toStrictEqual(11)
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    expect(totalTally(votes2)).toStrictEqual(-31)
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
  })
})

// FAIL  ./code-challenges.test.js
// shuffleFunction
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// totalTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally.

// ● totalTally › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: totalTally is not defined

// b) Create the function that makes the test pass.

const totalTally = (object) => {
  return Object.values(object).reduce((a, b) => a - b)
}
 
// console.log(totalTally(votes1))
// output: 11
// console.log(totalTally(votes2))
// output: -31

// PASS  ./code-challenges.test.js
// shuffleFunction
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// totalTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.187 s
// Ran all test suites.
// ✨  Done in 0.69s.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudo code:
// input: two arrays 
// output: array with no duplicates
// function: removeDuplicates
//process: Using the .concat method we take 2 arrays and combine them into 1 as a new variable newArray. We then use the .filter method to iterate over the newArray and only keep the items where index of the first occurrence of the item in the array is equal to the current index to remove duplicates.
// return new array with no duplicates


// a) Create a test with an expect statement using the variables provided.

describe("removeDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(removeDuplicates(dataTypesArray1, dataTypesArray2)).toStrictEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  })
})

// FAIL  ./code-challenges.test.js
// shuffleFunction
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// totalTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
// removeDuplicates
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● removeDuplicates › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: removeDuplicates is not defined

// b) Create the function that makes the test pass.

// original function I wrote the pseudocode for.

// const removeDuplicates = (a, b) => {
//   const newArray = a.concat(b)
//  return newArray.filter((string,
//   index) => newArray.indexOf(string) === index)
// }

// -------REFACTOR/STRETCH-------

const removeDuplicates = (...array) => {
  const newArray = array.flat()
 return [...new Set(newArray)]
}

// PASS  ./code-challenges.test.js
// shuffleFunction
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// totalTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally.
// removeDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.154 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.68s.

// This version uses 1 rest parameter and 1 spread operator. The rest parameter is used to pass in any amount of arrays (...array). The spread operator is used in the return with the Set constructor to create a new array that contains only the unique values of newArray. Also in this version instead of using .concat to combine 2 arrays into one this one uses the .flat method to make an array with all subarrays concatenated into a single array. Using .flat allows the concatenation of multiple arrays in a dynamic way to work with the rest parameter(...array).

// console.log(removeDuplicates(dataTypesArray1, dataTypesArray2))
// output: ['array', 'object', 'number', 'string', 'Boolean', 'null', 'undefined']