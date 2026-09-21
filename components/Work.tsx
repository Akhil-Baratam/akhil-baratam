import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { work } from "@/lib/content";
import Reveal from "./Reveal";

const CELL =
  "group flex flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-bg-2 transition-colors hover:border-line-strong";

/**
 * Only the projects with somewhere to go become links. The rest are plain
 * cells, so the arrow never promises a destination that does not exist.
 */
function Cell({
  href,
  className,
  children,
}: {
  href: string | null;
  className: string;
  children: React.ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="t-mono mt-5 flex flex-wrap gap-x-4 gap-y-2 text-fg-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Three projects, three cells: one lead cell beside a stacked pair. Exact cell
 * count, no filler tile. The third cell carries a ruled field instead of a
 * photograph so the grid is not three identical picture cards.
 */
export default function Work() {
  const [lead, ...rest] = work;

  return (
    <section id="work" className="section shell">
      <h2 className="t-h2 mb-12 max-w-[16ch]">Selected work</h2>

      <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-12" stagger={110}>
        <Cell href={lead.href} className={`${CELL} lg:col-span-7`}>
          <div className="duotone min-h-[16rem] w-full flex-1 rounded-none">
            {lead.image ? (
              <Image
                src={lead.image}
                alt=""
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            ) : null}
          </div>
          <div className="flex flex-col p-7 md:p-9">
            <h3 className="t-h3 flex items-start gap-2">
              {lead.title}
              {lead.href ? (
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="mt-1 shrink-0 text-fg-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              ) : null}
            </h3>
            <p className="t-body mt-3 max-w-[52ch] text-[0.98rem]">{lead.summary}</p>
            <Stack items={lead.stack} />
          </div>
        </Cell>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {rest.map((project) => (
            <Cell key={project.title} href={project.href} className={CELL}>
              {project.image ? (
                <div className="duotone aspect-[16/9] w-full rounded-none">
                  <Image
                    src={project.image}
                    alt=""
                    width={900}
                    height={700}
                    sizes="(max-width: 1024px) 50vw, 32vw"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="aspect-[16/9] w-full bg-bg-3"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, var(--accent) 0 1px, transparent 1px 13px)",
                    opacity: 0.55,
                  }}
                />
              )}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="t-h3 flex items-start gap-2 text-[1.08rem]">
                  {project.title}
                  {project.href ? (
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="mt-1 shrink-0 text-fg-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  ) : null}
                </h3>
                <p className="t-body mt-2.5 text-[0.94rem]">{project.summary}</p>
                <div className="mt-auto">
                  <Stack items={project.stack} />
                </div>
              </div>
            </Cell>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
