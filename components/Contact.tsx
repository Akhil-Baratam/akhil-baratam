import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { person } from "@/lib/content";

/**
 * The address is the call to action, so it is set at heading scale and nothing
 * competes with it. The status dot is the only coloured indicator on the page
 * and it reports a real state.
 */
export default function Contact() {
  return (
    <section id="contact" className="section shell">
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col items-start lg:col-span-8">
          <a
            href={`mailto:${person.email}`}
            className="group inline-flex max-w-full items-start gap-3"
          >
            {/* Sized to fit a long address on one line down to 320px. The
                break opportunity after the @ is the fallback if it cannot. */}
            <span className="t-email relative break-words">
              {person.email.split("@")[0]}@<wbr />
              {person.email.split("@")[1]}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </span>
            <ArrowUpRight
              size={22}
              weight="bold"
              className="mt-2 shrink-0 text-fg-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
            />
          </a>

          {person.phone ? (
            <a
              href={`tel:${person.phone.replace(/\s/g, "")}`}
              className="link-rule t-mono mt-7"
            >
              {person.phone}
            </a>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 lg:col-span-4">
          {person.available ? (
            <p className="t-mono flex items-start gap-2.5 text-fg-2">
              <span
                aria-hidden="true"
                className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {person.availability}
            </p>
          ) : null}

          <ul className="flex flex-col gap-3">
            {person.socials.map((social) => {
              const external = social.href.startsWith("http");
              const file = "download" in social ? social.download : undefined;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    download={file}
                    className="link-rule inline-flex items-center gap-1.5 text-[0.95rem]"
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {social.label}
                    {/* The icon marks the one link that saves a file rather
                        than opening a page. */}
                    {file ? <DownloadSimple size={15} weight="bold" /> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
