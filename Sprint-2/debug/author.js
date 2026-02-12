// Predict and explain first...
//PREDICTION: "author" is not an array so value is not eqaul to it's property.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

const authArr = Object.values(author);
console.log(authArr); //if you wanna log it in an array.

for(values of authArr){
  console.log(values); // If you wanna log them one by one.
}


