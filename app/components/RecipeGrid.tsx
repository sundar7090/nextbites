"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visible = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`
      .toLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <>
      <label className="recipe-search">
        <span aria-hidden="true">⌕</span>
        <span className="sr-only">Search recipes or cuisines</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search recipes or cuisines..."
        />
      </label>

      {visible.length === 0 ? (
        <p className="empty-search" role="status">
          No recipes match “{query}”. Try another search.
        </p>
      ) : (
        <div className="recipe-grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}
