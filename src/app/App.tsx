// Main file to render the app
import React from "react";

// Importing components
import { AllRecipes } from "../features/allRecipes/AllRecipes";
import { SearchTerm } from "../features/searchTerm/SearchTerm";
// Import the FavoriteRecipes component here.
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes.js";

export default function App() {
  return (
    <main>
      <section>
        {/* Search bar */}
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}
