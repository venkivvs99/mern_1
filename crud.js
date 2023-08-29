// Create an initial object with 5 properties
let person = {
    firstName: "venu",
    lastName: "jann",
    age: 30,
    email: "venu@gmail.com",
    city: "vijayawada"
};

// Read operation
console.log("Read - Initial Object:", person);

// Update operation
person.age = 31;
person.city = "Los Angeles";
console.log("Update - Updated Object:", person);

// Create operation (adding a new property)
person.gender = "Male";
console.log("Create - Object with New Property:", person);

// Delete operation
delete person.email;
console.log("Delete - Object after Deleting Email:", person);
