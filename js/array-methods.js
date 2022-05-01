let users = ["johnsmith", null, true, 454655, { id: 1020, name:"johnsmith"}];

console.log(users);
console.log(users[3]);

// push : add elements at the end
users.push("mikesmith");
users.push({ name: "willsmith"} );
console.log(users);

// pop : remove elements from the end
users.pop();
users.pop();
console.log(users);

// unshift : add elements at the start
users.unshift("Mr.");
console.log(users);

// shift : remove elements from the start
users.shift();
console.log(users);

// slice : retireve a portion of array
let arrSlice = users.slice(2,4);
console.log(arrSlice);
