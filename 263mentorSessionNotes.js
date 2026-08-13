// // // // ///////////////////////////////////////////////////////////////////////
// // // // //Week 4 Algorithms Christian Chourio video

// // // // // function tipCalculator(billTotal, tipPercentage) {
// // // // //   //multiply bill by tip percentage to get the tip
// // // // //   let tip = billTotal * tipPercentage;
// // // // //   //add the tip to the bill total
// // // // //   let total = billTotal + tip;
// // // // //   //return the final amount
// // // // //   return total;
// // // // // }
// // // // // console.log(tipCalculator(50, 0.2)); //60

// // // // // function processNumber(num, action) {
// // // // //   action(num);
// // // // // }
// // // // // processNumber(5, function (n) {
// // // // //   console.log(n * 2);
// // // // // });

// // // // // function printDouble(num) {
// // // // //   console.log(num * 2);
// // // // // }

// // // // // function printTriple(num) {
// // // // //   console.log(num * 3);
// // // // // }

// // // // // function printSquare(num) {
// // // // //   console.log(num * num);
// // // // // }

// // // // // printDouble(5);
// // // // // printTriple(5);
// // // // // printSquare(5);

// // // // // (5)
// // // // // (5)
// // // // // (5)

// // // // //Building Functions on Functions
// // // // //25:20 https://www.youtube.com/watch?v=SYGsbc4A2lQ

// // // // // function calculateAverage(scores) {
// // // // //   let total = 0;
// // // // //   for (let i = 0; i < scores.length; i++) {
// // // // //     total += scores[i];
// // // // //   }
// // // // //   return total / scores.length;
// // // // // }
// // // // // //console.log(calculateAverage([90, 90, 90, 90]));

// // // // // function getLetterGrade(average) {
// // // // //   if (average >= 90) {
// // // // //     return "A";
// // // // //   } else if (average >= 80) {
// // // // //     return "B";
// // // // //   } else if (average >= 70) {
// // // // //     return "C";
// // // // //   } else {
// // // // //     return "F";
// // // // //   }
// // // // // }
// // // // // //console.log(getLetterGrade(70));

// // // // // function passed(letterGrade) {
// // // // //   if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C") {
// // // // //     return "Pass";
// // // // //   } else {
// // // // //     return "Fail";
// // // // //   }
// // // // //   //   return letterGrade != 'F'
// // // // // }

// // // // // function printClassResult(className, student, scores) {
// // // // //   let avg = calculateAverage(scores);
// // // // //   let grade = getLetterGrade(avg);
// // // // //   let didPass = passed(grade);

// // // // //   console.log(`Clase: ${className}`);
// // // // //   console.log(`Estudiante: ${student}`);
// // // // //   console.log(`Promedio: ${avg}`);
// // // // //   console.log(`Nota: ${grade}`);
// // // // //   console.log(`Paso: ${didPass}`);
// // // // // }

// // // // // printClassResult("JavaScript", "Javier", [70, 80, 90, 70]);

// // // // //Challenge Convert Celcius to Fahrenheit
// // // // //Formula: F = C * 9/5
// // // // // function convertTemp(celcius) {
// // // // //   let fahrenheit = (celcius * 9) / 5 + 32;
// // // // //   return fahrenheit;
// // // // // }
// // // // // console.log(convertTemp(0));

// // // // //reverse a string
// // // // // function reverseString(str) {
// // // // //   let result = "";
// // // // //   for (let i = 0; i < str.length; i++) {
// // // // //     result += str[str.length - 1 - i];
// // // // //   }
// // // // //   return result;
// // // // // }
// // // // // console.log(reverseString("Hello"));

// // // // //Using a callback
// // // // // function buttonPushed() {
// // // // //   console.log("The button was pushed");
// // // // // }
// // // // // function simulateButtonPush(callback) {
// // // // //   callback();
// // // // // }
// // // // // simulateButtonPush(buttonPushed);

// // // // //Q1-5 algorithm functions (temp, reverse String, tip calculator, multiply, average)
// // // // //Q6-Q7 Prime numbers (isPrime, getPrimesUpTo)
// // // // //Q8-Q11 Grade calculator (building functions on functions)
// // // // //Q12-Q13 Callbacks

// // // // ///////////////////////////////////////////////////////////////////////
// // // // //Mau Toranzo Mentor Video 26.2 4/22/26

// // // // //Callbacks - a function you pass to another function, a function in a function. makes the code flexible and reusable

// // // // // function processNumber(num, action) {
// // // // //   action(num);
// // // // // }
// // // // // //how you use it
// // // // // processNumber(5, function (n) {
// // // // //   console.log(n * 2);
// // // // // });
// // // // // //the action is the callback. we decide later what it does.

// // // // // //example:
// // // // // function printDouble(num) {console.log(num * 2); }
// // // // // function pringTriple(num) {console.log(num * 3);}

// // // // // //callback creates on flexible function

// // // // // function processNumber(num, action) {
// // // // //     action(num);
// // // // // }
// // // // // processNumber(5, (n) => console.log(n*2));

// // // // //Analogy go out to do yardwork, you do dinner. Dinner is ready, you call the spouse back. Two things at once.

