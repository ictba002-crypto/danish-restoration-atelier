import { useState } from "react";

export function BeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="w-full">
      <div className="relative select-none overflow-hidden bg-parchment">
        <img
          src={after}
          alt="Chair after restoration in our Los Angeles studio"
          loading="lazy"
          width={1200}
          height={900}
          className="block w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Chair before restoration, as sourced"
            loading="lazy"
            width={1200}
            height={900}
            className="block h-full w-full object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-brass"
          style={{ left: `${pos}%` }}
        />
        <span
          className="label-caps pointer-events-none absolute left-4 top-4 bg-ink/70 px-3 py-1 text-bone"
          style={{ opacity: pos > 12 ? 1 : 0 }}
        >
          Before
        </span>
        <span
          className="label-caps pointer-events-none absolute right-4 top-4 bg-brass px-3 py-1 text-ink"
          style={{ opacity: pos < 88 ? 1 : 0 }}
        >
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label="Reveal the restoration"
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="label-caps mt-4 text-muted-foreground">
        Drag to reveal · 64 hours of bench work
      </figcaption>
    </figure>
  );
}
