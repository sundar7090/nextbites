import type { Recipe } from "../data/recipes";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link className="recipe-card" href={`/recipe/${recipe.id}`}>
      <div className={`card-art card-art-${recipe.id}`} aria-hidden="true">
        <span className="card-emoji">{recipe.emoji}</span>
        <span className="card-art-sparkle">✳</span>
        <span className="card-art-orbit" />
      </div>

      <div className="card-content">
        <div className="card-eyebrow">
          <span>{recipe.cuisine}</span>
          <span className="card-dot" aria-hidden="true">
            ·
          </span>
          <span>{recipe.difficulty}</span>
        </div>
        <h3>{recipe.title}</h3>
        <p className="card-description">{recipe.description}</p>
        <div className="card-footer">
          <span className="card-time">
            <span aria-hidden="true">◷</span> {recipe.minutes} min
          </span>
          <span className="card-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
