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

/** Per-service business impact + expandable detail used by the /services card grid. */
export type ServiceDetail = {
  /** One-line consequence of not doing the work, in procurement language. */
  impact: string;
  /** Problem this service solves. */
  problem: string;
  /** What the engagement includes. */
  includes: string[];
  /** Primary artifact handed over. */
  deliverable: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "S-01": {
    impact:
      "Without this, you arrive at April 2027 without a defensible record of where you stand.",
    problem:
      "Most agencies know the Title II rule exists but cannot say which digital assets are in scope, which are failing, or in what order to fix them.",
    includes: [
      "Inventory of web, app, and document assets with scope decisions recorded",
      "Baseline WCAG 2.1 AA testing on critical user paths",
      "Risk-ranked backlog mapped to the April 26, 2027 deadline",
    ],
    deliverable: "4-week readiness baseline plus a prioritized remediation backlog.",
  },
  "S-02": {
    impact:
      "Automated scans pass code that screen readers cannot use — the gap is where legal exposure lives.",
    problem:
      "Scanner-only reports mark ambiguous cases as passes, so failures reach production with a clean report attached to them.",
    includes: [
      "Manual testing against WCAG 2.1 AA and Section 508",
      "Native screen-reader behavioral evidence (NVDA, JAWS, VoiceOver)",
      "Reproducible finding records with criterion, behavior log, and severity",
    ],
    deliverable: "Audit report with trace-backed findings and remediation guidance.",
  },
  "S-03": {
    impact:
      "Published PDFs are the most cited Title II complaint surface and the easiest for a reviewer to check.",
    problem:
      "Document backlogs grow faster than teams can remediate them, and untagged files keep being published.",
    includes: [
      "Backlog triage by public impact and legal exposure",
      "Tagging, reading order, alt text, and table structure repair",
      "PDF/UA-1 alignment checks before publication",
    ],
    deliverable: "Remediated document set plus a pre-publication checklist for your team.",
  },
  "S-04": {
    impact:
      "A closed ticket is not proof. Verification is what makes the fix defensible in an inquiry.",
    problem:
      "Teams ship remediation without independent confirmation that the change actually reached assistive technology.",
    includes: [
      "Independent re-test of every closed finding",
      "Assistive-technology confirmation, not code review alone",
      "Status change recorded against the original trace ID",
    ],
    deliverable: "Verification statement with per-finding confirmed / not-confirmed status.",
  },
  "S-05": {
    impact:
      "Compliance decays without an owner. Governance is what keeps the record true after launch.",
    problem:
      "Once the audit closes, new content and new vendors reintroduce the same failures within months.",
    includes: [
      "Accessibility policy and roles",
      "Procurement intake language and vendor evaluation criteria",
      "Runbooks and internal training paths",
    ],
    deliverable: "Governance kit: policy, procurement clauses, and operating runbooks.",
  },
  "S-06": {
    impact:
      "Standards conformance is the floor. Real users are what prove the service actually works.",
    problem:
      "Conformance testing cannot surface task-level failures that only appear with real assistive-technology users.",
    includes: [
      "Participant recruitment with AT coverage targets",
      "Consent, compensation, and privacy handling",
      "Task-based sessions with recorded evidence",
    ],
    deliverable: "Validation report with task outcomes and prioritized usability findings.",
  },
};

/** Tangible output for each stage of the engagement model. */
export const engagementOutputs: Record<string, string> = {
  "1": "output: scoped asset inventory",
  "2": "output: behavior log per finding",
  "3": "output: prioritized backlog",
  "4": "output: remediation guidance",
  "5": "output: verification statement",
  "6": "output: policy + procurement kit",
};
