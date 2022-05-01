// Calculator without callback.
function arithmaticCalculator(num1, num2, calcType) {
    if(calcType === "add") {
        return num1 + num2;
    } else if(calcType === "sub") {
        return num1 - num2;
    } else if(calcType === "mul") {
        return num1 * num2;
    } else if(calcType === "div") {
        return num1 / num2;
    } else {
        return"Invalid Operations";
    } 
}

let num1 = 10000;
let num2 = 5000;

var response = arithmaticCalculator(num1,num2,"add");
console.log(`Addition : ${num1} + ${num2} = ${response}`);
console.log(`Substraction : ${num1} - ${num2} = ${arithmaticCalculator(num1,num2,"sub")}`);
console.log(`Multipliaction : ${num1} * ${num2} = ${arithmaticCalculator(num1,num2,"mul")}`);
console.log(`Division : ${num1} / ${num2} = ${arithmaticCalculator(num1,num2,"div")}`);
console.log(`Average : ${num1} & ${num2} = ${arithmaticCalculator(num1,num2,"avg")}`);