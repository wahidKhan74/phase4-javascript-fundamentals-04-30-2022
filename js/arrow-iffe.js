(()=> {
    console.log("IIFE Arrow function");
})();

// parametrised iife
((username,password) => {
    function display() {
        console.log(`The user ${username} has password ${password}.`);
    }
    display();
})("mikesmith","mike@123");


// non parametrised iife
(() =>{
    let username = "johnsmith";
    let password = "john@123";
    display = () => {
        console.log(`The user ${username} has password ${password}.`);
    }
    display();
})();