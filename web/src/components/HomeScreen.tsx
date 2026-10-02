import type { MenuTarget } from "./SideMenu";
import DownloadApk from "./DownloadApk";
import ToolIcon, { TOOL_HEX } from "./ToolIcon";

export const TOOL_SECTIONS: {
  heading: string;
  tools: { id: MenuTarget; title: string }[];
}[] = [
  {
    heading: "Medicine",
    tools: [
      { id: "crCl", title: "Creatinine Clearance" },
      { id: "insulin", title: "Insulin" },
      { id: "regimen", title: "Polypharm" },
      { id: "bmi", title: "BMI" },
    ],
  },
  {
    heading: "Pediatrics",
    tools: [
      { id: "pedDose", title: "Ped Dose Calculator" },
      { id: "growth", title: "Growth Charts" },
      { id: "bp", title: "Ped-BP" },
      { id: "hol", title: "Hours of Life" },
      { id: "nbWeight", title: "Newborn Weight Loss" },
      { id: "bili", title: "Neonatal Jaundice (Bili)" },
    ],
  },
  {
    heading: "OBG",
    tools: [{ id: "ob", title: "OB / EDD" }],
  },
];

export default function HomeScreen({ onOpen }: { onOpen: (t: MenuTarget) => void }) {
  return (
    <div className="mx-auto max-w-4xl px-3 py-6 md:px-6">
      <div className="mb-6 empty:hidden"><DownloadApk /></div>
      {TOOL_SECTIONS.map((section) => (
        <section key={section.heading} className="mb-7 last:mb-0">
          <h2 className="section-label mb-3 text-[15px]">{section.heading}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.tools.map((t) => {
              const ink = TOOL_HEX[t.id];
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onOpen(t.id)}
                  className="relative flex items-center gap-3.5 overflow-hidden rounded-lg border p-4 pl-5 text-left shadow-sm transition hover:shadow"
                  style={{ borderColor: "var(--line)", background: "var(--card)" }}
                >
                  <span aria-hidden className="absolute left-0 top-0 h-full w-1" style={{ background: ink }} />
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `color-mix(in srgb, ${ink} 9%, var(--card))`, color: ink }}
                  >
                    <ToolIcon id={t.id} className="h-5 w-5" />
                  </span>
                  <span className="text-[17px] font-bold leading-snug" style={{ color: ink }}>{t.title}</span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
