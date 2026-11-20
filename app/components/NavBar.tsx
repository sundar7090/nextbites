import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">
            n
          </span>
          <span>
            next<span className="brand-accent">bites</span>
          </span>
        </Link>

        <div className="nav-links">
          <Link className="nav-link nav-link-active" href="#recipes">
            Recipes
          </Link>
          <Link className="nav-link" href="#about">
            About
          </Link>
        </div>

        <Link className="nav-cta" href="#recipes">
          Get cooking <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
