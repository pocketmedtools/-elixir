import sys, json
# usage: gen_batches.py spec.json template outdir
spec=json.load(open(sys.argv[1])); SUB=spec["subject"]; PAPER=spec["paper"]; B=spec["batches"]; existing=spec["existing"]
tpl=open(sys.argv[2]).read()
for b, ts in B.items():
    topics="\n".join(f"   - `{SUB}-{i}` | {t} | {f} | scope: {s}" for i,t,f,s in ts)
    sib="\n".join(f"   - {t}" for bb,v in B.items() if bb!=b for _,t,_,_ in v)
    rx="|".join(f"{SUB}-{i}" for i,_,_,_ in ts)
    out=tpl.replace("{{SUBJECT}}",SUB).replace("{{BATCH}}",b).replace("{{TOPICS}}",topics).replace("{{EXISTING}}",existing).replace("{{SIBLINGS}}",sib).replace("{{BATCH_IDS_REGEX}}",rx).replace("{{PAPER}}",PAPER)
    open(f"{sys.argv[3]}/lib-{SUB}-{b}.md","w").write(out)
print(SUB, sum(len(v) for v in B.values()), "topics in", len(B), "batches")
