const debug = false;

// Assignment Task #1
/*
    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    Do not use numbers to reference the last element, find it programmatically.
    ages[7] - ages[0] is not allowed!
    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    Use a loop to iterate through the array and calculate the average age.
*/
printTaskNumber(1);

let ages = [ 3, 9, 23, 64, 2, 8, 28, 93 ];
deBugger(`In global scope: Array size = ${ages.length}`); // debug output

let subtractFirstFromLast = arr => {
    let arrSize = arr.length;
    deBugger(`In function scope: Array size = ${arrSize}`); // debug output
    switch (true) {
        case (arrSize >= 2):
            // Subtracting first element from last element typically requires
            // at least 2 elements
            
            let firstElement = arr.shift(); // Gets first element
            arr.unshift(firstElement); // Shift method removes first element, so putting back in place.

            let lastElement = arr.pop(); // Gets last element
            arr.push(lastElement); // Putting element back into array
            return lastElement - firstElement;

        case (arrSize > 0):
            // If array has only one element then it is both first and last.
            // Subtracting element from itself would result in 0.
            return 0;
        default:
            return undefined; // Nothing to subtract from empty set
    }
}

// Assignment requirement: Return result from subtracting first element from last
console.log(subtractFirstFromLast(ages));

// Assignment requirement: Add to array to prove subtraction is dynamic
ages.unshift(100); // Adding 100 to beginning of array should result in 93 - 100 = -7
console.log(subtractFirstFromLast(ages));

// Assignment requirement: Use loop to iterate array and calculate average
function sumOfAges(arr) {
    let sum = 0; // Initialize running total 0
    
    arr.forEach(age => {
        sum += age; // Each iteration adds current age to sum variable
    });
    return sum; 
}

deBugger(`Sum total of ages in array = ${sumOfAges(ages)}`); // debug output. Check for correct sum.
console.log(sumOfAges(ages) / ages.length) // Average age from array

// Assignment Task #2
/*
    Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    Use a loop to iterate through the array and calculate the average number of letters per name.
    Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/ 
printTaskNumber(2);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Assignment requirement: Calculate average number of letters per name
// Using a loop
let charSumTotal = 0; // variable to hold total count of letters in array of names

names.forEach(name => charSumTotal += name.length);
deBugger(`Sum total of letters in all names = ${charSumTotal}`);

console.log(charSumTotal / names.length); // Divide total letter count by number of names in array for average

// Assignment requirement: Use loop to concatenate all names separated by spaces
let nameString = ""; // Initial value of string is empty

names.forEach( name => nameString += (name + " ")); // Iterate through array and add each name plus space to string variable
console.log(nameString);

// Assignment task #3
// How do you access the last element of any array?
printTaskNumber(3);

console.log(`\nYou can access the last element of an array using the array.pop() method, but this will remove the last element from the array.
You can also access the last element using the array.length property minus 1 as an index value, such as array[array.length - 1]\n`);

// Assignment task #4
// How do you access the first element of any array?
printTaskNumber(4);

console.log(`Similar to above, you can access the first element of an array using the array.shift() method, but this will remove the first element from the array.
You can also access the first element using a 0 index value, such as array[0]\n`);

// Assignment task #5
// Assignment requirement: Create a nameLengths array and iterate through names array to add the length of each name to the new array
printTaskNumber(5);

let nameLengths = new Array();

names.forEach(name => nameLengths.push(name.length));
console.log(names);
console.log(nameLengths);

// Assignment task #6
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
printTaskNumber(6);

let sumOfNameLengths = 0; // Initial sum value of 0

nameLengths.forEach(nameLength => sumOfNameLengths += nameLength);
console.log(sumOfNameLengths);

// Assignment task #7
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
printTaskNumber(7);

function selfConcatWord(word, n) {
    let concatenatedString = "";
    for (let i = 0; i < n; i++) {
        concatenatedString += word;
        deBugger(`Iteration ${i}: word = ${word}: Concatenated string = ${concatenatedString}`);
    }
    return concatenatedString;
}
console.log(selfConcatWord('Hello', 3));

// Assignment task #8
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
printTaskNumber(8);

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Francis', 'Mendoza'));

// Assignment task #9
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
printTaskNumber(9);

function isArraySumGreaterThan100(arr) {
    let sumOfArray = 0;
    arr.map(number => sumOfArray += number);

    return (sumOfArray > 100); // Return true if greater than 100, else false
}
let numbers = [ 1, 50, 3, 9, 2]; // Array total should be less than 100 and function should return false
console.log(isArraySumGreaterThan100(numbers));

numbers.push(40); // add value to array to push sum over 100
console.log(isArraySumGreaterThan100(numbers)); // Should return true now

// Assignment task #10
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
printTaskNumber(10);

function averageOfArray(arr) {
    let sumOfArray = 0;
    arr.forEach(number => sumOfArray += number);
    return sumOfArray / arr.length;
}
console.log(averageOfArray(numbers)); // Print average of numbers array previously defined

// Assignment task #11
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
printTaskNumber(11);

function isFirstArrayAverageBiggest(arr1, arr2) {
    
    let firstAverage = averageOfArray(arr1);
    deBugger(`First array = ${arr1}`);
    deBugger(`First array average = ${firstAverage}`);

    let secondAverage = averageOfArray(arr2);
    deBugger(`Second array = ${arr2}`);
    deBugger(`Second array average = ${secondAverage}`);

    return (firstAverage > secondAverage);
}

let smallerArray = Array.from(numbers); // Using previous numbers array to build test array
let largerArray = Array.from(numbers); // Using the same numbers array then replacing last value with bigger value
largerArray.push(largerArray.pop() * 10);
console.log(isFirstArrayAverageBiggest(smallerArray, largerArray),'\n'); // Should return false
console.log(isFirstArrayAverageBiggest(largerArray, smallerArray)); // Should return true


// Assignment task #12
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
printTaskNumber(12);
function willBuyDrink(isHotOutside, moneyInPocket) {
    let enoughMoney = 10.50
    return (isHotOutside && moneyInPocket > enoughMoney);
}
let isSoHot = true;
let walletAmount = 100;
console.log(willBuyDrink(isSoHot, walletAmount));

// Assignment task #13
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
printTaskNumber(13);

/*
    Purpose of function is to provide debugging output to console to test various stages within code blocks 
    for expected behavior and output a desired message passed into function. It saves me from having to type
    the some of the same things over and over and make the code more readable by not confusing the debug 
    instructions with the rest of the program.
*/
function deBugger(message) {
    if (debug) console.log(`Debug: ${message}`); // If debug flag is set then print message to console.
}

/*
    Purpose of this function is to output to console the current assignment number. I was console.logging
    basically the same message at each task and it was looking a bit ugly.
*/
function printTaskNumber(number) {
    console.log(`\nAssignment task #${number}\n`);
}