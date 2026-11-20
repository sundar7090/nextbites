import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export const instant = false;

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail-page page-shell">
      <Link className="back-link" href="/#recipes">
        <span aria-hidden="true">←</span> Back to recipes
      </Link>

      <article className="recipe-detail">
        <div className={`detail-art card-art-${recipe.id}`} aria-hidden="true">
          <span className="detail-emoji">{recipe.emoji}</span>
          <span className="detail-sparkle">✳</span>
        </div>

        <div className="detail-content">
          <p className="detail-eyebrow">
            {recipe.cuisine} · {recipe.difficulty}
          </p>
          <h1>{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>

          <div className="detail-meta">
            <span>
              <strong>{recipe.minutes}</strong>
              <small>minutes</small>
            </span>
            <span>
              <strong>{recipe.difficulty}</strong>
              <small>difficulty</small>
            </span>
          </div>

          <div className="detail-lists">
            <section>
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Steps</h2>
              <ol>
                {recipe.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
