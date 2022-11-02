// File to set up the favoriteRecipes slice of the state

// Importing function to filter slice based on search term
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const initialState: any[] = [];

// Action handler based on allRecipes === Reducer
// Care: favorite recipes are also managed from here!
export const favoriteRecipesReducer = (
  favoriteRecipes = initialState,
  action: any
) => {
  switch (action.type) {
    // Adding a favorite recipe
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    // Removing a favorite recipe
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};
// Reducer exported to store

// Action handler to add a favorite recipe
export function addRecipe(recipe: any) {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
}

// Action handler to remove a favorite recipe
export function removeRecipe(recipe: any) {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
}

// Selector to get all favorite recipes
export const selectFavoriteRecipes = (state: any) => {
  return state.FavoriteRecipes;
};

// Selector to filter favorite recipes based on search
export const selectFilteredFavoriteRecipes = (state: any) => {
  // Getting all favorite recipes from state
  const favoriteRecipes = selectFavoriteRecipes(state);
  // Getting search term from state
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe: any) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};
