/*
1.Define a function greet that takes one parameter name.
The function should print a greeting message like “Hello, [name]!”.
Call the function with different names and print the results?
ANS:-
*/

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the function with different names
  greet("chandra");
  greet("avi");
  greet("Solo Levaling");
  greet("Naveen");
  greet("Teja");


  /*
2.Sum Function
Scenario: Create a function that takes two numbers as arguments and
 returns their sumTask:

Define a function sum that takes two parameters a and b.

The function should return the sum of a and b.

Call the function with different numbers and print the results.?
 ANS:-
  */
 function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(5, 10));     
  console.log(sum(-3, 8));    
  console.log(sum(2.5, 3.5)); 
  console.log(sum(0, 0));      
  console.log(sum(-10, 5)); 

/*
3.Square Function

Scenario: Create a function that takes a number as an argument

 and returns its square.

Task:

Define a function square that takes one parameter num.

The function should return the square of num.

Call the function with different numbers and 

print the results?
ANS:-
*/



  function square(num) {
    return num * num;
  }
  
  
  console.log(square(5));  
  console.log(square(0));  
  console.log(square(-3)); 
  console.log(square(2.5));
  console.log(square(10)); 


  /*
 4. Average Function
Scenario: Create a function that takes an array of numbers 
as an argument and returns the average.
Task:
hint:[2,5,2] =9/3=3
Define a function average that takes one parameter arr.
The function should return the average of the numbers in arr.
Call the function with different arrays and print the results?
ANS:-
*/

function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "Invalid input: Empty array or not an array.";
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return "Invalid input: Array contains non-numeric values.";
      }
      sum += arr[i];
    }
  
    return sum / arr.length;
  }

  console.log(average([2, 5, 2])); 
  console.log(average([-1, 1, 0]));
  console.log(average([10, 20, 30, 40]));
  console.log(average([3.5, 4.5, 5.5]));
  console.log(average([]));


  /*
  5. Vowels Function
Scenario: Create a function that takes a string as an argument and 
returns weather the strings contains vowels or not .
Task:
Define a function that takes one parameter str.
The function should return whether string contains vowels or not.
use loops and if conditions
Call the function with different strings and print the results.
hello --a,e ,i ,o,u---it contains vowels
hll---it doesnt contains vowels
ANS:-
*/
function containsVowels(str) {
    const vowels = "aeiouAEIOU"; // String of vowels
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        return true; // Found a vowel, return true immediately
      }
    }
    return false; // No vowels found
  }
  
  console.log(containsVowels("hello"));
  console.log(containsVowels("hll"));  
  console.log(containsVowels("AEIOU"));
  console.log(containsVowels("xyz"));  
  console.log(containsVowels("bAcK")); 
  console.log(containsVowels(""));     


  /*
  6.Temperature Converter
Scenario: Create a function that converts temperatures between Celsius and Fahrenheit.
Task:
Define a function convertTemperature that takes two parameters: temp (the temperature) and
 scale (the scale to convert to, either “C” or “F”).
The function should return the converted temperature.
Test the function with different temperatures and scales and print the results.
Hints:-
formula for celscious (temp - 32) * 5/9
formula for fahrehnheit (temp * 9/5) + 32  ?
ANS:-
  */

function convertTemperature(temp, scale) {
    if (typeof temp !== 'number') {
      return "Invalid temperature input. Please provide a number.";
    }
  
    if (scale === "C") {
      return (temp - 32) * 5 / 9;
    } else if (scale === "F") {
      return (temp * 9 / 5) + 32;
    } else {
      return "Invalid scale. Please use 'C' or 'F'.";
    }
  }
  
  console.log(convertTemperature(32, "C")); 
  console.log(convertTemperature(212, "C"));
  console.log(convertTemperature(0, "F"));  
  console.log(convertTemperature(100, "F"));
  console.log(convertTemperature(25, "C")); 
  console.log(convertTemperature(-40, "C"));
  console.log(convertTemperature(-40, "F"));
  console.log(convertTemperature("abc", "C"));
  console.log(convertTemperature(32, "K")); 