import { Eye, FileCheck2, BadgeCheck, FileX2, AlertTriangle, Hash, Workflow, Repeat2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PrincipleVariant = "observation" | "limitation" | "trace";

type NodeSpec = {
  icon: LucideIcon;
  label: string;
  tone?: "default" | "accent";
};

const VARIANTS: Record<PrincipleVariant, { nodes: NodeSpec[]; alt: string }> = {
  observation: {
    alt: "Microdiagram: observation leads to evidence, which leads to a finding.",
    nodes: [
      { icon: Eye, label: "Observation" },
      { icon: FileCheck2, label: "Evidence" },
      { icon: BadgeCheck, label: "Finding", tone: "accent" },
    ],
  },
  limitation: {
    alt: "Microdiagram: insufficient evidence leads to a named limitation.",
    nodes: [
      { icon: FileX2, label: "Insufficient" },
      { icon: AlertTriangle, label: "Limitation", tone: "accent" },
    ],
  },
  trace: {
    alt: "Microdiagram: a trace ID runs through the process to a reproducible result.",
    nodes: [
      { icon: Hash, label: "Trace ID" },
      { icon: Workflow, label: "Process" },
      { icon: Repeat2, label: "Reproducible", tone: "accent" },
    ],
  },
};

function Connector({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 12"
      className="h-3 w-8 shrink-0 self-start"
      style={{ marginTop: "1.15rem" }}
      preserveAspectRatio="none"
    >
      <line x1="1" y1="6" x2="32" y2="6" className="stroke-primary/35" strokeWidth="1.5" />
      <line
        x1="1"
        y1="6"
        x2="32"
        y2="6"
        data-inview={inView ? "true" : "false"}
        className="loop-dash stroke-signal"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        strokeLinecap="round"
        style={{ ["--loop-speed" as string]: "1.4s", animationDelay: `${delay}ms` }}
      />
      <path d="M31 2.5 L37 6 L31 9.5 Z" className="fill-signal" />
    </svg>
  );
}

export function PrincipleDiagram({
  variant,
  inView,
}: {
  variant: PrincipleVariant;
  inView: boolean;
}) {
  const { nodes, alt } = VARIANTS[variant];
  return (
    <div role="img" aria-label={alt} className="relative flex items-start gap-1.5">
      {nodes.map((node, i) => {
        const Icon = node.icon;
        const accent = node.tone === "accent";
        return (
          <div key={node.label} className="contents">
            {i > 0 ? <Connector inView={inView} delay={i * 220} /> : null}
            <div className="flex w-[4.5rem] flex-col items-center gap-1.5 text-center">
              <span
                data-inview={inView ? "true" : "false"}
                style={{ ["--loop-speed" as string]: "3s", animationDelay: `${i * 300}ms` }}
                className={[
                  "loop-pulse inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors duration-300",
                  accent
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-primary/25 bg-primary/[0.06] text-primary",
                ].join(" ")}
              >
                <Icon aria-hidden="true" strokeWidth={1.75} className="h-5 w-5" />
              </span>
              <span className="font-mono text-[9px] uppercase leading-tight tracking-widest text-foreground/55">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
