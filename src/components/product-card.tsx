import { Link } from "@tanstack/react-router";

export type Piece = {
  slug: string;
  designer: string;
  name: string;
  origin: string;
  price: string;
  image: string;
};

export function ProductCard({ piece, className = "" }: { piece: Piece; className?: string }) {
  return (
    <Link
      to="/pieces/$slug"
      params={{ slug: piece.slug }}
      className={`group block ${className}`}
    >
      <div className="img-reveal bg-parchment">
        <img
          src={piece.image}
          alt={`${piece.name} by ${piece.designer}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="pt-5">
        <p className="label-caps text-brass">{piece.designer}</p>
        <h3 className="mt-2 text-xl leading-snug text-ink">{piece.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{piece.origin}</p>
        <p className="mt-3 text-sm text-ink">{piece.price}</p>
      </div>
    </Link>
  );
}
