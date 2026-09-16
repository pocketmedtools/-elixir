/**
 * Is a citation out of date, or is its year part of its name?
 *
 * The naive test - does this tag name an edition, or a year inside the last
 * decade - flags two very different things as rot. `[KDIGO 2012]` is rot: the
 * 2024 guideline replaced it and the recommendation changed. `[Factories Act
 * 1948]` is not rot, and neither is `[Wilson and Jungner 1968]`: a statute and
 * a landmark paper are cited by their own year forever, the way a journal
 * cites them. A checker that cannot tell those apart sends an author chasing
 * 5,000 citations that are already correct, and hides the few hundred that are
 * not.
 *
 * So the year bar applies only to documents that have editions. `PROPER_NAME`
 * carries the tags whose year is part of a name, each one checked by hand
 * against what it is actually being cited for; `scripts/stale.ts` lists what
 * is left.
 */

/** Statutes, rules and constitutional instruments - named by enactment year. */
const STATUTE =
  /\b(Act|Rules|Bill|Ordinance|Amendment|Regulations|Code|Constitution|Schedule|Convention|Charter|Declaration|Framework|Judgment|vs?\.?\s)\b/i;

/** Tags whose year is part of a proper name: a paper, a score, a criterion, a
 *  definition, a court judgment, a census, a programme's launch year. */
export const PROPER_NAME = new Set<string>([
  // Landmark papers, and the scores, criteria, instruments and definitions that
  // carry their author's name and year the way a journal cites them.
  "Eddleston 2008", "Scott JAMA IM 2015", "HINTS Stroke 2009", "Kattah 2009",
  "Barany Society 2015", "Barany Society 2012", "Berlin 2012", "Weed 1968",
  "Starfield 1998", "Haggerty 2003", "Wilson and Jungner 1968", "AUDIT, WHO 2001",
  "ARDSNet 2000", "TiTrATE 2015", "Smilkstein 1978", "Baile 2000",
  "Glauser NEJM 2010", "Goldberg and Gask 1989", "de Silva 2003", "Green 2001",
  "CIWA-Ar, Sullivan 1989", "Bosner CMAJ 2010", "Rose 1985", "Pendleton 2003",
  "HELP 1999", "Mehrpour 2012", "Fried 2001", "Teasdale 2014", "PROSEVA 2013",
  "Donabedian 1988", "Donabedian 1966", "Zargar 1991", "Baxter 1968",
  "Andermann 2008", "Altman 1999", "GAD-7, Spitzer 2006", "Balint 1964",
  "PHQ-15, Kroenke 2002", "Lee 1999", "INTERHEART 2004", "Sackett 1996",
  "CAM 1990", "4AT 2014", "FEAST 2011", "Holmes and Rahe 1967", "Rumack 1975",
  "Bradford Hill 1965", "Hill 1958", "Neighbour 2004", "Penchansky 1981",
  "CHANCE 2013, POINT 2018", "RAMPART 2012", "MTOPS 2003", "Fagerstrom FTND 1991",
  "Pott 1775", "Caplan 1953", "Kulkarni 2015", "Bazemore 2015", "Langley 2009",
  "Fagan 1975", "Anthonisen 1987", "REDUCE trial 2013", "EXPRESS 2007",
  "MESS 2005", "CombAT 2010", "TREC 2003", "Larson 1998", "NAP3 2009",
  "CRASH-2 2010", "Shastri 2014", "Karasek 1979", "Sen 1990", "McCubbin 1983",
  "Bodenheimer 2014", "IHI 2008", "IHI 2003", "AFFIRM 2002", "RACE II 2010",
  "SOAP II 2010", "Magpie Trial 2002", "WHI 2002", "IDPP-1 2006", "DICE BMJ 2015",
  "PROT-AGE 2013", "ICMR-INDIAB 2014",
  
  // Judgments of the Supreme Court and the High Courts.
  "Samira Kohli 2008", "Jacob Mathew 2005", "Parmanand Katara 1989",
  "V.P. Shantha 1995", "Gian Kaur 1996", "Aruna Shanbaug 2011", "SC 1997",
  
  // The disasters and industrial episodes that occupational and environmental
  // medicine is named after.
  "Bhopal 1984", "Seveso 1976", "Minamata 1956", "Yokohama 1994",
  "Ramazzini 1700", "Rehn 1895", "Legge 1934",
  
  // Treaties, declarations, codes and named international frameworks.
  "Alma-Ata 1978", "Montreal 1987", "UNFCCC 1992", "Paris 2015", "SDG 2015",
  "SDG 3.1", "IHR 2005", "WHO FCTC 2005", "Sendai 2015", "CSDH 2008",
  "Riyadh Guidelines 1990", "UNCRC 1989", "CEDAW 1993", "Nuremberg 1947",
  "Helsinki 2013", "Belmont 1979", "ILO/WHO 1950", "ILO/WHO 1995", "ILO 1971",
  "ILO C161 1985", "WHO Checklist 2009", "WHO Surgical Safety Checklist 2009",
  "WHO HMN 2008", "WHO TRS 923 2004", "IS 10500:2012",
  
  // Indian statutes and regulations that the text cites by their short form, so
  // the word Act never appears in the tag.
  "THOTA 1994", "THOTA 2014", "PCPNDT", "PCPNDT 1994", "POCSO 2012",
  "PWDVA 2005", "COTPA 2003", "HSA 2005", "PCMA 2006", "ERA 1976", "CLA 2013",
  "CEA 2010", "NMC 2002", "MCI Ethics 2002", "EPA 1986",
  
  // Programmes, policies, schemes and institutions, named by the year they began.
  "NHM 2005", "JSY 2005", "JSSK 2011", "RBSK 2013", "RKSK 2014", "SSY 2015",
  "BBBP 2015", "SBM 2014", "NRLM 2011", "KGBV 2004", "ICDS 1975", "NIDDCP 1992",
  "NSAP 2007", "Annapurna Scheme 2000", "IDSP 2004", "NHM HMIS 2008",
  "MWCD 1997", "MWCD 2008", "Union Budget 2005-06", "NPEW 2001", "NSSP 2011",
  "NAPCC 2008", "NPSHEW 2009", "NAAQS 2009", "OSC 2015", "DGFASLI 1945",
  "NIOH 1966", "ARDSI 2010", "NPHCE 2011", "NPHCE MoHFW 2011", "NPPC 2012",
  "Childline 1098", "IDCF 2014", "Kayakalp 2015", "MHS 2011", "ICRW 2013",
  "NITI 2015", "NPSP 2014", "CHEB 1956",
  
  // Survey and census rounds.
  "Census 2011", "NMHS 2015-16",
]);

