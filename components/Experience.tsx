import { experience } from "@/lib/content";
import Reveal from "./Reveal";

/**
 * A career is genuinely a sequence, which is the one case where a rail and
 * dated markers earn their place. Rows reveal in order so the eye reads it
 * the way the timeline runs.
 */
export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <h2 className="t-h2 mb-12 max-w-[14ch]">Experience</h2>

      <Reveal className="relative" stagger={90}>
        {experience.map((job) => (
          <article
            key={`${job.org}-${job.period}`}
            className="group relative grid grid-cols-1 gap-x-10 gap-y-2 border-t border-line py-9 pl-6 transition-colors hover:border-line-strong sm:grid-cols-12 sm:pl-8"
          >
            {/* The rail marker: sits on the row's own top rule, so it marks a
                real point in the sequence rather than decorating the row. */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-px w-3 bg-accent transition-all duration-300 group-hover:w-6"
            />
            <p className="t-mono pt-1 text-fg-2 sm:col-span-3">{job.period}</p>
            <div className="sm:col-span-9">
              <h3 className="t-h3">
                {job.role}
                <span className="text-fg-2">, {job.org}</span>
              </h3>
              <p className="t-body mt-2 text-[0.98rem]">{job.note}</p>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
