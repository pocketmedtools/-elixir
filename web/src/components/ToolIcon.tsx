import {
  Clock,
  Baby,
  Bookmark,
  Droplet,
  Droplets,
  Flag,
  HeartPulse,
  House,
  Pill,
  Scale,
  Sun,
  Syringe,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { MenuTarget } from "./SideMenu";

const ICONS: Record<MenuTarget, LucideIcon> = {
  home: House,
  pedDose: Syringe,
  growth: TrendingUp,
  bp: HeartPulse,
  nbWeight: TrendingDown,
  hol: Clock,
  bili: Sun,
  bmi: Scale,
  crCl: Droplets,
  regimen: Pill,
  insulin: Droplet,
  ob: Baby,
  saved: Bookmark,
  report: Flag,
};

/** One dark colour per tool — chip backgrounds, menu icon tints, watermark. */
export const TOOL_BG: Record<MenuTarget, string> = {
  home: "bg-[#1c1b19]",
  pedDose: "bg-[#460079]",
  growth: "bg-[#1a5336]",
  bp: "bg-[#910127]",
  nbWeight: "bg-[#3f2810]",
  hol: "bg-[#00545e]",
  bili: "bg-[#713e00]",
  bmi: "bg-[#5e4700]",
  crCl: "bg-[#015657]",
  regimen: "bg-[#800000]",
  insulin: "bg-[#0f3460]",
  ob: "bg-[#700168]",
  saved: "bg-[#3a3733]",
  report: "bg-[#7e2f01]",
};

/** Faded tint of each tool's colour — home card backgrounds. */
export const TOOL_SOFT: Record<MenuTarget, string> = {
  home: "border-[#e3cda8] bg-[#fcf4e6]",
  pedDose: "border-[#e3cda8] bg-[#fcf4e6]",
  growth: "border-[#e3cda8] bg-[#fcf4e6]",
  bp: "border-[#e3cda8] bg-[#fcf4e6]",
  nbWeight: "border-[#e3cda8] bg-[#fcf4e6]",
  hol: "border-[#e3cda8] bg-[#fcf4e6]",
  bili: "border-[#e3cda8] bg-[#fcf4e6]",
  bmi: "border-[#e3cda8] bg-[#fcf4e6]",
  crCl: "border-[#e3cda8] bg-[#fcf4e6]",
  regimen: "border-[#e3cda8] bg-[#fcf4e6]",
  insulin: "border-[#e3cda8] bg-[#fcf4e6]",
  ob: "border-[#e3cda8] bg-[#fcf4e6]",
  saved: "border-[#e3cda8] bg-[#fcf4e6]",
  report: "border-[#e3cda8] bg-[#fcf4e6]",
};

export const TOOL_TEXT: Record<MenuTarget, string> = {
  home: "text-[#1c1b19]",
  pedDose: "text-[#460079]",
  growth: "text-[#1a5336]",
  bp: "text-[#910127]",
  nbWeight: "text-[#3f2810]",
  hol: "text-[#00545e]",
  bili: "text-[#713e00]",
  bmi: "text-[#5e4700]",
  crCl: "text-[#015657]",
  regimen: "text-[#800000]",
  insulin: "text-[#0f3460]",
  ob: "text-[#700168]",
  saved: "text-[#3a3733]",
  report: "text-[#7e2f01]",
};

export const TOOL_HEX: Record<MenuTarget, string> = {
  home: "#1c1b19",
  pedDose: "#460079",
  growth: "#1a5336",
  bp: "#910127",
  nbWeight: "#3f2810",
  hol: "#00545e",
  bili: "#713e00",
  bmi: "#5e4700",
  crCl: "#015657",
  regimen: "#800000",
  insulin: "#0f3460",
  ob: "#700168",
  saved: "#3a3733",
  report: "#7e2f01",
};

export default function ToolIcon({
  id,
  className,
  strokeWidth = 2,
  style,
}: {
  id: MenuTarget;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  const Icon = ICONS[id];
  return <Icon className={className} strokeWidth={strokeWidth} style={style} aria-hidden />;
}
