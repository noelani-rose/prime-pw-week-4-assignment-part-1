console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
//let name = 'Noelani';
function helloName(name) {
  return name;
}

// Remember to call the function to test
console.log('Hello,', helloName('Noelani!'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log('The sum of two numbers is', addNumbers (4, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( ){
  let answer = 3 * 5 * 9;
  return answer;
}
console.log('The quotient of three numbers is', multiplyThree());


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
console.log('This number is positive:', isPositive(4));


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

  function getLast (array){
  if (array.length > 0){
    return array.length -1;
  }
  else {
    return undefined;
  }
}

console.log('The last item in the array is', getLast([1, 5, 6, 9]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function findVal (value){
  for (let i = 0; i < value.length; i++){
    if (value[i] === 'hello'){
      return true;
    }
  }
 return false; 
}
console.log('The value is', findVal(['hello', 'hi']))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i ++) {
    sum += array[i];
  }
  return sum;
}
console.log('The sum is', sumAll([1, 5, 8, 12]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
