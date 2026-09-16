import { createFileRoute, Link } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import catFurniture from "@/assets/cat-furniture.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catArt from "@/assets/cat-art.jpg";
import catSeating from "@/assets/cat-seating.jpg";
import { pieces, designers, restorationImages } from "@/data/pieces";
import { ProductCard } from "@/components/product-card";
import { BeforeAfter } from "@/components/before-after";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danish Modern L.A. — Vintage Danish Design, Restored by Hand" },
      {
        name: "description",
        content:
          "An LA gallery sourcing authentic vintage Danish and Mid-Century Modern furniture, restored in-house by master craftsmen since 2009.",
      },
      {
        property: "og:title",
        content: "Danish Modern L.A. — Vintage Danish Design, Restored by Hand",
      },
      {
        property: "og:description",
        content:
          "Authentic vintage Danish and Mid-Century Modern furniture, sourced in Scandinavia and restored by hand in Los Angeles.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { label: "Furniture", count: "112 pieces", image: catFurniture },
  { label: "Seating", count: "78 pieces", image: catSeating },
  { label: "Lighting", count: "43 pieces", image: catLighting },
  { label: "Fine Art", count: "29 works", image: catArt },
];

const stats: { value: string; label: string; stars?: boolean }[] = [
  { value: "15+", label: "Years of restoration craft" },
  { value: "8,000", label: "Pieces restored in-house" },
  { value: "80+", label: "Designers represented" },
  { value: "5.0", label: "549 five-star reviews", stars: true },
];

const trust = [
  {
    title: "Authenticity Guaranteed",
    copy: "Every piece is examined, dated, and attributed by our mid-century specialists before it reaches the floor.",
  },
  {
    title: "Worldwide White-Glove Shipping",
    copy: "Crated in-house and delivered by specialist art handlers, from Silver Lake to Copenhagen.",
  },
  {
    title: "Thirty-Day Returns",
    copy: "If a piece doesn't live in your room the way it lived in ours, send it back.",
  },
  {
    title: "Talk to a Specialist",
    copy: "The person who answers has handled the piece. No call centre, no scripts.",
  },
];

const testimonials = [
  {
    quote:
      "They found a Wegner daybed I'd been chasing for six years, then rebuilt the papercord as though it left the workshop yesterday.",
    name: "Marguerite L.",
    place: "Pasadena",
  },
  {
    quote:
      "The restoration notes alone convinced me. You can see exactly what was touched and what was left original.",
    name: "David K.",
    place: "New York",
  },
  {
    quote: "A real gallery with real craftsmen. Prices reflect that — and so does the furniture.",
    name: "Ines R.",
    place: "Mexico City",
  },
];