/** Tags confirmed as the latest edition of their document despite an old year. */
export const STILL_CURRENT = new Set<string>([
  // Checked one by one: the latest edition of each of these really is that old,
  // so the year in the tag is already right.
  "IDSA SSTI 2014", "NICE CG178 2014", "NICE CG115 2011", "NICE CG156 2013",
  "NICE NG5 2015", "NICE NG24 2015", "NICE NG19 2015", "NICE CG173 2013",
  "NICE CG32 2006", "NICE CG32", "AAP AOM 2013", "WHO MEC 2015", "ATA 2014",
  "ATA 2015", "MDS 2015", "USPHS 2008", "BGS Fit for Frailty 2015",
  "STROBE 2007", "STARD 2015", "Cochrane Handbook 6.4", "BAD Warts 2014",
  // Checked against a search for a replacement, and there is none: the National
  // Tracheostomy Safety Project manual and its emergency algorithms, the AAGBI
  // local anaesthetic toxicity safety guideline, the AAO-HNS Bell palsy
  // guideline, the WHO/UNICEF joint statement on acute diarrhoea, and the NICE
  // publication that still defines clinical audit.
  "NTSP 2012", "AAGBI 2010", "AAGBI LAST 2010", "AAO-HNS 2013",
  "WHO/UNICEF 2005", "NICE 2002",
]);

const YEAR = /\b(19|20)\d{2}\b/;
const EDITION = /\b\d{1,2}(?:e|th ed|nd ed|rd ed|st ed)\b/i;

export type Verdict = "edition" | "recent" | "proper" | "still-current" | "stale" | "undated";

/** Why this tag passes or fails the currency bar. */
export function classify(tag: string, thisYear = new Date().getFullYear()): Verdict {
  const t = tag.replace(/^\[|\]$/g, "").trim();
  if (PROPER_NAME.has(t)) return "proper";
  if (STILL_CURRENT.has(t)) return "still-current";
  if (STATUTE.test(t)) return "proper";
  if (EDITION.test(t)) return "edition";
  const y = t.match(YEAR);
  if (!y) return "undated";
  return thisYear - Number(y[0]) <= 10 ? "recent" : "stale";
}

export const isCurrent = (tag: string, thisYear?: number) =>
  !["stale", "undated"].includes(classify(tag, thisYear));
