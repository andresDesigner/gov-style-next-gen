import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";

const OG_IMAGE = "https://actweb.blitzagencia.online/__l5e/assets-v1/49802883-7b73-4cc4-b215-231c65248129/og-home.png";
const TITLE = "ACT Verified — ADA Title II accessibility verification";
const DESC = "Accessibility verification and compliance readiness for ADA Title II deadlines. Evidence-based audits, remediation, and capability statements.";
const URL = "https://actweb.blitzagencia.online/";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function RouteComponent() {
  return <Home />;
}
