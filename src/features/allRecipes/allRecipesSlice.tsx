// File to set up the allRecipes slice of the state
import allRecipesData from "../../data";

// Import selector function from other slice
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

// Action (redux) to fetch data (normally from API)
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

const initialState: any[] = [];

// Action handler based on allRecipes === Reducer
// Care: favorite recipes are also managed from here!
export const allRecipesReducer = (allRecipes = initialState, action: any) => {
  switch (action.type) {
    // Fetching data from API
    case "allRecipes/loadData":
      return action.payload;
    // Adding a favorite recipe to list
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    // Removing a favorite recipe from list
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};

// Reducer exported to store

// Selector to take only allRecipes slice from state
export const selectAllRecipes = (state: any) => {
  return state.allRecipes;
};

// Selector to return only the recipes matching the search
export const selectFilteredAllRecipes = (state: any) => {
  // Getting all recipes
  const allRecipes = selectAllRecipes(state);

  // Getting search term
  const searchTerm = selectSearchTerm(state);

  // Finally filtering
  return allRecipes.filter((recipe: any) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
