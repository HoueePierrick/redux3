import React from "react";

// Importing react-redux hooks
import { useSelector, useDispatch } from "react-redux/es/exports";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

// Import removeRecipe from favoriteRecipesSlice.js
// === function to remove a recipe
import {
  removeRecipe,
  selectFilteredFavoriteRecipes,
} from "./favoriteRecipesSlice";
const unfavoriteIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

export const FavoriteRecipes = () => {
  // Selecting favorite recipes matching search
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);

  // Importing dispatch function
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe: any) => {
    // Dispatch a removeRecipe() action
    // === allowing it to work on state
    dispatch(removeRecipe(recipe));
  };

  // Helper Function === rendering favorite recipes
  function createRecipeComponent(recipe: any) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );
};
