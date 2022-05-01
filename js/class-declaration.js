// A JavaScript class is a blueprint for creating objects.
// A class encapsulates data and functions that manipulate data.
// Just like functions, classes can be defined as class decleration 7 expression syntax

// class decleration
class Account {
  // data members
  id;
  name;
  balance;
  email;

  // constructor
  constructor(id, name, balance, email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
  }

  // member function
  showBalance() {
    return this.balance;
  }

  depositAmount(amount) {
    return (this.balance += amount);
  }

  withdrawAmount(amount) {
    return (this.balance -= amount);
  }
}

// create account objet
let account = new Account(10001, "John Smith", 45646.56, 'john.smith@gmail.com');

console.log(account);
console.log("--------------");
console.log("id :" , account.id);
console.log("name :" , account.name);
console.log("balance :" , account.balance);
console.log("email :" , account.email);
console.log("--------------");
console.log("The balance :" , account.showBalance());
console.log("The balance :" , account.depositAmount(10000));
console.log("The balance :" , account.withdrawAmount(10000));
