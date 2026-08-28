import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/home/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = { label: string; to: string; hash?: string };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How We Verify", to: "/verify" },
  { label: "For Government", to: "/government" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

/**
 * Sitewide sticky header. White surface, cobalt primary CTA, full route nav
 * with active state, and a Sheet-based mobile menu.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-40 border-b border-foreground/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
        <Link to="/" aria-label="ACT Verified home" className="inline-flex shrink-0">
          <Logo className="h-12 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center justify-center gap-8 text-[15px] font-medium">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
                className={
                  isActive(item.to)
                    ? "font-semibold text-primary underline decoration-primary decoration-2 underline-offset-[10px]"
                    : "text-foreground/85 transition-colors hover:text-primary"
                }

              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/#book"
          className="btn-gov hidden lg:inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
          Book a Readiness Call
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/#book"
            className="btn-gov inline-flex h-11 items-center gap-2 bg-accent px-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
            <span className="hidden sm:inline">Book a Call</span>
            <span className="sr-only sm:hidden">Book a Readiness Call</span>
          </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground"
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[86vw] max-w-sm bg-white p-0">
            <SheetHeader className="border-b border-foreground/10 px-6 py-4 text-left">
              <SheetTitle className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex h-[calc(100dvh-64px)] flex-col justify-between px-6 py-6">
              <ul className="flex flex-col gap-1 text-base font-medium">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.to) ? "page" : undefined}
                      className={
                        "flex min-h-11 items-center border-b border-foreground/10 py-3 " +
                        (isActive(item.to)
                          ? "font-semibold text-primary underline decoration-primary decoration-2 underline-offset-8"
                          : "text-foreground/85 hover:text-primary")
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="/#book"
                onClick={() => setOpen(false)}
                className="btn-gov mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                Book a Readiness Call
              </a>
            </div>
          </SheetContent>
        </Sheet>
        </div>

      </div>
    </nav>
  );
}
