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
    if (recipe.name && recipe.vegan !== undefined) {
        recipes.push(recipe);
    }
    return recipes;
  };

  // Task: 2. delete a recipe that matches a given name
  
  const deleteRecipe = (recipes, recipeName) => {
    const updatedList = recipes.filter((recipe) => {
        return recipe.name != recipeName;
    })
    return updatedList;
  };
  //let deletedRecipe = deleteRecipe(recipes, "rice bowl");
  //console.log(deletedRecipe);
  
  // Task: 3. get only vegan recip
  const result = recipes.filter((recipe) => {
    return recipe.vegan;
  });

  // Task: 4. get the names of the ingredients of a recipe
  const getIngredientNames = (recipes, recipeName) => {
    const getARecipe = recipes.find(recipe =>  recipe.name === recipeName);
        const ingredientName = getARecipe.ingredients.map(ingredient => ingredient.name)
        return ingredientName;
    };
  //let ingredientNameList = getIngredientNames(recipes, "salmon soup");
  //console.log(ingredientNameList);
  
  // Task: 5. add a recipe to favorites
  const addToFavorites = (favorites, recipe) => {
    if (recipe !== undefined) {
        favorites.push(recipe);
      }
      
     return favorites;
    }
  
  // Task: 6. remove a recipe from favorites
  const removeFavorite = (favorites, recipeName) => {
    const filteredRecipe = favorites.filter(favorite => {
      if(favorite.name !== recipeName) {
        return favorite;
      }
    })
    return filteredRecipe;
  
  };
  
  let removedRecipe = removeFavorite(favorites, "Lentil Bolognese");
  //console.log(removedRecipe);

  // Task: 7. get the list of names of the recipes in favorites
  const nameOfRecipeFavorites = favorites.map(favorite => favorite.name);
  
  // Task: 8. edit a recipe - change the name
  const editRecipe = (recipes, oldName, newName) => {
    const recipeName = recipes.map(recipe => {
      if(recipe.name === oldName) {
          recipe.name = newName;
        }
        return recipe;
      })
    return recipeName;
  }
  let rename = editRecipe(recipes, "salmon soup", "Finnish salmon soup");
  //console.log(rename); 

  // Task: 9. edit a recipe - make it vegan / make it non-vegan
  const toggleVeganStatus = (recipes, recipeName) => {
    const filtered = recipes.filter(recipe => {
      return recipe.name === recipeName;
    })
    filtered.map(recipe => {
        if(recipe.vegan === false) {
          recipe.vegan = true;
        } else {
          recipe.vegan = false;
        }
      })
      return recipes;
  
  }
  // change "rice bowl" to be vegan
    
  // Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
  const searchByRecipeName = (recipes, recipeName) => {
    const recipeName = recipes.filter(recipe => recipe.name === recipeName)
    return recipeName;
  }

  // Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
  const searchByIngredientName = (recipes, ingredientName) => {
    // use filter and again filter through the ingredients
    const ingredientName1 = recipes.filter(item => {
      const recipeIngredientName = item.ingredients.filter(item => {
        return item.name === ingredientName;
      })
      return recipeIngredientName;
    }) 
    return ingredientName1;
  }
  
  // Task: 12. add an ingredient to a recipe
  const addIngredient = (recipes, recipeName, ingredient) => {
    // add the ingredient to the recipe that matches the recipename
    // return updatedList;
    const updatedRecipes = recipes.map(item => {
      if(item.name === recipeName){
          item.ingredients.push(ingredient);
      }
      return item;
    })
  
  return updatedRecipes;
  }
  
  // Task: 13. delete an ingredient from a recipe, 
  const deleteIngredient = (recipes, recipeName, ingredientName) => {
    // delete the ingredient of the recipe that matches the recipename
    // return updatedList;
    const updatedList = recipes.map((item) => {
      if(item.name === recipeName) {
        item.ingredients.filter((del) => {
          if(del.name != ingredientName) {
            return true;
          }
        })
      }
      return item;
    })
    return updatedList;
  }
  
  
  // Task: 14. edit a recipe - change the quantity of an ingredient
  const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
    // find the recipe by name
    // update the ingredients of the recipe you found to have newQuantity
    // use map to map each recipe to itself, but if the name matches the recipeName, update the ingredients
    // return the updated recipes array
    const updatedRecipeName = recipes.map(recipe => {
      if(recipe.name === recipeName) {
        recipe.ingredients.map(ingredient => {
          if(ingredient.name === ingredientName) {
            ingredient.quantity = newQuantity;
          }
          
        })
      }
      return recipe;
    })
    return updatedRecipeName;
  }
 
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
    //console.log(recipes);
  
    // Task: 15.2
    // Delete the recipe named "carbonara" using the function from Task-2
    let deletedRecipe = deleteRecipe(recipes, "carbonara");
    //console.log(deletedRecipe);
  
    // Task: 15.3
    // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
    let newIngredient = addIngredient(recipes, "salmon soup", {name: "garlic"})
    //console.log(newIngredient);
    let addIngredientQuantity = editIngredientQuantity(recipes, "salmon soup", "salmon", 2)
    //console.log(addIngredientQuantity);

    // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"
    let newIngredient2 = addIngredient(recipes, "rice bowl", {name: "lentil"})
    //console.log(newIngredient2);
  
    // Task: 15.4
    // Delete ingredient named "water" from the recipe "rice bowl"
    let deletedIngredientName = deleteIngredient(recipes, "rice bowl", "water");
    //console.log(deletedIngredientName);
  
    // Task: 15.5
    // Get the recipe by the name "Ozzo Chicken" and Add it to favorites
    // Get the recipe by the name "salmon soup" and Add it to favorites
    // Get the recipe by the name "Lentil Bolognese" and Add it to favorites
    favorites = addToFavorites(favorites, lentilBolognese); 
    //favorite1 = addToFavorites(favorites, OzzoChicken);
    //favorite2 = addToFavorites(favorites, "salmon soup");
  
    // Task: 15.6
    // Delete the recipe "Lentil Bolognese" from the favorites
    let removed = removeFavorite(favorites, "Lentil Bolognese");
    //console.log(removed);
  
    // Task: 15.7
    // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"
    let rename = editRecipe(recipes, "rice bowl", "Japanese Rice Bowl");
    //console.log(rename);
  
    // Task: 15.8
    // change "rice bowl" to be vegan
    recipes = toggleVeganStatus(recipes, "rice bowl");
  
    // Task: 15.9
    // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese

    // Task: 15.10
    // call the function you implemented on task-5 to get the list of ingredients of "salmon soup"
    let ingredientNameList = getIngredientNames(recipes, "salmon soup");
    console.log(ingredientNameList); 
    // TEST 1: it should print these ingredients: salmon, cream, milk, garlic
  
    // Task: 15.11
    console.log(result); //all the vegan recipes
    // TEST 2: It should print the recipe Japanese Rice Bowl
  
    // Task: 15.12
    let nameIngredient = searchByIngredientName(recipes, "lentil");
    console.log(nameIngredient);
    // console.log all the recipes that contain the ingredient "lentil"
    // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese
  
    // Task: 15.12
    console.log(favorites) //the favorites array
    // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"
  
    // Task: 15.13
    // console.log the recipes array
    // TEST 5: It should print an array of 4 recipes that matches expectedRecipesArray defined below
  }
  
  
  main();