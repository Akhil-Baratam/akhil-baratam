import { person } from "@/lib/content";

/**
 * The degree sits here rather than in its own section: worth being findable,
 * not worth a scroll stop.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="t-mono text-fg-2">{person.name}</p>
        <p className="t-mono text-fg-2">{person.education}</p>
        <p className="t-mono text-fg-2">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
