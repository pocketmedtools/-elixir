Staging area for topics being written.

Each file holds one finished topic as a standalone, typecheckable module.
`npm run merge` lifts its `topics.push({...})` block into the right subject file
and **deletes the pending file** — so a file vanishing from here a moment after
you wrote it means it was merged, not lost. Check
`grep -c '^  id: "<your-topic-id>"' ../src/content/<subject>.ts` if in doubt.

Nothing here ships: the directory sits outside `src`, so neither the bundler nor
`tsc -b` looks at it.
