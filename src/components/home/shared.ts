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
  { n: "01", label: "Scope", desc: "Inventory digital assets. Prioritize critical paths." },
  { n: "02", label: "Test", desc: "Automated + native screen-reader behavioral evidence." },
  { n: "03", label: "Prioritize", desc: "Risk-based roadmap for legal and procurement." },
  { n: "04", label: "Remediate", desc: "Execution support for code and document repair." },
  { n: "05", label: "Verify", desc: "Independent re-test confirming WCAG 2.1 AA." },
  { n: "06", label: "Govern", desc: "Policy and procurement integration for the long term." },
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
    label: "Secure Intake",
    value: "upload.actverified.com",
    desc: "Operational document intake for regulated materials.",
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
    items: ["Articles", "FAQ", "Glossary · Phase 2", "Guides · Phase 2"],
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
    items: ["About", "Contact", "Book a Readiness Call"],
  },
  {
    head: "Operations",
    items: ["How We Verify", "Client Upload", "Accessibility Statement"],
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

