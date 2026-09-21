import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cta, person, portrait } from "@/lib/content";

/**
 * Asymmetric split hero. The single orchestrated moment on the page: the claim
 * assembles line by line on load, then nothing moves again until the reader
 * does something. Four text elements, no more.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="shell grid min-h-[calc(100dvh-68px)] grid-cols-1 items-center gap-x-10 gap-y-12 pt-10 pb-20 md:grid-cols-12 md:items-stretch md:pt-16 md:pb-24 lg:pt-20"
    >
      <div className="flex flex-col justify-center md:col-span-7 lg:col-span-8">
        <p className="t-mono fade-in mb-7 text-fg-2" style={{ "--d": "760ms" } as React.CSSProperties}>
          <span className="text-fg">{person.name}</span>, {person.role}
        </p>

        <h1 className="t-display">
          <span className="rise">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>
              {person.headline.lineOne}
            </span>
          </span>
          <span className="rise">
            <span
              className="md:whitespace-nowrap"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              {person.headline.lineTwo}{" "}
              <em className="font-semibold text-accent not-italic">
                {person.headline.accent}
              </em>
            </span>
          </span>
        </h1>

        <p
          className="t-body fade-in mt-8 max-w-[46ch] text-pretty"
          style={{ "--d": "860ms" } as React.CSSProperties}
        >
          {person.intro}
        </p>

        <div
          className="fade-in mt-10 flex flex-wrap items-center gap-3"
          style={{ "--d": "960ms" } as React.CSSProperties}
        >
          <a href="#work" className="btn btn-primary">
            {cta.work}
            <ArrowDown size={15} weight="bold" />
          </a>
          <a href={`mailto:${person.email}`} className="btn btn-ghost">
            {cta.contact}
            <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>
      </div>

      <div className="md:col-span-5 lg:col-span-4">
        {/* PLACEHOLDER photography. Replace `portrait.src` in lib/content.ts. */}
        <div className="duotone fade-in mx-auto aspect-[4/5] w-full max-w-[26rem] md:h-full md:max-w-none md:aspect-auto">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            priority
            sizes="(max-width: 768px) 90vw, 34vw"
          />
        </div>
      </div>
    </section>
  );
}