const instagramPosts = [
  { image: restorationImages.detail, caption: "Hand-oiling the joinery on a 1961 teak lounge" },
  { image: pieces[0]!.image, caption: "Møller dining table back on the gallery floor" },
  { image: catSeating, caption: "A morning corner of the Hyperion Avenue showroom" },
  { image: restorationImages.before, caption: "Before: sun-bleached teak, cracked rear rail" },
  { image: catLighting, caption: "Patinated brass lighting, freshly rewired" },
  { image: pieces[2]!.image, caption: "Sliding-door teak credenza, doors re-hung by hand" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={hero}
          alt="Restored Danish teak lounge chair in a sunlit Los Angeles gallery room"
          width={1920}
          height={1200}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10 lg:pb-24">
            <p className="label-caps text-bone/80">Sourced in Scandinavia · Restored in Los Angeles</p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
              Vintage Danish Design,
              <br />
              <em className="font-light italic">Restored by Hand</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80">
              We travel Denmark and Scandinavia for pieces worth saving, then return them to
              their original standard in our own LA workshop.
            </p>
            <Link to="/pieces/$slug" params={{ slug: pieces[0]!.slug }} className="btn-brass mt-10">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label-caps text-brass">Est. 2009 · Los Angeles</p>
            <h2 className="mt-6 max-w-2xl text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Not reproductions. Not a warehouse. A workshop with a gallery attached.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Twice a year we buy across Denmark, Sweden and Norway — estates, dealers, the
              back rooms of old cabinetmakers. Everything comes home to Hyperion Avenue, where
              our craftsmen strip, re-glue, re-cane and re-upholster using period-correct
              methods and materials. What you take home is one of one, with fifty years behind
              it and fifty more ahead.
            </p>
          </div>
          <div className="self-start">
            <dl className="grid grid-cols-2 gap-px bg-border lg:grid-cols-1">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-6 py-8 sm:px-8">
                  <dt className="font-display text-4xl leading-none text-walnut sm:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="label-caps mt-3 text-muted-foreground">
                    {s.stars ? (
                      <>
                        <span className="text-brass" aria-hidden="true">
                          ★★★★★
                        </span>
                        <span className="mt-1 block">{s.label}</span>
                      </>
                    ) : (
                      s.label
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="border border-t-0 border-border bg-background px-6 py-8 sm:px-8">
              <p className="label-caps text-muted-foreground">The Shop</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                2103 Hyperion Avenue
                <br />
                Los Angeles, CA 90027
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="rule-brass flex items-end justify-between pt-8">
          <h2 className="text-3xl text-ink sm:text-4xl">Browse the Gallery</h2>
          <Link to="/" className="label-caps link-underline hidden text-ink/70 sm:block">
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.label} to="/" className="group relative img-reveal">
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl text-bone">{c.label}</h3>
                <p className="label-caps mt-1 text-bone/70">{c.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craft in progress */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <BeforeAfter before={restorationImages.before} after={restorationImages.after} />
          <div>
            <p className="label-caps text-brass">Craft in Progress</p>
            <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Why a restored chair costs what it costs
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              This 1961 teak lounge arrived with a cracked rear rail, sun-bleached grain and
              foam that had turned to dust. Our cabinetmaker knocked the frame apart, made a
              new rail from salvaged period teak, and re-glued with hide glue so the joint
              stays serviceable a century from now. The frame was hand-sanded through four
              grits and finished with Danish oil — no lacquer, no filler, no shortcuts.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Frame disassembled, re-cut and re-glued with hide glue",
                "Hand-oiled finish, four grits, no sprayed lacquer",
                "Reupholstered in Kvadrat wool over horsehair and jute webbing",
              ].map((line) => (
                <li key={line} className="flex gap-4 border-t border-border pt-4 text-sm text-ink/80">
                  <span className="label-caps text-brass">—</span>
                  {line}
                </li>
              ))}
            </ul>
            <Link to="/" className="btn-outline-ink mt-10">
              Our Restoration Process
            </Link>
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="rule-brass flex items-end justify-between pt-8">
          <div>
            <p className="label-caps text-brass">Just off the bench</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">New Arrivals</h2>
          </div>
          <Link to="/" className="label-caps link-underline hidden text-ink/70 sm:block">
            All new arrivals
          </Link>
        </div>
        <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 lg:mx-0 lg:px-0">
          {pieces.map((p) => (
            <ProductCard
              key={p.slug}
              piece={p}
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[calc((100%-4rem)/3)]"
            />
          ))}
        </div>
      </section>

      {/* Designers */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="label-caps text-brass">Shop by Designer</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
            The hands behind the century
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {designers.map((d) => (
              <Link
                key={d.name}
                to="/"
                className="group relative overflow-hidden bg-ink transition-colors hover:bg-walnut"
              >
                <div className="img-reveal aspect-square w-full">
                  <img
                    src={d.image}
                    alt={`${d.signature} in the style of ${d.name}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-bone">{d.name}</h3>
                  <p className="label-caps mt-1 text-bone/60">{d.years}</p>
                  <p className="mt-3 font-display text-base italic text-brass">{d.signature}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              What buying from a gallery means
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {trust.map((t) => (
                <div key={t.title} className="border-t border-brass/40 pt-5">
                  <h3 className="text-xl text-ink">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-parchment p-10 lg:p-14">
            <p className="font-display text-5xl leading-none text-walnut">5.0</p>
            <p className="label-caps mt-3 text-muted-foreground">★★★★★ · 549 Reviews</p>
            <ul className="mt-10 space-y-8">
              {testimonials.map((t) => (
                <li key={t.name} className="border-t border-border pt-6">
                  <blockquote className="font-display text-xl leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                  <p className="label-caps mt-4 text-muted-foreground">
                    {t.name} · {t.place}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery tour */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="rule-brass pt-8">
          <p className="label-caps text-brass">Film</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">A walk through the gallery</h2>
        </div>
        <div className="mt-10 border border-border p-2 sm:p-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink">
            <img
              src={restorationImages.detail}
              alt="Artisan oiling the joinery of a mid-century chair in the workshop"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover opacity-70"
            />
            <button
              aria-label="Play gallery tour"
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid size-20 place-items-center rounded-full border border-bone/60 text-bone transition-colors hover:border-brass hover:text-brass">
                <svg viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Visit the gallery */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="label-caps text-brass">Visit Us</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              One gallery. Silver Lake, Los Angeles.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Everything we restore is sold from a single showroom on Hyperion Avenue — the
              same building as the workshop. Walk in, sit in the chairs, and meet the people
              who rebuilt them.
            </p>
            <address className="mt-10 space-y-6 text-sm not-italic text-ink/80">
              <div className="border-t border-brass/40 pt-4">
                <p className="label-caps text-muted-foreground">Address</p>
                <p className="mt-2">
                  2103 Hyperion Avenue, Los Angeles, CA 90027
                </p>
              </div>
              <div className="border-t border-brass/40 pt-4">
                <p className="label-caps text-muted-foreground">Gallery Hours</p>
                <p className="mt-2">
                  Tuesday – Saturday, 11am – 6pm
                  <br />
                  Sunday &amp; Monday by appointment
                </p>
              </div>
              <div className="border-t border-brass/40 pt-4">
                <p className="label-caps text-muted-foreground">Contact</p>
                <p className="mt-2">
                  (323) 555-0119 · studio@danishmodernla.com
                </p>
              </div>
            </address>
            <a
              href="https://maps.google.com/?q=2103+Hyperion+Avenue+Los+Angeles+CA+90027"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-ink mt-10"
            >
              Get Directions
            </a>
          </div>
          <div className="border border-border p-2">
            <iframe
              title="Map to Danish Modern L.A. at 2103 Hyperion Avenue, Los Angeles"
              src="https://www.google.com/maps?q=2103%20Hyperion%20Avenue%2C%20Los%20Angeles%2C%20CA%2090027&output=embed"
              loading="lazy"
              className="aspect-[4/3] w-full grayscale-[30%]"
            />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="rule-brass flex flex-wrap items-end justify-between gap-4 pt-8">
          <div>
            <p className="label-caps text-brass">Instagram</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">@danishmodernla</h2>
          </div>
          <a
            href="https://www.instagram.com/danishmodernla/"
            target="_blank"
            rel="noreferrer"
            className="label-caps link-underline text-ink/70"
          >
            Follow the studio
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.caption}
              href="https://www.instagram.com/danishmodernla/"
              target="_blank"
              rel="noreferrer"
              className="img-reveal group relative block"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                width={640}
                height={640}
                className="aspect-square w-full object-cover"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-teak text-bone">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="text-3xl sm:text-4xl">Get first access to new restorations</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/70">
              One letter a month. New pieces leave the bench before they reach the site.
            </p>
          </div>
          <form
            className="flex w-full max-w-md items-center gap-4 border-b border-bone/40 pb-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="w-full bg-transparent text-sm text-bone placeholder:text-bone/50 focus:outline-none"
            />
            <button type="submit" className="label-caps shrink-0 text-brass">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