// // // // // function calculateAverage(scores) {
// // // // //   if (scores.length === 0) {
// // // // //     console.log("no scores found");
// // // // //     return;
// // // // //   }
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < scores.length; i++) {
// // // // //     sum = sum + scores[i];
// // // // //   }
// // // // //   return sum / scores.length;
// // // // // }
// // // // // function getLetterGrade(average) {
// // // // //   if (average > 100 || average < 0) {
// // // // //     return "invalid";
// // // // //   }
// // // // //   if (average >= 90) {
// // // // //     return "A";
// // // // //   }
// // // // //   if (average >= 80) {
// // // // //     return "B";
// // // // //   }
// // // // //   if (average >= 70) {
// // // // //     return "C";
// // // // //   }
// // // // //   if (average >= 60) {
// // // // //     return "D";
// // // // //   }
// // // // //   if (average < 60) {
// // // // //     return "F";
// // // // //   }
// // // // // }

// // // // // console.log(getLetterGrade(55));

// // // // //////////Simplified:
// // // // // function calculateAverage(scores) {
// // // // //   if (scores.length === 0) {
// // // // //     console.log("no scores found");
// // // // //     return;
// // // // //   }
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < scores.length; i++) {
// // // // //     sum = sum + scores[i];
// // // // //   }
// // // // //   return sum / scores.length;
// // // // // }
// // // // // function getLetterGrade(average) {
// // // // //   if (average > 100 || average < 0) return "invalid";
// // // // //   if (average >= 90) return "A";
// // // // //   if (average >= 80) return "B";
// // // // //   if (average >= 70) return "C";
// // // // //   if (average >= 60) return "D";
// // // // //   if (average >= 60) return "F";
// // // // // }

// // // // // console.log(getLetterGrade(55));

// // // // ///////////Alternate methods:

// // // // // function calculateAverage(scores) {
// // // // //   if (scores.length === 0) {
// // // // //     console.log("no scores found");
// // // // //     return;
// // // // //   }
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < scores.length; i++) {
// // // // //     sum = sum + scores[i];
// // // // //   }
// // // // //   return sum / scores.length;
// // // // // }
// // // // // function getLetterGrade(average) {
// // // // //   if (average >= 90) {
// // // // //     return "A";
// // // // //   } else if (average <= 90) {
// // // // //     return "B";
// // // // //   } else if (average <= 80) {
// // // // //     return "C";
// // // // //   } else if (average <= 70) {
// // // // //     return "D";
// // // // //   } else if (average <= 60) {
// // // // //     return "F";
// // // // //   }
// // // // // }

// // // // // console.log(getLetterGrade(20));

// // // // ///////////////////////////////////////////////////////////////////////
// // // // //Andrew Chu

// // // // //Callbacks - code continues to run as it's waiting for other information, one function being able to call another function

// // // // ///////////////////////////////////////////////////////////////////////
// // // // //Annie Kwon Mentor Vdeo

// // // // //Annie Kwon Mentor Old Video 26.2 4/27/26

// // // // //callback is a placeholder, a parameter name that will pass handleResult into the function. Callback function is the parameter telling you what function to use. So when you call the function, you put the function you want to use in the placeholder name.

// // // // //A callback function is a function passed as an argument into another function.
// // // // //A callback function is intended to be executed later

// // // // // function addNumber(a, b, callback) {
// // // // //   const result = a + b;
// // // // //   callback(result);
// // // // // }
// // // // // //pass the handleResult into the function
// // // // // function handleResult(result) {
// // // // //   console.log("The result is: " + result);
// // // // // }

// // // // // //placeholder, a box
// // // // // function addNumber(a, b, c) {
// // // // //   const result = a + b;
// // // // //   c(result);
// // // // // }

// // // // // function handleResult(result) {
// // // // //   console.log("The result is: " + result);
// // // // // }

// // // // // addNumber(4, 5, handleResult);

// // // // // // function pressButton(openGate){
// // // // // // openGate();
// // // // // // }

// // // // // function handleDifferentResult(result) {
// // // // //   console.log("This is the different result function: " + result);
// // // // // }
// // // // // addNumber(4, 5, handleDifferentResult);

// // // // // ---------- QUESTION 6 ----------
// // // // // Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// // // // // Hint: Prime numbers are numbers that are divisible by any number from 2 up to the square root of the number.  0 and 1 are not prime numbers. Wikipedia has a handy list of the first 1,000 prime numbers in an article called "List of prime numbers."
// // // // // Make sure you test several prime and non prime numbers along with 0 and 1.

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q6 isPrime: ", number, isPrime(number));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q6 isPrime: 12 false

// // // // // PUT YOUR CODE HERE

// // // // //function called isPrime, return t/f if number is prime or not. prime numbers are divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers. look up list of prime numbers to check. test several prime numbers, 0, and 1. up to the square root of the number

// // // // //if the number is less than 2, it is false
// // // // //if the number % 2 ==0, it is false
// // // // //if the number is 2, it is true

// // // // // number = 26;
// // // // // function isPrime(num) {
// // // // //   if (num < 2) return false;
// // // // //   if (num === 2) return true;
// // // // //   if (num % 2 === 0) return false;

// // // // //   for (let i = 3; i <= Math.sqrt(num); i += 2) {
// // // // //     if (num % i === 0) {
// // // // //       return false;
// // // // //     }
// // // // //   }
// // // // //   return true;
// // // // // }
// // // // // console.log("Q6 isPrime: ", number, isPrime(number));
// // // // //console.log(isPrime(0))
// // // // //console.log(isPrime(1))
// // // // //console.log(isPrime(30))

// // // // //use modulus modular
// // // // //if number is less than 2, it is false
// // // // //if the number % 2 == 0, it is false

// // // // //if number is 2 it is true
// // // // // if 0 or 1 false
// // // // // if number divided by 2 and remainder is 0, it is false

// // // // // ---------- QUESTION 7 ----------
// // // // // Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number.
// // // // // Be sure to include several test cases

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// // // // //loop using for loop, add together and divide by the length of the array

// // // // //8
// // // // //average = function
// // // // // function calculateAverage(array){

// // // // // }

// // // // // function getLetterGrade(average){

// // // // // }
// // // // // function passed(letterGrade){

// // // // // }

// // // // // function printClassResult(){

// // // // // }

// // // // // average = calculateAverage([2, 3, 4])
// // // // // letterGrade = getLetterGrade(average)
// // // // // passed = passed(letterGrade)

// // // // // printClassResult(averageLetterGradePassed)

// // // // //9 if or if else statements. pass avg score, check each condition 90-100 A

// // // // //----------------------------------
// // // // // LESSON 4 ALGORITHMS
// // // // //----------------------------------

// // // // // ---------- QUESTION 1 ----------
// // // // // Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// // // // // EXAMPLE LOG:
// // // // //    console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// // // // // EXAMPLE OUTPUT:
// // // // //    Q1 convertTemp: 0 32

// // // // // Call convertTemp with several different celsium temperatures

// // // // // PUT YOUR CODE HERE
// // // // let celsiusTemp = 0;
// // // // function convertTemp(celsiusTemp) {
// // // //   let fahrenheit = celsiusTemp * (9 / 5) + 32;
// // // //   return fahrenheit;
// // // // }

// // // // console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

// // // // // ---------- QUESTION 2 ----------
// // // // // Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Use a for loop.  Log both the input and output values.

// // // // // EXAMPLE LOG:
// // // // //    console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// // // // // EXAMPLE OUTPUT:
// // // // //    Q2 reverseString: HelloWorld dlroWolleH

// // // // // Call reverseString with several different strings.  Make sure it works for an empty string.

// // // // // // PUT YOUR CODE HERE
// // // // // let inputString = "HelloWorld";
// // // // // function reverseString(str) {
// // // // //   let reverse = "";
// // // // //   for (let i = str.length - 1; i >= 0; i--) {
// // // // //     reverse = reverse + str[i];
// // // // //   }
// // // // //   return reverse;
// // // // // }
// // // // // console.log("Q2 reverseString: ", inputString, reverseString(inputString));

// // // // // ---------- QUESTION 3 ----------
// // // // // Let's make a useful math problem - create a tip calculator!  Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.   Return the total bill amount

// // // // // EXAMPLE LOG:
// // // // //    console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// // // // // EXAMPLE OUTPUT:
// // // // //    Q3 tipCalculator: 50 0.2 60

// // // // // PUT YOUR CODE HERE

// // // // // Don't forget your console.logs!
// // // // // function tipCalculator(billTotal, tipPercentage) {
// // // // //   let tip = billTotal * tipPercentage;
// // // // //   let total = billTotal + tip;
// // // // //   return total;
// // // // // }

// // // // // console.log("Q3 tipCalculator: ", tipCalculator(50, 0.2));

// // // // // ---------- QUESTION 4 ----------
// // // // // Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// // // // // EXAMPLE LOG:
// // // // //    console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// // // // // EXAMPLE OUTPUT:
// // // // //    Q4 multiplyThese: 10 10 100

// // // // // PUT YOUR CODE HERE
// // // // // let num1 = 10;
// // // // // let num2 = 10;

// // // // // function multiplyThese(num1, num2) {
// // // // //   return num1 * num2;
// // // // // }
// // // // // console.log("Q4: ", num1, num2, multiplyThese(num1, num2));

// // // // // ---------- QUESTION 5 ----------
// // // // // Create a function called 'getAverage' that takes 2 parameters and returns their average.  NOTE: In some programming languages, the types of numbers you use in equations can affect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// // // // // EXAMPLE LOG:
// // // // //    console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// // // // // EXAMPLE OUTPUT:
// // // // //    Q5 getAverage: 3 6 4.5

// // // // // PUT YOUR CODE HERE

// // // // // function getAverage(number1, number2) {
// // // // //   return (number1 + number2) / 2.0;
// // // // // }
// // // // // console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));

// // // // // ---------- QUESTION 6 ----------
// // // // // Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// // // // // Hint: Prime numbers are numbers that are divisible by any number from 2 up to the square root of the number.  0 and 1 are not prime numbers. Wikipedia has a handy list of the first 1,000 prime numbers in an article called "List of prime numbers."
// // // // // Make sure you test several prime and non prime numbers along with 0 and 1.

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q6 isPrime: ", number, isPrime(number));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q6 isPrime: 12 false

// // // // // PUT YOUR CODE HERE

// // // // let number = 26;
// // // // function isPrime(num) {
// // // //   if (num < 2) return false;
// // // //   if (num === 2) return true;
// // // //   if (num % 2 === 0) return false;

// // // //   for (let i = 3; i <= Math.sqrt(num); i += 2) {
// // // //     if (num % i === 0) {
// // // //       return false;
// // // //     }
// // // //   }
// // // //   return true;
// // // // }
// // // // console.log("Q6 isPrime: ", number, isPrime(number));
// // // // console.log(isPrime(0));
// // // // console.log(isPrime(1));
// // // // console.log(isPrime(19));

// // // // // ---------- QUESTION 7 ----------
// // // // // Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number.
// // // // // Be sure to include several test cases

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// // // // // PUT YOUR CODE HERE
// // // // //returns array of all primes <= int

// // // // number = 13;
// // // // function getPrimesUpTo(int) {
// // // //   let primeNumbers = [];
// // // //   for (let i = 2; i <= int; i++) {
// // // //     if (isPrime(i)) {
// // // //       primeNumbers.push(i);
// // // //     }
// // // //   }
// // // //   return primeNumbers;
// // // // }
// // // // console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// // // // // ---------- QUESTION 8 ----------
// // // // // Now, we're going to write several functions that calculate a student's grade.
// // // // // First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// // // // // Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// // // // // Also, make sure that an empty array or no valid values in the array do not result in an error (hint: watch out for dividing by zero)

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q8 calculateAverage: 85  // input array let scores = [90, 80, 85];

// // // // // PUT YOUR CODE HERE

// // // // //write several fucntions to calculate a student's grade, write function called calculateAverage. input = array of scores, function - calculates average, output average
// // // // //check all grades (loop), ignore values not in 0-100 range
// // // // //make sure empty array or no valid values do not result in an error ex dividing by 0.

// // // // //let scores = [90, 80, 85];
// // // // // function calculateAverage(){

// // // // // }

// // // // // function calculateAverage(arr) {
// // // // //   let validScores = [];
// // // // //   for (let i = 0; i < scores.length; i++) {
// // // // //     if (scores(i) > 100 || scores(i) < 0) {
// // // // //       continue;
// // // // //     } else {
// // // // //       validScores.push[i];
// // // // //     }
// // // // //     //add each scores and divide by scores.length
// // // // //   } //addValid scores / validScores.length
// // // // // }
// // // // // console.log("Q8 calculateAverage: ", calculateAverage(scores));

// // // // // ---------- QUESTION 9 ----------
// // // // // Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale.  Make sure you test with several averages.
// // // // // A: 90–100
// // // // // B: 80–89
// // // // // C: 70–79
// // // // // D: 60–69
// // // // // F: below 60
// // // // // NOTE: Averages like 75.5 are fine to compare directly, but if calculateAverage ever returns a long decimal
// // // // // (e.g. 97.66666666666667), it's good practice to round it before displaying it to a user.
// // // // // Look up the .toFixed() method and consider using it when you log your average in Question 11.

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q9 getLetterGrade(95): A

// // // // // PUT YOUR CODE HERE

// // // // // ---------- QUESTION 10 ----------
// // // // // Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise.  Handle unexpected input values other than A,B,C,D or F.

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q10 passed('A'): ", passed('A'));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q10 passed('A''): true

// // // // // PUT YOUR CODE HERE

// // // // // ---------- QUESTION 11 ----------
// // // // // Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// // // // // Print yes if they have passed and no if they did not.

// // // // // EXAMPLE LOG:
// // // // //   console.log("Q11: ", printClassResult ("History 101", "Yuki Kawamura", [60, 70, 85, 87]));
// // // // // EXAMPLE OUTPUT:
// // // // //   Q11: History 101 - Student: Yuki Kawamura, Average: 75.5, Grade: C, Passed: yes

// // // // // PUT YOUR CODE HERE

// // // // // ---------------------------------------------------------------
// // // // // A NOTE BEFORE QUESTIONS 12 - 14: FUNCTIONS AS VALUES
// // // // // ---------------------------------------------------------------
// // // // // So far, every function you've written has been \*called\* directly, like multiplyThese(2, 3).
// // // // // But in JavaScript, a function is also just a value — like a number or a string — which means
// // // // // you can store it in a variable, put it in an array, or hand it to ANOTHER function as an argument.
// // // // //
// // // // // A function that is passed into another function to be run later is called a "callback."
// // // // // Callbacks are everywhere in JavaScript — they're how you tell code what to do when a button is
// // // // // clicked, when data finishes loading, or when a timer runs out.
// // // // //
// // // // // Before jumping into callbacks, let's warm up with the idea of functions as values.

// // // // // ---------- QUESTION 12 ----------
// // // // // Create a simple function called 'sayHello' that logs "Hello!" to the console.
// // // // // Then, WITHOUT calling sayHello() yourself, pass it directly into setTimeout so that it runs
// // // // // automatically after 1 second (1000 milliseconds).
// // // // // Notice that you are passing the function itself (sayHello), not the result of calling it (sayHello()).

// // // // // EXAMPLE CALL:
// // // // //   setTimeout(sayHello, 1000);

// // // // // EXAMPLE OUTPUT (after about 1 second):
// // // // //   Q12: Hello!

// // // // // PUT YOUR CODE HERE

// // // // // ---------- QUESTION 13 ----------
// // // // // Now, let's see how to use a callback.  First, create a function that simulates pushing a button.  Name the function buttonPushed and log the message "The button was pushed!" in the function.

// // // // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // // // //    buttonPushed();

// // // // // EXAMPLE OUTPUT: (we're using this function in the next question as well)
// // // // //   Q13, Q14: The button was pushed!

// // // // // PUT YOUR CODE HERE

// // // // // ---------- QUESTION 14 ----------
// // // // // Now, create a function called simulateButtonPush that takes a function as a parameter, and calls
// // // // // that function inside of it. Then pass the buttonPushed function (created in Question 12) into it.
// // // // // This is the same pattern you just used with setTimeout — simulateButtonPush doesn't know or care
// // // // // what buttonPushed does, it just knows it received a function and that its job is to call it.

// // // // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // // // //    simulateButtonPush(buttonPushed);

// // // // // EXAMPLE OUTPUT:
// // // // //   Q13, Q14: The button was pushed!

// // // // // PUT YOUR CODE HERE

// // // // // ---------- GITHUB TASK ----------
// // // // // This week, you merged your lesson-3 branch into the main branch of your practice GitHub repository.
// // // // // - Confirm that your main branch contains the \`index.html\` file from Lesson 3.
// // // // // - Then, from GitHub's web editor, copy the link to the main branch of the repository and paste it into the "second link to assignment field" in your assignment submission form.
// // // // // NO CODE FOR THIS SECTION

// // // //8 PUT YOUR CODE HERE
// // // function calculateAverage(scores) {
// // //   let sum = 0;
// // //   let validScores = 0;
// // //   for (let i = 0; i < scores.length; i++) {
// // //     if (scores[i] >= 0 && scores[i] <= 100) {
// // //       sum = sum + scores[i];
// // //       validScores++;
// // //     }
// // //   }
// // //   if (validScores === 0) {
// // //     return "No valid scores";
// // //   }
// // //   // console.log("sum", sum);
// // //   //console.log("valid scores", validScores);
// // //   let average = sum / validScores;
// // //   return average;
// // // }
// // // let scores = [90, 80, 85];
// // // console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // // scores = [];
// // // console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // // scores = [-100, 99, 365, 7, 24, 88];
// // // console.log("Q8 calculateAverage: ", calculateAverage(scores));

// // // // function calculateAverage(scores) {
// // // //   if(scores.length === 0) {
// // // //     console.log('No scores Found');
// // // //     return
// // // //   }
// // // // }

// // // // 9 PUT YOUR CODE HERE
// // // //get letter grade average. if avh > 100 || avg < 0 return invalid
// // // //if 90-100 = A 80-89
// // // function getLetterGrade(average) {
// // //   if (average < 0 || average > 100) {
// // //     return "Invalid Grade";
// // //   }
// // //   if (average >= 90 && average <= 100) {
// // //     return "A";
// // //   } else if (average >= 80) {
// // //     return "B";
// // //   } else if (average >= 70) {
// // //     return "C";
// // //   } else if (average >= 60) {
// // //     return "D";
// // //   } else {
// // //     return "F";
// // //   }
// // // }

// // // console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(89));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(75));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(65));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(55));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(105));
// // // console.log("Q9 getLetterGrade: ", getLetterGrade(-95));

// // // // 10 PUT YOUR CODE HERE
// // // function passed(letterGrade) {
// // //   if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C") {
// // //     return "Passed!";
// // //   } else if (letterGrade === "D" || letterGrade === "F") {
// // //     return "Did not pass";
// // //   } else {
// // //     return "Invalid Entry";
// // //   }
// // // }
// // // console.log("Q10 passed('A'): ", passed("A"));
// // // console.log("Q10 passed('F'): ", passed("F"));
// // // console.log("Q10 passed('P'): ", passed("P"));

// // // // ---------- QUESTION 11 ----------
// // // // Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// // // // Print yes if they have passed and no if they did not.

// // // // EXAMPLE LOG:
// // // //   console.log("Q11: ", printClassResult ("History 101", "Yuki Kawamura", [60, 70, 85, 87]));
// // // // EXAMPLE OUTPUT:
// // // //   Q11: History 101 - Student: Yuki Kawamura, Average: 75.5, Grade: C, Passed: yes

// // // // PUT YOUR CODE HERE

// // // function printClassResult(className, student, scores) {
// // //   let average = calculateAverage(scores);
// // //   let grade = getLetterGrade(average);
// // //   let didPass = passed(grade);

// // //   return `${className} - Student: ${student}, Average: ${average}, Grade: ${grade}, Passed: ${didPass}`;
// // // }

// // // console.log(printClassResult("Intro to programming", "Mau", [80, 80, 90]));

// // // console.log("Q11: ", printClassResult("History 101", "Yuki Kawamura", [60, 70, 85, 87]));

// // // // A NOTE BEFORE QUESTIONS 12 - 14: FUNCTIONS AS VALUES
// // // // ---------------------------------------------------------------
// // // // So far, every function you've written has been \*called\* directly, like multiplyThese(2, 3).
// // // // But in JavaScript, a function is also just a value — like a number or a string — which means
// // // // you can store it in a variable, put it in an array, or hand it to ANOTHER function as an argument.
// // // //
// // // // A function that is passed into another function to be run later is called a "callback."
// // // // Callbacks are everywhere in JavaScript — they're how you tell code what to do when a button is
// // // // clicked, when data finishes loading, or when a timer runs out.
// // // //
// // // // Before jumping into callbacks, let's warm up with the idea of functions as values.

// // // // ---------- QUESTION 12 ----------
// // // // Create a simple function called 'sayHello' that logs "Hello!" to the console.
// // // // Then, WITHOUT calling sayHello() yourself, pass it directly into setTimeout so that it runs
// // // // automatically after 1 second (1000 milliseconds).
// // // // Notice that you are passing the function itself (sayHello), not the result of calling it (sayHello()).

// // // // EXAMPLE CALL:
// // // //   setTimeout(sayHello, 1000);

// // // // EXAMPLE OUTPUT (after about 1 second):
// // // //   Q12: Hello!

// // // // PUT YOUR CODE HERE
// // // function sayHello() {
// // //   console.log("Q12: Hello!");
// // // }
// // // setTimeout(sayHello, 1000);

// // // // ---------- QUESTION 13 ----------
// // // // Now, let's see how to use a callback.  First, create a function that simulates pushing a button.  Name the function buttonPushed and log the message "The button was pushed!" in the function.

// // // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // // //    buttonPushed();

// // // // EXAMPLE OUTPUT: (we're using this function in the next question as well)
// // // //   Q13, Q14: The button was pushed!

// // // // PUT YOUR CODE HERE
// // // function buttonPushed() {
// // //   console.log("Q13 Q14: The button was pushed!");
// // // }
// // // buttonPushed();
// // // // ---------- QUESTION 14 ----------
// // // // Now, create a function called simulateButtonPush that takes a function as a parameter, and calls
// // // // that function inside of it. Then pass the buttonPushed function (created in Question 12) into it.
// // // // This is the same pattern you just used with setTimeout — simulateButtonPush doesn't know or care
// // // // what buttonPushed does, it just knows it received a function and that its job is to call it.

// // // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // // //    simulateButtonPush(buttonPushed);

// // // // EXAMPLE OUTPUT:
// // // //   Q13, Q14: The button was pushed!

// // // // PUT YOUR CODE HERE
// // // function simulateButtonPush(buttonPushed){
// // //   buttonPushed();
// // // }
// // // simulateButtonPush(buttonPushed);
// // // // ---------- GITHUB TASK ----------
// // // // This week, you merged your lesson-3 branch into the main branch of your practice GitHub repository.
// // // // - Confirm that your main branch contains the \`index.html\` file from Lesson 3.
// // // // - Then, from GitHub's web editor, copy the link to the main branch of the repository and paste it into the "second link to assignment field" in your assignment submission form.
// // // // NO CODE FOR THIS SECTION

// // //----------------------------------
// // // LESSON 4 ALGORITHMS
// // //----------------------------------

// // // ---------- QUESTION 1 ----------
// // // Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// // // EXAMPLE LOG:
// // //    console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// // // EXAMPLE OUTPUT:
// // //    Q1 convertTemp: 0 32

// // // Call convertTemp with several different celsium temperatures

// // // PUT YOUR CODE HERE
// // let celsiusTemp = 0;
// // function convertTemp(celsiusTemp) {
// //   let fahrenheit = celsiusTemp * (9 / 5) + 32;
// //   return fahrenheit;
// // }

// // console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

// // // ---------- QUESTION 2 ----------
// // // Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Use a for loop.  Log both the input and output values.

// // // EXAMPLE LOG:
// // //    console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// // // EXAMPLE OUTPUT:
// // //    Q2 reverseString: HelloWorld dlroWolleH

// // // Call reverseString with several different strings.  Make sure it works for an empty string.

// // // PUT YOUR CODE HERE
// // let inputString = "HelloWorld";
// // function reverseString(str) {
// //   let reverse = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     reverse = reverse + str[i];
// //   }
// //   return reverse;
// // }
// // console.log("Q2 reverseString: ", inputString, reverseString(inputString));

// // // ---------- QUESTION 3 ----------
// // // Let's make a useful math problem - create a tip calculator!  Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.   Return the total bill amount

// // // EXAMPLE LOG:
// // //    console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// // // EXAMPLE OUTPUT:
// // //    Q3 tipCalculator: 50 0.2 60

// // // PUT YOUR CODE HERE

// // // Don't forget your console.logs!
// // function tipCalculator(billTotal, tipPercentage) {
// //   let tip = billTotal * tipPercentage;
// //   let total = billTotal + tip;
// //   return total;
// // }

// // console.log("Q3 tipCalculator: ", tipCalculator(50, 0.2));

// // // ---------- QUESTION 4 ----------
// // // Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// // // EXAMPLE LOG:
// // //    console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// // // EXAMPLE OUTPUT:
// // //    Q4 multiplyThese: 10 10 100

// // // PUT YOUR CODE HERE
// // let num1 = 10;
// // let num2 = 10;

// // function multiplyThese(num1, num2) {
// //   return num1 * num2;
// // }
// // console.log("Q4: ", num1, num2, multiplyThese(num1, num2));

// // // ---------- QUESTION 5 ----------
// // // Create a function called 'getAverage' that takes 2 parameters and returns their average.  NOTE: In some programming languages, the types of numbers you use in equations can affect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// // // EXAMPLE LOG:
// // //    console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// // // EXAMPLE OUTPUT:
// // //    Q5 getAverage: 3 6 4.5

// // // PUT YOUR CODE HERE

// // function getAverage(number1, number2) {
// //   return (number1 + number2) / 2.0;
// // }
// // console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));

// // // ---------- QUESTION 6 ----------
// // // Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// // // Hint: Prime numbers are numbers that are divisible by any number from 2 up to the square root of the number.  0 and 1 are not prime numbers. Wikipedia has a handy list of the first 1,000 prime numbers in an article called "List of prime numbers."
// // // Make sure you test several prime and non prime numbers along with 0 and 1.

// // // EXAMPLE LOG:
// // //   console.log("Q6 isPrime: ", number, isPrime(number));
// // // EXAMPLE OUTPUT:
// // //   Q6 isPrime: 12 false

// // // PUT YOUR CODE HERE

// // let number = 26;
// // function isPrime(num) {
// //   if (num < 2) return false;
// //   if (num === 2) return true;
// //   if (num % 2 === 0) return false;

// //   for (let i = 3; i <= Math.sqrt(num); i += 2) {
// //     if (num % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // console.log("Q6 isPrime: ", number, isPrime(number));
// // console.log(isPrime(0));
// // console.log(isPrime(1));
// // console.log(isPrime(19));

// // // ---------- QUESTION 7 ----------
// // // Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number.
// // // Be sure to include several test cases

// // // EXAMPLE LOG:
// // //   console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// // // EXAMPLE OUTPUT:
// // //   Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// // // PUT YOUR CODE HERE
// // //returns array of all primes <= int

// // number = 13;
// // function getPrimesUpTo(int) {
// //   let primeNumbers = [];
// //   for (let i = 2; i <= int; i++) {
// //     if (isPrime(i)) {
// //       primeNumbers.push(i);
// //     }
// //   }
// //   return primeNumbers;
// // }
// // console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// // // ---------- QUESTION 8 ----------
// // // Now, we're going to write several functions that calculate a student's grade.
// // // First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// // // Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// // // Also, make sure that an empty array or no valid values in the array do not result in an error (hint: watch out for dividing by zero)

// // // EXAMPLE LOG:
// // //   console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // // EXAMPLE OUTPUT:
// // //   Q8 calculateAverage: 85  // input array let scores = [90, 80, 85];

// // // PUT YOUR CODE HERE
// // function calculateAverage(scores) {
// //   let sum = 0;
// //   let validScores = 0;
// //   for (let i = 0; i < scores.length; i++) {
// //     if (scores[i] >= 0 && scores[i] <= 100) {
// //       sum = sum + scores[i];
// //       validScores++;
// //     }
// //   }
// //   if (validScores === 0) {
// //     return "No valid scores";
// //   }
// //   //   console.log('sum', sum)
// //   //  console.log('valid scores', validScores)
// //   let average = sum / validScores;
// //   return average;
// // }
// // let scores = [90, 80, 85];
// // console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // scores = [];
// // console.log("Q8 calculateAverage: ", calculateAverage(scores));
// // scores = [-100, 99, 365, 7, 24, 88];
// // console.log("Q8 calculateAverage: ", calculateAverage(scores));

// // // ---------- QUESTION 9 ----------
// // // Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale.  Make sure you test with several averages.
// // // A: 90–100
// // // B: 80–89
// // // C: 70–79
// // // D: 60–69
// // // F: below 60
// // // NOTE: Averages like 75.5 are fine to compare directly, but if calculateAverage ever returns a long decimal
// // // (e.g. 97.66666666666667), it's good practice to round it before displaying it to a user.
// // // Look up the .toFixed() method and consider using it when you log your average in Question 11.

// // // EXAMPLE LOG:
// // //   console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// // // EXAMPLE OUTPUT:
// // //   Q9 getLetterGrade(95): A

// // // PUT YOUR CODE HERE
// // //get letter grade average. if avh > 100 || avg < 0 return invalid
// // //if 90-100 = A 80-89
// // function getLetterGrade(average) {
// //   if (average < 0 || average > 100) {
// //     return "Invalid Grade";
// //   }
// //   if (average >= 90 && average <= 100) {
// //     return "A";
// //   } else if (average >= 80) {
// //     return "B";
// //   } else if (average >= 70) {
// //     return "C";
// //   } else if (average >= 60) {
// //     return "D";
// //   } else {
// //     return "F";
// //   }
// // }

// // console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(89));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(75));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(65));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(55));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(105));
// // console.log("Q9 getLetterGrade: ", getLetterGrade(-95));

// // // ---------- QUESTION 10 ----------
// // // Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise.  Handle unexpected input values other than A,B,C,D or F.

// // // EXAMPLE LOG:
// // //   console.log("Q10 passed('A'): ", passed('A'));
// // // EXAMPLE OUTPUT:
// // //   Q10 passed('A''): true

// // // PUT YOUR CODE HERE
// // function passed(letterGrade) {
// //   if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C") {
// //     return true;
// //   } else if (letterGrade === "D" || letterGrade === "F") {
// //     return false;
// //   } else {
// //     return "Invalid Entry";
// //   }
// // }
// // console.log("Q10 passed('A'): ", passed("A"));
// // console.log("Q10 passed('F'): ", passed("F"));
// // console.log("Q10 passed('P'): ", passed("P"));

// // // ---------- QUESTION 11 ----------
// // // Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// // // Print yes if they have passed and no if they did not.

// // // EXAMPLE LOG:
// // //   console.log("Q11: ", printClassResult ("History 101", "Yuki Kawamura", [60, 70, 85, 87]));
// // // EXAMPLE OUTPUT:
// // //   Q11: History 101 - Student: Yuki Kawamura, Average: 75.5, Grade: C, Passed: yes

// // // PUT YOUR CODE HERE
// // function printClassResult(className, student, scores) {
// //   let average = calculateAverage(scores);
// //   let grade = getLetterGrade(average);
// //   let didPass = passed(grade);
// //   if (didPass === true) {
// //     didPass = "yes";
// //   } else {
// //     didPass = "no";
// //   }
// //   return `${className} - Student: ${student}, Average: ${average}, Grade: ${grade}, Passed: ${didPass}`;
// // }

// // console.log(printClassResult("Intro to programming", "Mau", [80, 80, 90]));

// // console.log("Q11: ", printClassResult("History 101", "Yuki Kawamura", [60, 70, 85, 87]));

// // // A NOTE BEFORE QUESTIONS 12 - 14: FUNCTIONS AS VALUES
// // // ---------------------------------------------------------------
// // // So far, every function you've written has been \*called\* directly, like multiplyThese(2, 3).
// // // But in JavaScript, a function is also just a value — like a number or a string — which means
// // // you can store it in a variable, put it in an array, or hand it to ANOTHER function as an argument.
// // //
// // // A function that is passed into another function to be run later is called a "callback."
// // // Callbacks are everywhere in JavaScript — they're how you tell code what to do when a button is
// // // clicked, when data finishes loading, or when a timer runs out.
// // //
// // // Before jumping into callbacks, let's warm up with the idea of functions as values.

// // // ---------- QUESTION 12 ----------
// // // Create a simple function called 'sayHello' that logs "Hello!" to the console.
// // // Then, WITHOUT calling sayHello() yourself, pass it directly into setTimeout so that it runs
// // // automatically after 1 second (1000 milliseconds).
// // // Notice that you are passing the function itself (sayHello), not the result of calling it (sayHello()).

// // // EXAMPLE CALL:
// // //   setTimeout(sayHello, 1000);

// // // EXAMPLE OUTPUT (after about 1 second):
// // //   Q12: Hello!

// // // PUT YOUR CODE HERE
// // function sayHello() {
// //   console.log("Q12: Hello!");
// // }
// // setTimeout(sayHello, 1000);

// // // ---------- QUESTION 13 ----------
// // // Now, let's see how to use a callback.  First, create a function that simulates pushing a button.  Name the function buttonPushed and log the message "The button was pushed!" in the function.

// // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // //    buttonPushed();

// // // EXAMPLE OUTPUT: (we're using this function in the next question as well)
// // //   Q13, Q14: The button was pushed!

// // // PUT YOUR CODE HERE
// // function buttonPushed() {
// //   console.log("Q13 Q14: The button was pushed!");
// // }
// // buttonPushed();

// // // ---------- QUESTION 14 ----------
// // // Now, create a function called simulateButtonPush that takes a function as a parameter, and calls
// // // that function inside of it. Then pass the buttonPushed function (created in Question 12) into it.
// // // This is the same pattern you just used with setTimeout — simulateButtonPush doesn't know or care
// // // what buttonPushed does, it just knows it received a function and that its job is to call it.

// // // EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
// // //    simulateButtonPush(buttonPushed);

// // // EXAMPLE OUTPUT:
// // //   Q13, Q14: The button was pushed!

// // // PUT YOUR CODE HERE
// // function simulateButtonPush(buttonPushed) {
// //   buttonPushed();
// // }
// // simulateButtonPush(buttonPushed);
// // // ---------- GITHUB TASK ----------
// // // This week, you merged your lesson-3 branch into the main branch of your practice GitHub repository.
// // // - Confirm that your main branch contains the \`index.html\` file from Lesson 3.
// // // - Then, from GitHub's web editor, copy the link to the main branch of the repository and paste it into the "second link to assignment field" in your assignment submission form.
// // // NO CODE FOR THIS SECTION

// const pets = [
//   { name: "Gideon", species: "cat", color: "white and brown tabby" },
//   { name: "Luna", species: "cat", color: "black" },
//   { name: "Coco", species: "cat", color: "brown tabby" },
// ];

// function printPets(arr) {
//   arr.forEach((obj) => {
//     console.log(obj);
//   });
// }
// console.log("Q6:");
// printPets(pets);

//----------------------------------
// LESSON 3 JAVASCRIPT OBJECTS
//----------------------------------

//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Objects
// This is the coding assignment for the third week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - Object Basics
//  - Primitive vs Object Types
//  - Manipulating Objects

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

// console.log("Q#: ", functionName(anyInput))

// ---------- QUESTION 1 ----------
// Objects are a way to store property:value pairs of data in a variable. First, create an object called 'myPet'. Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values. Use your console.log to print the object. Use your console.log's to print the values of each property to the console.

// EXAMPLE LOG:
//  console.log("Q1 object: ", myPet);
//  console.log("Q1 name: ", myPet.name);
//  console.log("Q1 species: ", myPet.species);
//  console.log("Q1 color: ", myPet.color);
// EXAMPLE OUTPUT:
//  Q1 object: { name: 'Teddy', species: 'ferret', color: 'brown' }
//  Q1 name: Teddy
//  Q1 species: ferret
//  Q1 color: brown

// PUT YOUR CODE HERE
let myPet = {
  name: "Rocky",
  species: "hamster",
  color: "white and orange",
};
console.log("Q1 object: ", myPet);
console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 ---------
// Now let's see how we can modify the properties. Modify the 'name' property of the 'myPet' object. This name should be different than the value used in Question 1 (e.g. Henry ). Use your console.log's to print the myPet console. Verify the 'name' property is different than the value in Question 1.

// EXAMPLE LOG:
//  console.log("Q2 updated object", myPet);
// EXAMPLE OUTPUT:
//  Q2 updated object: { name: 'Henry', species: 'ferret', color: 'brown' }

// PUT YOUR CODE HERE
myPet.name = "Henry";
console.log("Q2 updated object", myPet);

// ---------- QUESTION 3 ---------
// Use a for...in loop to iterate through each property of myPet. (See https://www.w3schools.com/js/js\_loop\_forin.asp for reference.)
// Write a for...in loop that iterates through each property in the myPet object and prints the property name and its value to the console in the following format:
// Q3: propertyName: propertyValue
// Use console.log() inside the loop to display each key-value pair.

// EXAMPLE LOG in the loop - replace <..> :
//  console.log("Q3: "+ <Supply key here> + ":", <Supply value here> );
// EXAMPLE OUTPUT:
//  Q3: name: Henry
//  Q3: species: ferret
//  Q3: color: brown

// PUT YOUR CODE HERE
for (let key in myPet) {
  console.log("Q3: " + key + ":", myPet[key]);
}
// ---------- QUESTION 4 ----------
// Define a method called 'describe' in the myPet object. This method should take no parameters and return a sentence using a template literal that describes your pet using its properties.

// Add a method named 'describe' to the myPet object.
// Inside the method, use a template literal to construct a sentence using the name, color, and species properties.
// Use console.log() to display the result in the format shown below.

// EXAMPLE LOG:
//  console.log("Q4: ", myPet.describe());
// EXAMPLE OUTPUT:
//  Q4: Teddy is a brown ferret.

//Stretch goal: Use "this" keyword. Instead of referencing the object name directly (e.g., myPet.name), update your method to use the this keyword to access the object's properties. This makes your method more flexible and reusable.

// PUT YOUR CODE HERE
myPet.describe = function () {
  return `${this.name} is a ${this.color} ${this.species}`;
};
console.log("Q4: ", myPet.describe());
//---------- QUESTION 5 ----------
//Using myPet, remove the property color. Verify the deletion by checking whether the myPet object still has a property named color. It returns true if the property exists and false otherwise

// EXAMPLE LOG:
//  console.log("Q5", "Color property deleted:", !myPet.hasOwnProperty('color'));
// EXAMPLE OUTPUT:
//  Q5 Color property deleted: true

// PUT YOUR CODE HERE

delete myPet.color;
//console.log(myPet.hasOwnProperty("color"));
console.log("Q5", "Color property deleted:", !myPet.hasOwnProperty("color"));

//---------- QUESTION 6 ----------
//Create a variable named pets and assign it an array containing three pet objects. Each object should include three properties: name, species, and color with appropriate values. Then, define a function called printPets that uses the forEach method to loop through the array and log each pet’s details to the console. Call console.log inside the function.

// EXAMPLE CALL:
//  const pets = [
//   { name: "WillBe", species: "bird", color:"gray"},
//   { name: "Oshie", species: "cat", color: "multi" },
//   { name: "Sunny", species: "dog", color: "black" } ]
//
// Call the function with the pets array
//    console.log ("Q6:");
//    printPets(pets);

// EXAMPLE OUTPUT:
//  Q6:
//  { name: 'WillBe', species: 'bird', color: 'gray' }
//  { name: 'Oshie', species: 'cat', color: 'multi' }
//  { name: 'Sunny', species: 'dog', color: 'black' }

// PUT YOUR CODE HERE

// const pets = [
//   { name: "Gideon", species: "cat", color: "white and brown tabby" },
//   { name: "Luna", species: "cat", color: "black" },
//   { name: "Coco", species: "cat", color: "brown tabby" },
// ];

// function printPets(arr) {
//   arr.forEach((obj) => {
//     console.log(obj);
//   });
// }

// console.log("Q6:");
// printPets(pets);
//---------- QUESTION 7 ----------
// So far you've been writing out each pet object by hand, property by property. That gets
// tedious fast if you need many similar objects — imagine typing out 20 pet objects like in Q6!
// A constructor function solves this: it's a reusable blueprint for creating objects that share
// the same structure, so you only describe the "shape" once and then just plug in new values.

// - Write a JavaScript constructor function named Dog that defines a blueprint for creating Dog objects.
// - Each Dog object should include the following properties: name, breed, and age.
// - Using this constructor, create two distinct Dog instances with different values for each property.
// - Finally, use console.log() to display both Dog instances in the console.

// EXAMPLE CALL:
//  Creating new Dog instances
//  let dog1 = new Dog("Kroger", "greyhound", 8);
//  let dog2 = new Dog("Destiny","shepherd" , 14);

// Displaying the Dog instances
//  console.log("Q7", dog1);
//  console.log("Q7", dog2);

// EXAMPLE OUTPUT:
//  Q7: Dog { name: 'Kroger', breed: 'greyhound', age: 8 }
//  Q7: Dog { name: 'Destiny', breed: 'shepherd', age: 14 }

// PUT YOUR CODE HERE
//constructor function named Dog, inc name, breed, age. Create 2 dog instances with diff values. use console.log() to display both instances

// function Dog(name, breed, age) {
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
// }
// let dog1 = new Dog("John", "Chihuahua", 5);
// let dog2 = new Dog("Luna", "Shih Tzu", 1);

// console.log("Q7:", dog1);
// console.log("Q7:", dog2);

//---------- QUESTION 8 ----------
// Write a function called isSameBreed(dog1, dog2) that takes two Dog objects
// and returns true if they have the same 'breed' value, and false otherwise.
//
// Reuse:
// - dog1 and dog2 from Question 7
// Then, create:
// - dog3: a new Dog with the SAME breed as dog1, but a different name and age.
//
// Use console.log() to test your function with a few comparisons.

// EXAMPLE CALL:
//  console.log("Q8: Same breed - dog1 vs dog2:", isSameBreed(dog1, dog2));
//  console.log("Q8: Same breed - dog1 vs dog3:", isSameBreed(dog1, dog3));

// EXAMPLE OUTPUT:
//  Q8: Same breed - dog1 vs dog2: false
//  Q8: Same breed - dog1 vs dog3: true

// PUT YOUR CODE HERE
// function isSameBreed(dog1, dog2) {
//   if (dog1.breed === dog2.breed) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let dog3 = new Dog("Gideon", "Schnauzer", 3);

// console.log("Q8: Same breed - dog1 vs dog2:", isSameBreed(dog1, dog2));
// console.log("Q8: Same breed - dog1 vs dog3:", isSameBreed(dog1, dog3));

//---------- QUESTION 9 ----------
//Learn how to use the built-in Date object in JavaScript to retrieve and display the current date. See https://www.w3schools.com/js/js\_dates.asp as a reference. Create a variable called currentDate. Assign it the value of a new Date() object.

// EXAMPLE CALL:
//  console.log("Q9: Current Date:", currentDate);

// EXAMPLE OUTPUT: Note Time will differ, below is an example only
//  Q9: Current Date: 2025-09-13T23:47:23.858Z

// PUT YOUR CODE HERE
// let currentDate = new Date();

// console.log("Q9: Current Date:", currentDate);

//---------- QUESTION 10 ----------
//Use JavaScript's Date object to retrieve specific parts of the current date. Using the currentDate from Question 9, write three separate lines of code to extract:

// - The year using .getFullYear()
// - The month using .getMonth() (remember: months are zero-indexed!)
// - The day using .getDate()
// - Use console.log() to display each value with a descriptive label.

// EXAMPLE CALL:
//  console.log("Q10 Year:", year);
//  console.log("Q10 Month:", month);
//  console.log("Q10 Day:", day);

// EXAMPLE OUTPUT: Note Time will differ, below is an example only
//  Q10 Year: 2025
//  Q10 Month: 9
//  Q10 Day: 13

// PUT YOUR CODE HERE
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDate();

// console.log("Q10 Year:", year);
// console.log("Q10 Month:", month);
// console.log("Q10 Day:", day);

//Sunset Contrast Palette:Midnight Blue: #191970Dodger Blue: #1E90FFDark Orange: #FF8C00Gold Accent: #FFD700

/* #fb9527; #f9f9f9  */
/* color: #ff5722; */
/* #8fa3e7; */
