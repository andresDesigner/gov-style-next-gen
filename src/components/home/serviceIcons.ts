import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Search,
  FileText,
  BadgeCheck,
  Landmark,
  Users,
  TestTube2,
  ListChecks,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Upload,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "S-01": Rocket,
  "S-02": Search,
  "S-03": FileText,
  "S-04": BadgeCheck,
  "S-05": Landmark,
  "S-06": Users,
};

export const engagementIcons: Record<string, LucideIcon> = {
  "1": Search,
  "2": TestTube2,
  "3": ListChecks,
  "4": Wrench,
  "5": ShieldCheck,
  "6": Landmark,
};

export const operationsIcons: Record<string, LucideIcon> = {
  Methodology: ClipboardCheck,
  "Secure Intake": Upload,
  "Government-ready": Landmark,
};
