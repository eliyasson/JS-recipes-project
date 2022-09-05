function getRecipes() {
    return [{
      name: "salmon soup",
      vegan: false,
      ingredients: [{
          name: "salmon",
          quantity: 1,
        }, {
          name: "cream",
          quantity: 2,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "carbonara",
      vegan: false,
      ingredients: [{
          name: "pasta",
          quantity: 1,
        }, {
          name: "cheese",
          quantity: 5,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "rice bowl",
      vegan: false,
      ingredients: [{
          name: "rice",
          quantity: 2,
        }, {
          name: "water",
          quantity: 1,
        }
      ]
    }];
  }
  
  // Implement functions that perform the following tasks
  
  // Task: 1. Add a new recipe
  const addRecipe = (recipes, recipe) => {
    // check if recipe has name and vegan status
    // add recipe to recipes
    // return recipes array
    if(recipe.name && recipe.vegan !== undefined);
    recipes.push(recipe);
    return recipes;
  };

  const main = () => {
    let recipes = getRecipes();
    
    let favorites = [];
  
    // Task: 15.1
    // Add the following recipes to the recipes array using the function from Task-1
    //    Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion
    //    Ozzo Chicken, non-vegan, & Ingredients: 1 spinach; 1 chicken; 1 sour cream
    const lentilBolognese = { 
      name: "Lentil Bolognese",
      vegan: true,
      ingredients: [{
          name: "lentil",
          quantity: 2,
        }, {
          name: "tomatoes",
          quantity: 3,
        }, {
          name: "pasta",
          quantity: 1
        }, {
          name: "onion",
          quantity: 1
        }
      ]
    }; // fill in the attributes
    recipes = addRecipe(recipes, lentilBolognese); 
    //console.log(recipes);
    // add ozzo chicken in a similar way
    const OzzoChicken = {
      name: "Ozzo Chicken",
      vegan: false,
      ingredients: [{
          name: "spinach",
          quantity: 1,
        }, {
          name: "chicken",
          quantity: 1,
        }, {
          name: "sour cream",
          quantity: 1
        }
      ]

    };
    recipes = addRecipe(recipes, OzzoChicken);
    console.log(recipes);
  
    // Task: 15.2
    // Delete the recipe named "carbonara" using the function from Task-2
  
    // Task: 15.3
    // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
    // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"
  
    // Task: 15.4
    // Delete ingredient named "water" from the recipe "rice bowl"
  
    // Task: 15.5
    // Get the recipe by the name "Ozzo Chicken" and Add it to favorites
    // Get the recipe by the name "salmon soup" and Add it to favorites
    // Get the recipe by the name "Lentil Bolognese" and Add it to favorites
    favorites = addToFavorites(favorites, lentilBolognese);
  
    // Task: 15.6
    // Delete the recipe "Lentil Bolognese" from the favorites
  
    // Task: 15.7
    // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"
  
    // Task: 15.8
    // change "rice bowl" to be vegan
    recipes = toggleVeganStatus(recipes, "rice bowl");
  
    // Task: 15.9
    // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese
  
    // Task: 15.10
    // call the function you implemented on task-5 to get the list of ingredients of "salmon soup"
    // console.log these Ingredients
    // TEST 1: it should print these ingredients: salmon, cream, milk, garlic
  
    // Task: 15.11
    // console.log all the vegan recipes
    // TEST 2: It should print the recipe Japanese Rice Bowl
  
    // Task: 15.12
    // console.log all the recipes that contain the ingredient "lentil"
    // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese
  
    // Task: 15.12
    // console.log the favorites array
    // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"
  
    // Task: 15.13
    // console.log the recipes array
    // TEST 5: It should print an array of 4 recipes that matches expectedRecipesArray defined below
  }
  
  
  main();