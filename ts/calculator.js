// Calculator without callback.
function arithmaticCalculator(num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    }
    else if (calcType === "sub") {
        return num1 - num2;
    }
    else if (calcType === "mul") {
        return num1 * num2;
    }
    else if (calcType === "div") {
        return num1 / num2;
    }
    else {
        return "Invalid Operations";
    }
}
var num1 = 10000;
var num2 = 5000;
var response = arithmaticCalculator(num1, num2, "add");
console.log("Addition : ".concat(num1, " + ").concat(num2, " = ").concat(response));
console.log("Substraction : ".concat(num1, " - ").concat(num2, " = ").concat(arithmaticCalculator(num1, num2, "sub")));
console.log("Multipliaction : ".concat(num1, " * ").concat(num2, " = ").concat(arithmaticCalculator(num1, num2, "mul")));
console.log("Division : ".concat(num1, " / ").concat(num2, " = ").concat(arithmaticCalculator(num1, num2, "div")));
console.log("Average : ".concat(num1, " & ").concat(num2, " = ").concat(arithmaticCalculator(num1, num2, "avg")));
