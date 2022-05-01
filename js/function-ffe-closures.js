const response = (function () {
    return "hello";
})();
console.log(response);

// create planet
const planet = (function() {
    let status = false;
    return  {
        name : "Basit",
        create : function() {
            status = true;
        },
        distroy : function() {
            status = false;
        },
        show : function () {
            status ? console.log(`Your planet '${this.name}' is created  and Welcome to planet.`) 
            : console.log(`Your planet ${this.name} need to recreated.`) ;
        }
    }
})();

// console.log(planet);
planet.create();
planet.show();

planet.distroy();
planet.show();
