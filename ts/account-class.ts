// A JavaScript class is a blueprint for creating objects.
// A class encapsulates data and functions that manipulate data.
// Just like functions, classes can be defined as class decleration 7 expression syntax

// class decleration
class BankAccount {
    // data members
    public id;
    public name;
    public balance;
    public email;
  
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
  let bankAccount = new BankAccount(10001, "John Smith", 45646.56, 'john.smith@gmail.com');
  
  console.log(bankAccount);
  console.log("--------------");
  console.log("id :" , bankAccount.id);
  console.log("name :" , bankAccount.name);
  console.log("balance :" , bankAccount.balance);
  console.log("email :" , bankAccount.email);
  console.log("--------------");
  console.log("The balance :" , bankAccount.showBalance());
  console.log("The balance :" , bankAccount.depositAmount(10000));
  console.log("The balance :" , bankAccount.withdrawAmount(10000));
  