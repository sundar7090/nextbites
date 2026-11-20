import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main id="top">
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">
              ✳
            </span>
            YOUR NEXT FAVORITE MEAL STARTS HERE
          </p>
          <h1 id="hero-title">
            Find your
            <br />
            next <span className="headline-accent">bite.</span>
          </h1>
          <p className="hero-description">
            Little ideas for the meals you&apos;ll remember. Pick a recipe,
            grab what you need, and make something good.
          </p>
          <a className="primary-button" href="#recipes">
            Explore recipes <span aria-hidden="true">↓</span>
          </a>
          <p className="hero-note">
            <span className="note-avatars" aria-hidden="true">
              <span>🥑</span>
              <span>🍓</span>
              <span>🍋</span>
            </span>
            <span>Made for curious home cooks</span>
          </p>
        </div>

        <div className="hero-art" aria-label="A bowl of fresh, colorful food">
          <div className="hero-art-ring" />
          <span className="hero-sparkle hero-sparkle-one" aria-hidden="true">
            ✳
          </span>
          <span className="hero-sparkle hero-sparkle-two" aria-hidden="true">
            ✦
          </span>
          <div className="hero-food" aria-hidden="true">
            🥗
          </div>
          <div className="hero-sticker">
            <span className="sticker-star" aria-hidden="true">
              ✳
            </span>
            <span>GOOD FOOD</span>
            <span>GOOD MOOD</span>
          </div>
          <div className="hero-caption">
            <span className="caption-dot" />
            Fresh ideas, every day
          </div>
        </div>
      </section>

      <section className="recipe-section page-shell" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">A LITTLE INSPIRATION</p>
            <h2>On the menu<span className="headline-accent">.</span></h2>
          </div>
          <p className="section-description">
            Simple, feel-good recipes for whatever you&apos;re craving.
          </p>
        </div>

        <RecipeGrid recipes={recipes} />
      </section>

      <footer className="site-footer page-shell" id="about">
        <p className="footer-brand">
          next<span className="brand-accent">bites</span>
        </p>
        <p>A little inspiration for your everyday table.</p>
        <a href="#top" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
