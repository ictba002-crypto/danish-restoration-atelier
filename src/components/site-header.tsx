import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const nav = [
  { label: "New Arrivals", to: "/" },
  { label: "Furniture", to: "/" },
  { label: "Fine Art", to: "/" },
  { label: "Lighting", to: "/" },
  { label: "Services", to: "/" },
  { label: "About", to: "/" },
  { label: "Contact", to: "/" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="bg-ink text-bone">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-6 py-2 lg:px-10">
          <p className="label-caps opacity-80">Est. 2009 · Los Angeles</p>
          <p className="label-caps opacity-80">
            Authenticity Guaranteed
            <span className="mx-3 text-brass">·</span>
            5.0 ★ 549 Reviews
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <Link to="/" className="shrink-0">
          <span className="font-display text-2xl leading-none tracking-tight text-ink lg:text-[1.75rem]">
            Danish Modern
          </span>
          <span className="label-caps mt-1 block text-brass">Los Angeles</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="label-caps link-underline text-ink/75 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-ink/70 transition-colors hover:text-ink">
            <Search className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button aria-label="Cart" className="text-ink/70 transition-colors hover:text-ink">
            <ShoppingBag className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink/70 transition-colors hover:text-ink lg:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={1.25} />
            ) : (
              <Menu className="size-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-5">
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="label-caps text-ink/75">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="h-px w-full bg-border" />
    </header>
  );
}
