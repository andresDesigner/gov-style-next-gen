/**
 * Single source of truth for the Title II deadlines quoted across the site.
 * Every page must read from here — never hardcode a date in a component.
 */
export const deadlines = {
  /** Entities with 50,000+ population. */
  phase1: "April 26, 2027",
  phase1Date: new Date(2027, 3, 26),
  /** Small entities and special district governments. */
  phase2: "April 26, 2028",
  phase2Date: new Date(2028, 3, 26),
  /** Practical preparation window before the first compliance date. */
  prepWindow: "Q4 2026",
  both: "April 26, 2027 · April 26, 2028",
} as const;

/** Canonical spelling of every recurring term. Import instead of retyping. */
export const terms = {
  behavioralVerification: "Behavioral Verification",
  findingRecord: "Finding Record",
  traceId: "Trace ID",
  evidence: "Evidence",
  trustedTester: "Section 508 Trusted Tester",
  wcag: "WCAG 2.1 AA",
  section508: "Section 508",
  pdfUa: "PDF/UA-1 aligned",
  titleII: "ADA Title II",
} as const;

/** Availability status vocabulary shared by every service surface. */
export type ServiceStatus = "AVAILABLE" | "ACTIVE" | "PENDING" | "PHASE 2";

export const statusStyles: Record<ServiceStatus, string> = {
  ACTIVE: "text-accent",
  AVAILABLE: "text-accent",
  PENDING: "text-foreground/70",
  "PHASE 2": "text-foreground/70",
};

/** Anchor target on /services for each service id. */
export const serviceAnchors: Record<string, string> = {
  "S-01": "/services#s-01",
  "S-02": "/services#s-02",
  "S-03": "/services#s-03",
  "S-04": "/services#s-04",
};

export const primaryServices = [

  {
    id: "S-01",
    title: "Title II Readiness Sprint",
    desc: "Turn the DOJ rule into a real operating plan. 4-week baseline plus prioritized backlog.",
  },
  {
    id: "S-02",
    title: "Section 508 / WCAG Website & App Audits",
    desc: "Manual, standards-based audits with behavioral evidence — not just automated scans.",
  },
  {
    id: "S-03",
    title: "PDF & Document Remediation",
    desc: "Backlog triage and remediation. PDF/UA-1 aligned before publication.",
  },
  {
    id: "S-04",
    title: "Post-Remediation Verification",
    desc: "Independent proof the change reached assistive technology, not just the code.",
  },
];

export const secondaryServices = [
  {
    id: "S-05",
    title: "Governance & Operations",
    desc: "Policy, procurement intake, and accessibility runbooks so compliance holds after launch.",
  },
  {
    id: "S-06",
    title: "User Validation",
    desc: "Recruitment, consent, and AT coverage with real users. Compensation and privacy handled.",
  },
];

export const engagement = [
  { n: "1", label: "Scope", desc: "Inventory digital assets. Prioritize critical paths." },
  { n: "2", label: "Test", desc: "Automated + native screen-reader behavioral evidence." },
  { n: "3", label: "Prioritize", desc: "Risk-based roadmap for legal and procurement." },
  { n: "4", label: "Remediate", desc: "Execution support for code and document repair." },
  { n: "5", label: "Verify", desc: "Independent re-test confirming WCAG 2.1 AA." },
  { n: "6", label: "Govern", desc: "Policy and procurement integration for the long term." },
];

export const audience = [
  {
    role: "Procurement Officers",
    desc: "Verify vendor accessibility claims before contract award.",
  },
  {
    role: "Accessibility Coordinators",
    desc: "Independent verification and PDF remediation at scale.",
  },
  {
    role: "Legal & Compliance",
    desc: "Traceable, reproducible findings suitable for DOJ inquiry.",
  },
  {
    role: "IT & Engineering",
    desc: "Reproducible finding IDs with remediation guidance.",
  },
];

export const operations = [
  {
    label: "Methodology",
    value: "Evidence-backed",
    desc: "Traceable, reproducible findings with scoped non-conclusions.",
  },
  {
    label: "Client Upload",
    value: "Coming soon",
    desc: "A secure document intake channel for regulated materials. Not yet open — send nothing there today.",
  },

  {
    label: "Government-ready",
    value: "Procurement-fluent",
    desc: "Capability Statement and standard contract vehicles.",
  },
];

export const footerCols = [
  {
    head: "Services",
    items: [
      "Title II Readiness Sprint",
      "Section 508 / WCAG Audits",
      "PDF & Document Remediation",
      "Post-Remediation Verification",
      "Governance & Operations · Phase 2",
      "User Validation · Phase 2",
    ],
  },
  {
    head: "Resources",
    items: ["Articles · Phase 2", "FAQ · Phase 2", "Glossary · Phase 2", "Guides · Phase 2"],
  },
  {
    head: "For Government",
    items: [
      "Capability Statement",
      "Procurement & Contracting · Phase 2",
      "Title II Timeline · Phase 2",
    ],
  },
  {
    head: "Company",
    items: ["About", "Contact"],
  },
  {
    head: "Operations",
    items: ["How We Verify", "Accessibility Statement", "Client Upload · Phase 2"],
  },

];

export const evidenceSnippet = `element     button#submit-form
issue       accessible name absent
wcag        2.1 · 4.1.2 Name, Role, Value (A)
scanner     axe: pass · lighthouse: pass
behavior    NVDA announces "button" — no name reaches AT
evidence    screen-reader-log/f-2027-0142.txt
status      confirmed · defensible`;

/** Structured payload for <EvidenceArtifactCard/>. Mirrors evidenceSnippet. */
export const evidenceFindingF20270142 = {
  traceId: "F-2027-0142",
  status: "CONFIRMED",
  screenReader: "NVDA",
  browser: "Firefox",
  os: "Win 11",
  fields: [
    { label: "element", value: "button#submit-form" },
    { label: "issue", value: "accessible name absent" },
    { label: "wcag", value: "2.1 · 4.1.2 Name, Role, Value (A)" },
    { label: "scanner", value: "axe: pass · lighthouse: pass" },
    { label: "behavior", value: 'NVDA announces "button" — no name reaches AT', confirmed: true },
    { label: "evidence", value: "screen-reader-log/f-2027-0142.txt" },
    { label: "status", value: "confirmed · defensible", confirmed: true },
  ],
} as const;

