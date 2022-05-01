let listOfCompanies  = ["Google","Microsoft","Apple","Dell"];

console.log(listOfCompanies);
console.log(listOfCompanies[0]);
console.log(listOfCompanies[5]);  // undefined 

// iterate over arrays

for (let index = 0; index < listOfCompanies.length; index++) {
    const company = listOfCompanies[index];
    console.log(company);
}
console.log("-----------------");

listOfCompanies.forEach((company) => {
    console.log(company);
});
console.log("-----------------");

for (const company of listOfCompanies) {
    console.log(company);
}

console.log("-----------------");
for (const index in listOfCompanies) {
    const element = listOfCompanies[index];
    console.log(element);  
}