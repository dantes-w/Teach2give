// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".



for (let number = 1; number <= 100; number++) {
    
    if (number % 3 === 0) {
        console.log("Fizz");
    }
     else if (number % 5 === 0) {
        console.log("Buzz");
    } 
   
    
    else if(number % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } 
  
}

// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.


// const generateFibonacci=function(input) {
//     let fibonacciSequence = [0, 1]; // Initialize with the first two Fibonacci numbers
//     let i = 2; 
//     while (true) {
//         let nextFib = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; 
//         if (nextFib > input) break; 
//         fibonacciSequence.push(nextFib); 
//         i++;
//     }
//     return fibonacciSequence;
// }

// generateFibonacci()

// console.log(generateFibonacci(100));



// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.

// Examples:
// 8=> returns true
// 6=> returns false



const PowerOfTwo=function (num) {
    if (num <= 0) {
        return false; 
    }
    if (num === 1) {
        return true;
    }
    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num /= 2;
    }
    return true;
}

console.log(PowerOfTwo())




// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:

// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"



const string=function(stri=''){

    const initial=stri.toLowerCase();
    const next=initial[0].toUpperCase() + initial.slice(1);
    return next;

}

console.log(string('dan'))