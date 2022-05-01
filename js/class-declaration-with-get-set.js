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

  // get & set methods
  getId(){ return this.id; }
  setId(id) { this.id= id; }

  getName(){ return this.name; }
  setName(name) { this.name= name; }

  getBalance(){ return this.balance; }
  setBalance(balance) { this.balance= balance; }

  getEmail(){ return this.email; }
  setEmail(email) { this.email= email; }
}

// create account objet
let account = new Account(10001, "John Smith", 45646.56, 'john.smith@gmail.com');

console.log(account);
//set values
account.setId(1000110);
account.setName("Will Smith");
account.setBalance(6456546.54);
account.setEmail("will.smith@gmail.com");

//get values
console.log("Id : ", account.getId());
console.log("Name : ",account.getName());
console.log("Balance : ",account.getBalance());
console.log("Email : ",account.getEmail());
console.log(account);

