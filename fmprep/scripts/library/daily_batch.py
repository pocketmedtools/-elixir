#!/usr/bin/env python3
"""Pick the next N topics from plan/queue.json (PYQ-ranked) and set them up for writing.

usage: python3 scripts/library/daily_batch.py <scratchpad> [N=20]
Run from fmprep/. Creates library + revision stub files, regenerates each touched
subject's library index.ts, adds the LIBRARY_LOADERS entry for a new subject, writes
one writer prompt per batch (lib-<subject>-<batch>.md) into the scratchpad, records
the topics in plan/done.json and today's batches in plan/today.json.
"""
import json, os, re, sys

S = sys.argv[1]
N = int(sys.argv[2]) if len(sys.argv) > 2 else 20
PLAN = "scripts/library/plan"
PAPER = {s: "I" for s in "cardiovascular respiratory endocrine gastro-hepatology infectious-fever neurology renal-urology musculoskeletal psychiatry".split()}
PAPER.update({s: "II" for s in "surgery-office dermatology eye-ent emergency".split()})
PAPER.update({s: "III" for s in "pediatrics obstetrics gynaecology".split()})
PAPER.update({s: "IV" for s in "fm-principles preventive geriatrics-ethics symptom-approach".split()})

queue = json.load(open(f"{PLAN}/queue.json"))
done = json.load(open(f"{PLAN}/done.json")) if os.path.exists(f"{PLAN}/done.json") else []
existing = json.load(open(f"{PLAN}/existing.json"))
have = set(done) | {f"{r['subject']}:{r['id'][len(r['subject'])+1:]}" for r in existing}
todo = [q for q in queue if f"{q['subject']}:{q['id']}" not in have][:N]
if not todo:
    print("QUEUE EMPTY"); sys.exit(0)

# Group into batches of up to 4 topics of the same subject, keeping rank order roughly.
groups = {}
for q in todo:
    groups.setdefault(q["subject"], []).append(q)
batches = []
for sub, items in groups.items():
    for i in range(0, len(items), 4):
        batches.append((sub, items[i:i + 4]))

tpl = open(f"{S}/library_prompt.md").read()
LIB = "src/content/library"
today = []

def next_batch(sub):
    d = f"{LIB}/{sub}"
    nums = [int(m.group(1)) for f in os.listdir(d) if (m := re.match(r"b(\d+)\.ts$", f))] if os.path.isdir(d) else []
    return max(nums, default=0) + 1

def write_index(sub):
    d = f"{LIB}/{sub}"
    files = sorted(f[:-3] for f in os.listdir(d) if re.match(r"b\d+\.ts$", f))
    lines = ['import type { Topic } from "../../../lib/types";']
    lines += [f'import {b} from "./{b}";' for b in files]
    lines += ["", f"/** {sub} master library: textbook-depth topics, written in batches. */",
              "const topics: Topic[] = [" + ", ".join(f"...{b}" for b in files) + "];", "", "export default topics;", ""]
    open(f"{d}/index.ts", "w").write("\n".join(lines))

idx = open("src/content/index.ts").read()
for sub, items in batches:
    d = f"{LIB}/{sub}"
    os.makedirs(d, exist_ok=True)
    if f'import("./library/{sub}")' not in idx:
        key = f'"{sub}"' if "-" in sub else sub
        idx = idx.replace("const LIBRARY_LOADERS: Record<string, () => Promise<{ default: Topic[] }>> = {\n",
                          "const LIBRARY_LOADERS: Record<string, () => Promise<{ default: Topic[] }>> = {\n"
                          f'  {key}: () => import("./library/{sub}"),\n', 1)
    b = f"b{next_batch(sub):02d}"
    open(f"{d}/{b}.ts", "w").write('import type { Topic } from "../../../lib/types";\n\nconst topics: Topic[] = [];\n\nexport default topics;\n')
    open(f"src/revision/{sub}--{b}.ts", "w").write('import type { RevisionSet } from "./index";\n\nconst revision: RevisionSet = {\n};\n\nexport default revision;\n')
    write_index(sub)
    ex = "\n".join(f"   {r['id']} | {r['title']}" for r in existing if r["subject"] == sub)
    ex += "".join(f"\n   {sub}-{q['id']} | {q['title']} (being written)" for q in queue if q["subject"] == sub and f"{sub}:{q['id']}" in set(done))
    topics = "\n".join(f"   - `{sub}-{q['id']}` | {q['title']} | {q['frequency']} | scope: {q['scope']} (asked {q.get('pyq', 0)}x in DNB FM PYQ; answer what was asked)" for q in items)
    sib = "\n".join(f"   - {q['title']}" for s2, it in batches for q in it if s2 == sub and q not in items) or "   (none today)"
    rx = "|".join(f"{sub}-{q['id']}" for q in items)
    out = (tpl.replace("{{SUBJECT}}", sub).replace("{{BATCH}}", b).replace("{{TOPICS}}", topics)
              .replace("{{EXISTING}}", ex or "   (none yet)").replace("{{SIBLINGS}}", sib)
              .replace("{{BATCH_IDS_REGEX}}", rx).replace("{{PAPER}}", PAPER.get(sub, "I")))
    open(f"{S}/lib-{sub}-{b}.md", "w").write(out)
    today.append({"subject": sub, "batch": b, "prompt": f"{S}/lib-{sub}-{b}.md",
                  "topics": [{"id": f"{sub}-{q['id']}", "title": q["title"], "pyq": q.get("pyq", 0)} for q in items]})
    done += [f"{sub}:{q['id']}" for q in items]
open("src/content/index.ts", "w").write(idx)
json.dump(done, open(f"{PLAN}/done.json", "w"), indent=0)
json.dump(today, open(f"{PLAN}/today.json", "w"), indent=1)
for t in today:
    print(t["subject"], t["batch"], [x["title"] for x in t["topics"]])
