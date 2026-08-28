import { Link } from "@tanstack/react-router";
import { footerCols } from "@/components/home/shared";

/** Known destinations for footer labels. Everything else renders as plain text. */
const FOOTER_LINKS: Record<string, string> = {
  "Title II Readiness Sprint": "/services#s-01",
  "Section 508 / WCAG Audits": "/services#s-02",
  "PDF & Document Remediation": "/services#s-03",
  "Post-Remediation Verification": "/services#s-04",
  "Capability Statement": "/government#capability",
  "How We Verify": "/verify",
  "Accessibility Statement": "/about#entity",
  About: "/about",
  Contact: "/contact",
};


/** Sitewide 5-column footer with parent-entity and standards disclosure. */
export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-secondary/50">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {footerCols.map((col) => {
            const active = col.items.filter((i) => !i.includes("Phase 2"));
            const upcoming = col.items.filter((i) => i.includes("Phase 2"));
            return (
              <div key={col.head}>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {col.head}
                </h4>
                <ul className="mt-4 space-y-3">
                  {active.map((item) => {
                    const to = FOOTER_LINKS[item];
                    return (
                      <li key={item}>
                        {to ? (
                          <Link
                            to={to}
                            className="text-sm text-foreground/75 decoration-primary decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2"
                          >
                            {item}
                          </Link>
                        ) : (
                          <span className="text-sm text-foreground/60">{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {upcoming.length ? (
                  <div className="mt-5 border-t border-foreground/10 pt-4">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">
                      Coming soon
                    </div>
                    <ul className="mt-2 space-y-2">
                      {upcoming.map((item) => (
                        <li key={item} className="text-sm text-foreground/45">
                          {item.replace(" · Phase 2", "")}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
          <span>ACT Verified — a Zenzo LLC consulting practice</span>
          <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
        </div>
      </div>
    </footer>
  );
}
