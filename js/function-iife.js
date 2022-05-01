// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

(function () {
    console.log("IIFE :: Immediately Invoked Function Expression.");
})();

// non parametrised iife
(function() {
    let username = "johnsmith";
    let password = "john@123";
    function display() {
        console.log(`The user ${username} has password ${password}.`);
    }
    display();
})();

// parametrised iife
(function(username,password) {
    function display() {
        console.log(`The user ${username} has password ${password}.`);
    }
    display();
})("mikesmith","mike@123");