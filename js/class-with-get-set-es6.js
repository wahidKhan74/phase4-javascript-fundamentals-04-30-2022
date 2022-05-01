// class decleration
class Account {
  
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

  // get & set methods from es6
  get Id(){ return this.id; }
  set Id(id) { this.id= id; }

  get Name(){ return this.name; }
  set Name(name) { this.name= name; }

  get Balance(){ return this.balance; }
  set Balance(balance) { this.balance= balance; }

  get Email(){ return this.email; }
  set Email(email) { this.email= email; }
}

// create account objet
let account = new Account(10001, "John Smith", 45646.56, 'john.smith@gmail.com');
console.log(account);

//set values
account.Id = 1000110;
account.Name = "Will Smith";
account.Balance =6456546.54;
account.Email = "will.smith@gmail.com";

//get values
console.log("Id : ", account.Id);
console.log("Name : ",account.Name);
console.log("Balance : ",account.Balance);
console.log("Email : ",account.Email);
console.log(account);

