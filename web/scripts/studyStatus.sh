#!/usr/bin/env bash
# One-line-per-subject state of the FM Study content, for resuming authoring.
# Run from web/:  bash scripts/studyStatus.sh
# Columns: subject, bytes, topics.push blocks, and whether the module loads
# (OK + topic/case counts) or has no default export yet (PARTIAL).
cd "$(dirname "$0")/.." || exit 1
for f in src/study/content/*.ts; do
  case "$f" in *_TEMPLATE*|*index*) continue;; esac
  n=$(basename "$f" .ts)
  sz=$(stat -c%s "$f")
  t=$(grep -c "^topics.push" "$f")
  out=$(npx tsx -e "import('./$f').then(m=>console.log('OK', 'topics', m.default.topics.length, 'cases', (m.default.cases||[]).length)).catch(e=>console.log('PARTIAL', String(e.message).split('\n')[0].slice(0,60)))" 2>&1 | tail -1)
  printf "%-20s %8d bytes  push=%-3s %s\n" "$n" "$sz" "$t" "$out"
done
