// Calculator without callback.
function calculator(num1, num2, calcType) {
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

let x = 10000;
let y = 5000;

var response = calculator(x,y,"add");
console.log(`Addition : ${x} + ${y} = ${response}`);
console.log(`Substraction : ${x} - ${y} = ${calculator(x,y,"sub")}`);
console.log(`Multipliaction : ${x} * ${y} = ${calculator(x,y,"mul")}`);
console.log(`Division : ${x} / ${y} = ${calculator(x,y,"div")}`);
console.log(`Average : ${x} & ${y} = ${calculator(x,y,"avg")}`);