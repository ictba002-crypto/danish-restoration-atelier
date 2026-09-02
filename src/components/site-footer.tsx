import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Shop",
    links: ["New Arrivals", "Furniture", "Seating", "Lighting", "Fine Art", "Designers"],
  },
  { title: "Company", links: ["Our Story", "Press", "Reviews", "Visit the Gallery"] },
  {
    title: "Services",
    links: [
      "Refinishing & Upholstery",
      "Trade Program",
      "We Buy Danish Modern",
      "Affirm Financing",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.1fr]">
          <div>
            <p className="font-display text-2xl leading-none">Danish Modern</p>
            <p className="label-caps mt-2 text-brass">Los Angeles</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/65">
              Sourced across Denmark and Scandinavia. Restored by hand in our Los Angeles
              studio since 2009.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="label-caps text-bone/50">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link to="/" className="text-sm text-bone/80 transition-colors hover:text-brass">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-caps text-bone/50">Contact</h4>
            <address className="mt-5 space-y-3 text-sm not-italic text-bone/80">
              <p>
                2103 Hyperion Avenue
                <br />
                Los Angeles, CA 90027
              </p>
              <p>(323) 555-0119</p>
              <p>studio@danishmodernla.com</p>
            </address>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Pinterest", "1stDibs"].map((s) => (
                <Link key={s} to="/" className="label-caps text-bone/60 hover:text-brass">
                  {s.slice(0, 2)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-bone/15 pt-6 sm:flex-row">
          <p className="label-caps text-bone/40">© 2026 Danish Modern L.A.</p>
          <p className="label-caps text-bone/40">Authenticity Guaranteed · Worldwide Shipping</p>
        </div>
      </div>
    </footer>
  );
}
