/** Shared copy for the Services / How We Verify / About pages. */

export const verifyAudience = [
  {
    role: "Procurement officer",
    line: "A defensible record, not a vendor's word.",
  },
  {
    role: "Accessibility coordinator",
    line: "A methodology that explains its limits.",
  },
  {
    role: "Technical evaluator",
    line: "A trace you can scrutinize line by line.",
  },
  {
    role: "Legal counsel",
    line: "Findings built to hold up outside the room.",
  },
];

export const staticVsBehavioral = [
  {
    capability: "What it examines",
    staticOnly: "Tags only",
    behavioral: "What's exposed to assistive technology",
  },
  {
    capability: "Ambiguous cases",
    staticOnly: "Defaults to pass",
    behavioral: "Names the limitation",
  },
  {
    capability: "Evidence trail",
    staticOnly: "Rule output only",
    behavioral: "Reproducible trace",
  },
];

export const operatingPrinciples = [
  {
    n: "01",
    title: "Evidence over assumption",
    body: "Findings should be supported by captured evidence, not assumption.",
  },
  {
    n: "02",
    title: "Name the limitation",
    body: "Where evidence is insufficient, name the limitation. Never default to a silent pass.",
  },
  {
    n: "03",
    title: "Reproducible by trace",
    body: "Every result should be reproducible from its trace.",
  },
];

/** Founder name is centralized so it can be swapped in one place once confirmed. */
export const FOUNDER_NAME = "[Name]";

export const founderBio =
  `ACT Verified was founded by ${FOUNDER_NAME}, a Section 508 Trusted Tester who designed the ` +
  "Behavioral Verification methodology. " +
  `${FOUNDER_NAME} holds the Section 508 Trusted Tester certification and brings over 10 years of ` +
  "experience in Section 508 and WCAG accessibility compliance at the federal, state, and local levels.";

export const contactServices = [
  "Title II Readiness Sprint",
  "Section 508 / WCAG Audits",
  "PDF & Document Remediation",
  "Post-Remediation Verification",
  "Governance & Operations",
  "User Validation",
];

export const contactEntityTypes = [
  "State agency",
  "Local government",
  "Court system",
  "Education",
  "Private / regulated",
];

export const contactTimelines = ["Within 90 days", "6 months", "12+ months"];
