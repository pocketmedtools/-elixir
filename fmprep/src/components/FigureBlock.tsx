/**
 * The two figure shapes a classification takes.
 *
 * `ladder` is a points scale in groups - the Glasgow Coma Scale's eye, verbal
 * and motor ladders side by side, each headed by its own maximum, so that the
 * three being different lengths is something you see rather than something you
 * work out. `panels` is a run of named classes in order, each on its own card
 * with the class name on a coloured bar, which is how a grade or a stage is
 * read: you look up one class, not across all of them.
 */
import type { Figure } from "../lib/figure";
import { RichText } from "./ui";

function Ladder({ groups }: Extract<Figure, { layout: "ladder" }>) {
  return (
    <div className="fig-ladder">
      {groups.map((g, i) => (
        <section key={i} className="fig-col">
          {g.name && (
            <h4 className="fig-col-h">
              <span>{g.name}</span>
              {g.max && <em>max {g.max}</em>}
            </h4>
          )}
          <ol className="fig-steps">
            {g.rows.map((r, j) => (
              <li key={j}>
                <span className="fig-score">{r.score}</span>
                <span className="fig-crit">
                  <RichText text={r.label} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function Panels({ panels }: Extract<Figure, { layout: "panels" }>) {
  return (
    <div className="fig-panels">
      {panels.map((p, i) => (
        <section key={i} className="fig-panel">
          <h4 className="fig-key">{p.key}</h4>
          <dl className="fig-fields">
            {p.fields.map((f, j) => (
              <div key={j}>
                <dt>{f.label}</dt>
                <dd>
                  <RichText text={f.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

export default function FigureBlock({ figure }: { figure: Figure }) {
  return figure.layout === "ladder" ? <Ladder {...figure} /> : <Panels {...figure} />;
}
