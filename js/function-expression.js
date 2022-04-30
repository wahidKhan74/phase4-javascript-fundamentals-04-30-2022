// A function expression is  a syntax to declare a function with assignment to varaible.
// function expression : 1) Labled function expression 2) Anonymous function expression

// syntax :
// let variableName = function functionName(x, y) { statements... return (z) };


// 1) Labled function expression 
let calculateAge = function calculate(yearOfBirth) {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hi Your calculated age is : ${age}`);
    return age;
}

// calculateRetirement(1990);  // Uncaught ReferenceError: Cannot access 'calculateRetirement' before initialization

// 2) Anonymous function expression
let calculateRetirement = function (yearOfBirth=1880) {
    let age = calculateAge(yearOfBirth); 
    if(age > 60) {
        console.log(`You are retired.`);
    } else{
        console.log(`You have ${60-age} remaining year for retirement`);
    }
    return 60-age;
}

// let remainingYears = calculateRetirement(1990);
calculateRetirement();

// console.log(calculateAge);
// console.log(calculateRetirement);

// call function expression
// calculate(1990);  // Uncaught ReferenceError: calculate is not define
// let resultAge = calculateAge(1990);  // Return value is associated with function call.
// console.log(resultAge);