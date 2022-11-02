// File to set up the favoriteRecipes slice of the state
const initialState = "";

// Action handler based on allRecipes === Reducer
// Care: favorite recipes are also managed from here!
export const searchTermReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Setting search term
    case "searchTerm/setSearchTerm":
      return action.payload;
    // Clearing search term
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return state;
  }
};
// Reducer exported to store

// Action handler to set search term state
export function setSearchTerm(term: any) {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
}

// Action handler to clear search term state
export function clearSearchTerm() {
  return {
    type: "searchTerm/clearSearchTerm",
  };
}

// Selector === Function to extract only relevant part of the state
// Here it's the search term
export const selectSearchTerm = (state: any) => state.searchTerm;
