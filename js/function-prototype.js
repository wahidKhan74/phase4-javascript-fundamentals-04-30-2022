// create a constructor
function Account (id, name, balance, email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

// add properties into Account prototype
Account.prototype.nationality = "American";
Account.prototype.state = "Texas";


// add methods/function into Account prototype
Account.prototype.showBalance = function() {
    console.log(`The Balance is ${this.balance}`);
}

Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`After deposit , The Balance is ${this.balance}`);
}

Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
    console.log(`After withdraw, The Balance is ${this.balance}`);
}



let account1 = new Account(10001,'John smith', 346546.567, 'john.smith@gmail.com');
// account1.nationality = "Canadian";
console.log(account1);

// access prototype based value
console.log(account1.name);
console.log(account1.nationality);

// access prototype based methods
account1.showBalance();
account1.deposit(100000);
account1.withdraw(100000);


console.log("---------");
let account2 = new Account(10002,'Will smith', 867856756.567, 'will.smith@gmail.com');
// account2.state = "Toronto";
console.log(account2);
console.log(account2.name);
console.log(account2.nationality);

// access prototype based methods
account2.showBalance();
account2.deposit(100000);
account2.withdraw(100000);
