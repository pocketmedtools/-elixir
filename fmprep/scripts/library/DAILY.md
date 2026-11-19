# Daily library job (20 topics a day, most-asked PYQ topics first)

User's rules (2026-11-19): target stays 10x topics per subject, but write only ~20 topics per
day; most important DNB FM PYQ topics first, then the rest; the app must update itself (live
update - NEVER ask the user to install an APK; only web content changes, no native changes);
after each day's topics are finished, post the list of topics added to the user.

S = /tmp/claude-0/-home-user--elixir/5eaee560-9a19-5fbb-bbf7-32cb85808f7d/scratchpad

## Each firing
1. If $S/library_prompt.md is missing: `mkdir -p $S && cp fmprep/scripts/library/* $S/` (from repo root).
2. Look at fmprep/scripts/library/plan/today.json (yesterday's batches) and check each batch file
   (count `topics.push` in src/content/library/<sub>/<batch>.ts and `checked:` in
   src/revision/<sub>--<batch>.ts). If any batch is unfinished, resume its writer (agent ids are
   in plan/agents-today.json; SendMessage "Continue: finish your remaining topics and revision
   entries, save each, run tsc+verify, report. Do not commit."). If an id fails, launch a new
   general-purpose agent on the same prompt file. Do NOT start new topics until those finish.
3. Otherwise (all finished): from fmprep/ run `python3 scripts/library/daily_batch.py $S 20`,
   commit the stubs, then launch one background general-purpose agent per batch with:
   "Read your full instructions from <prompt> and carry them out exactly. Save each topic to disk
   as soon as it is written. Edit only your two assigned files; do not commit. Keep any scratch
   files in your own subfolder of the scratchpad." Save {batch: agentId} to plan/agents-today.json.
4. When the writers report back: `npx tsc -b && npm run -s verify`, fix nothing in their files
   yourself unless trivial; commit + push (this builds the live update automatically). Then post
   to the user: the topics added today (title + how often asked in PYQ), the running total
   (library topics written / target ~2510), and "the app updates itself when you open it".
5. If plan/queue.json is exhausted (daily_batch prints QUEUE EMPTY), plan the next subject's
   remaining topics toward 10x (non-PYQ, by OPD/IPD importance) with a planner agent writing
   more items to queue.json, then continue.
6. If a usage limit stops writers, do nothing; the next firing resumes them.
