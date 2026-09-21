import { capabilities } from "@/lib/content";

/**
 * Twelve capabilities would be a twelve-row list with twelve hairlines, which
 * is the laziest possible layout. Grouped into three clusters instead: one
 * rule per cluster, so the dividers carry meaning rather than decoration.
 * The heading pins while the clusters pass it.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="section shell">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 className="t-h2 max-w-[10ch] lg:sticky lg:top-28">What I do</h2>
        </div>

        <div className="lg:col-span-9">
          {capabilities.map((cluster) => (
            <div
              key={cluster.group}
              className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-8 sm:grid-cols-3 first:border-t-0 first:pt-0"
            >
              <h3 className="t-mono pt-1 text-accent">{cluster.group}</h3>
              <ul className="sm:col-span-2 grid grid-cols-1 gap-y-2.5 sm:grid-cols-2">
                {cluster.items.map((item) => (
                  <li key={item} className="text-[1.0rem] leading-snug text-fg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
