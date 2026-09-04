import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { pieces, designers, restorationImages } from "@/data/pieces";
import { ProductCard } from "@/components/product-card";
import { BeforeAfter } from "@/components/before-after";

export const Route = createFileRoute("/pieces/$slug")({
  loader: ({ params }) => {
    const piece = pieces.find((p) => p.slug === params.slug);
    if (!piece) throw notFound();
    return { piece };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Piece not found — Danish Modern L.A." }, { name: "robots", content: "noindex" }],
      };
    }
    const { piece } = loaderData;
    const title = `${piece.name} — ${piece.designer} | Danish Modern L.A.`;
    const description = `${piece.name} by ${piece.designer}, ${piece.origin}. Fully restored by hand in our Los Angeles studio and authenticated by our mid-century specialists.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductDetail,
});

const restorationNotes = [
  {
    label: "Structure",
    copy: "Frame fully disassembled, joints cleaned of old glue and re-set with hide glue. One rear stretcher replaced with salvaged period teak, grain-matched.",
  },
  {
    label: "Finish",
    copy: "Stripped by hand, sanded through 120/180/240/320 grit, then three coats of Danish oil cut back between coats. No lacquer, no filler, no stain.",
  },
  {
    label: "Upholstery",
    copy: "New jute webbing over the original beech rails; horsehair and natural latex pad; Kvadrat wool bouclé in undyed oat.",
  },
  {
    label: "Left original",
    copy: "Maker's stamp, original brass fittings and the patina on the arm caps — the marks that prove the piece lived.",
  },
];

function ProductDetail() {
  const { piece } = Route.useLoaderData();
  const gallery = [piece.image, restorationImages.after, restorationImages.detail];
  const [active, setActive] = useState(0);
  const designer =
    designers.find((d) => d.name === piece.designer) ?? {
      name: piece.designer,
      years: "Danish cabinetmaker",
      bio: "A workshop whose output defined the Danish Modern period and remains sought after worldwide.",
      image: undefined as string | undefined,
      signature: undefined as string | undefined,
    };
  const related = pieces.filter((p) => p.slug !== piece.slug).slice(0, 3);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1440px] px-6 py-6 lg:px-10">
        <ol className="label-caps flex flex-wrap gap-2 text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link to="/" className="hover:text-ink">
              Furniture
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link to="/" className="hover:text-ink">
              {piece.designer}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-ink">{piece.name}</li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-10">
        {/* Gallery */}
        <div>
          <div className="bg-parchment">
            <img
              src={gallery[active]}
              alt={`${piece.name} by ${piece.designer}`}
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-4">
            {gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`w-24 bg-parchment transition-opacity ${
                  active === i ? "opacity-100 ring-1 ring-brass" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="lg:pt-4">
          <Link to="/" className="label-caps link-underline text-brass">
            {piece.designer}
          </Link>
          <h1 className="mt-5 text-4xl leading-tight text-ink lg:text-5xl">{piece.name}</h1>
          <p className="mt-4 font-display text-xl italic text-muted-foreground">{piece.origin}</p>

          <p className="mt-8 text-2xl text-ink">{piece.price}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            or from {monthly(piece.price)}/mo with Affirm
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-brass">Add to Cart</button>
            <button className="btn-outline-ink">Inquire</button>
            <button className="btn-outline-ink">Request a Hold</button>
          </div>

          <div className="mt-10 border border-brass/40 bg-parchment p-6">
            <p className="label-caps text-brass">Provenance & Authenticity</p>
            <p className="mt-3 font-display text-xl leading-snug text-ink">
              Authenticated by our Mid-Century Modern experts, in the trade since 2009.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Attribution confirmed by maker's stamp and construction detail. Acquired directly
              from a private estate outside Aarhus.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-8 text-sm">
            {[
              ["Dimensions", "29″ W × 31″ D × 30.5″ H · Seat 16″"],
              ["Materials", "Solid teak, wool bouclé, brass"],
              ["Era", "Designed c. 1961"],
              ["Origin", "Denmark"],
              ["Condition", "Excellent · fully restored"],
              ["Reference", "DMLA-2261"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label-caps text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Restoration record */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="label-caps text-brass">The Restoration Record</p>
            <h2 className="mt-5 text-3xl leading-tight text-ink lg:text-4xl">
              Everything we touched, and everything we left alone
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Sixty-four hours of bench time by two craftsmen in our Hyperion Avenue workshop.
              Period-correct methods and materials throughout.
            </p>
            <dl className="mt-10 space-y-6">
              {restorationNotes.map((n) => (
                <div key={n.label} className="border-t border-border pt-5">
                  <dt className="label-caps text-ink">{n.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
          <BeforeAfter before={restorationImages.before} after={restorationImages.after} />
        </div>
      </section>

      {/* Designer spotlight */}
      <section className="bg-ink text-bone">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex max-w-3xl gap-8">
            {designer.image && (
              <div className="hidden shrink-0 overflow-hidden sm:block sm:w-32 md:w-40">
                <img
                  src={designer.image}
                  alt={`${designer.signature} in the style of ${designer.name}`}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="label-caps text-brass">Designer Spotlight</p>
              <h2 className="mt-4 text-3xl lg:text-4xl">{designer.name}</h2>
              <p className="label-caps mt-2 text-bone/45">{designer.years}</p>
              <p className="mt-5 text-base leading-relaxed text-bone/75">{designer.bio}</p>
              {designer.signature && (
                <p className="mt-3 font-display text-lg italic text-brass">{designer.signature}</p>
              )}
            </div>
          </div>
          <Link to="/" className="btn-brass shrink-0">
            All {designer.name.split(" ").slice(-1)} pieces
          </Link>
        </div>
      </section>


      {/* Related */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-28">
        <div className="rule-brass pt-8">
          <h2 className="text-3xl text-ink lg:text-4xl">You may also like</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} piece={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function monthly(price: string) {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  if (!n) return "$—";
  return `$${Math.round(n / 12).toLocaleString()}`;
}
