// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.

// global variable
let firstName ="John";

//outer function 
function fullName() {
    
    let middleName = "William"; // outer variable

    // inner function :: nested function :: closure function
    function combine() {
        let lastName = "Smith";  // inner variable 

        return ` ${firstName}  ${middleName}  ${lastName}`;
    }

   return combine();
}

// closures function access prameters of inner and outer scope.
let pincode = 500001

/// outer function scope parameters.
function formulateAddress(state) {
    
    /// inner function scope parameters.
    function combineAdd(city) {
        return `Address : ${city} , ${state} , ${pincode} `;
    }
  return combineAdd("Texas");
}


let response = fullName();
console.log(response);

let address = formulateAddress("US");
console.log(address);