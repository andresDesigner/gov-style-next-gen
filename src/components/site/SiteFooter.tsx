import { Link } from "@tanstack/react-router";
import { footerCols } from "@/components/home/shared";

/** Known destinations for footer labels. Everything else renders as plain text. */
const FOOTER_LINKS: Record<string, string> = {
  "Title II Readiness Sprint": "/services",
  "Section 508 / WCAG Audits": "/services",
  "PDF & Document Remediation": "/services",
  "Post-Remediation Verification": "/services",
  "Capability Statement": "/government",
  "How We Verify": "/verify",
  About: "/about",
  Contact: "/contact",
};

/** Sitewide 5-column footer with parent-entity and standards disclosure. */
export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-secondary/50">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {footerCols.map((col) => (
            <div key={col.head}>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {col.head}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => {
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
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
          <span>ACT Verified — a Zenzo LLC consulting practice</span>
          <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
        </div>
      </div>
    </footer>
  );
}
