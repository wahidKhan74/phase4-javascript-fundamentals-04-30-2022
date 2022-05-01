//  An arrow function expression is a compact alternative to a traditional function expression syntax.
//  Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function

let showMessage = function () {
    console.log(`Hello user, Welcome to JavaScript`);
}

showMessage();

// function as arrow function
let showData =  () => {
    console.log(`Hello user, Welcome to Arrow function`);
}
showData();


let calculateAge = (yearOfBirth) => {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hi Your calculated age is : ${age}`);
    return age;
}

calculateAge(1980);

let canVote  = (username,yearOfBirth) => {
    let age = calculateAge(yearOfBirth);
    if(age > 18){
        console.log(`Hello user ${username}, you can vote.`);
    } else {
        console.log(`Hello user ${username}, you cannot vote.`);
    }
}
console.log("----------------------")

canVote("mikesmith",1970);
canVote("johnsmith",2021);
console.log("----------------------")

// retirement calculator
let retirementCalculator = (name,yearOfBirth) => {
    let age = calculateAge(yearOfBirth);
    if(age>60){
        console.log(`${name} you are already retired .`);
    } else{
        console.log(`${name} you have ${60-age} years to get retired.`);
    }
}

retirementCalculator("John",1990);
retirementCalculator("John",1790);