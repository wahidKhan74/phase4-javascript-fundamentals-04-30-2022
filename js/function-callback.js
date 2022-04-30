
// function callback  ->  When we pass a function as an argument to another function.


let x = function () {
    console.log("I am function X");
    return 0;
}

let y = function (a) {
    console.log("I am function Y");
    // console.log(a);
    a();  // calling  function
}

y( x );



y( function () {
    console.log("I am Anonymous function");
    return 0;
});