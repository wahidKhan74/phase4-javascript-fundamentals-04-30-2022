let userMap = new Map();

// add values in map
userMap.set(10001, "johnsmith");   // key is number values is string
userMap.set(true, "married");   // key is boolean values is string
userMap.set(null, "empty");   // key is null values is string
userMap.set({id:10001, name:"mike"}, "user");   // key is object values is string
userMap.set("user", {id:10002, name:"john"});   // key is string values is object

//print map
console.log(userMap);

//access data from map
console.log(userMap.get(10001));
console.log(userMap.get("user"));
console.log(userMap.get(null));
console.log("---------------");

// get only keys
console.log(userMap.keys());

// get only values
console.log(userMap.values());

for (const key of userMap.keys()) {
    console.log("Key  : "+key +" ,  value : "+userMap.get(key));
}

