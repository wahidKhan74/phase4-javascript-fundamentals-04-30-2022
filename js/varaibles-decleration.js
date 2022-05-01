// keyword var   :  var keyword has function level scope & can reassign the value.
// keyword let   :  let keyword has block level scope & can reassign the value.
// keyword const :  const keyword has block level scope & cannot reassign the value.

(function display() {
    var flag = true;

    if(flag) {
        var itemOne =  "Laptop";   // exist in function scope
        let itemTwo =  "Mobile";   // exist in if block scope
        const itemThree = "Watch"; // exist in if block scope

        // reassignment to varaible.
        itemOne = "Deskstop";
        itemTwo = "Smart phone";
       // itemThree = "Clock";  // Uncaught TypeError: Assignment to constant variable.

        console.log(itemOne);
        console.log(itemTwo);
        console.log(itemThree);
    } // if block

    console.log("---------------");
    console.log(itemOne);
    // console.log(itemTwo);  // Uncaught ReferenceError: itemTwo is not defined
    // console.log(itemThree);   // Uncaught ReferenceError: itemThree is not defined
})();