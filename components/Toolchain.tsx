import { toolchain } from "@/lib/content";

/**
 * The toolchain, as marks only. Breadth is the whole point here, so a
 * continuous pan says it better than a static grid. It dims on hover and the
 * mark under the cursor stays lit, so a reader can pick one out. This is the
 * only looping motion on the page.
 *
 * Marks are applied as CSS masks, which means one asset serves both themes and
 * the colour follows the palette.
 */
export default function Toolchain() {
  const lane = [...toolchain, ...toolchain];

  return (
    <section
      aria-label="Tools I work with"
      className="marquee-viewport overflow-hidden border-y border-line bg-bg-2 py-9"
    >
      <div className="marquee">
        {lane.map((tool, i) => (
          <span
            key={`${tool.label}-${i}`}
            title={tool.label}
            aria-hidden={i >= toolchain.length}
            className="mark"
            style={{
              WebkitMaskImage: `url(${tool.src})`,
              maskImage: `url(${tool.src})`,
              ...(tool.scale
                ? { width: `${2.25 * tool.scale}rem`, height: `${2.25 * tool.scale}rem` }
                : null),
            }}
          />
        ))}
      </div>
    </section>
  );
}
