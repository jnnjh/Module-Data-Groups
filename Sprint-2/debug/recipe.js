// Predict and explain first...

//PREDICTION: like the way i did in author.js, i use the Object.values() method to iterate the values of the property.. Just this time i have to use recipe["ingredients"].

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${Object.values(recipe["ingredients"])}`);
