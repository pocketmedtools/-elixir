/**
 * The questions that had no answer in the library until a topic was written
 * for them.
 *
 * `scripts/gaps.ts` prints the past questions no topic covers. Each one here
 * was a gap: the library carried nothing that honestly answered it, so the
 * topic named alongside was written, and this is the link back. Keyword
 * matching does not find several of them on its own — "Describe the indications
 * and use of ketamine anaesthesia" scores below the threshold against a topic
 * titled "Procedural sedation and ketamine anaesthesia", because almost every
 * word it shares is a word every anaesthesia question shares.
 *
 * Ids naming a topic that does not exist yet are dropped by `manualTopicIds`,
 * so an entry may be written before its topic is and simply starts working when
 * the topic lands.
 */
export const LINKS_GAPS: Record<string, string[]> = {
  // Parkinsonism — October 2024 Paper I.
  "pyq-2024-october-pi-10": ["neurology-parkinsonism"],

  // Spinal anaesthesia — December 2022 Paper II and June 2025 Paper II, and the
  // same December 2022 question as it appears in the topic-wise compilation.
  "pyq-2022-december-pii-01": ["surgery-office-spinal-anaesthesia"],
  "pyq-2025-june-pii-06": ["surgery-office-spinal-anaesthesia"],
  "pyqtw-0444": ["surgery-office-spinal-anaesthesia"],

  // Ketamine.
  "pyqtw-0446": ["surgery-office-procedural-sedation-ketamine"],

  // Tracheostomy.
  "pyqtw-0413": ["surgery-office-tracheostomy"],

  // Blood transfusion and blood products.
  "pyqtw-0235": ["surgery-office-blood-transfusion"],
  "pyqtw-0236": ["surgery-office-blood-transfusion"],

  // ARDS.
  "pyqtw-0044": ["emergency-ards"],

  // HIV: the discordant couple after a condom rupture, and paediatric staging
  // and antiretroviral therapy.
  "pyq-2023-april-piii-02": ["infectious-fever-hiv-art"],
  "pyqtw-0637": ["infectious-fever-hiv-art"],

  // Congenital heart disease: dental extraction in Tetralogy of Fallot, and an
  // atrial septal defect found on echocardiography in an infant.
  "pyq-2023-april-piii-06": ["pediatrics-congenital-heart-disease"],
  "pyqtw-0580": ["pediatrics-congenital-heart-disease"],

  // Absence seizures in a 5-year-old.
  "pyqtw-0581": ["neurology-seizures-epilepsy"],

  // Nocturnal enuresis.
  "pyqtw-0646": ["pediatrics-nocturnal-enuresis"],

  // Oral thrush.
  "pyqtw-0647": ["pediatrics-oral-thrush"],

  // Uterine prolapse and the ligaments of the female pelvis.
  "pyqtw-0783": ["gynaecology-uterine-prolapse"],

  // Disaster management: the disaster cycle and flood preparedness, the levels
  // of disaster in India with the National School Safety Programme, and the
  // doctor's role in the response to a cyclone.
  "pyqtw-0694": ["preventive-disaster-management"],
  "pyqtw-0696": ["preventive-disaster-management"],
  "pyqtw-0697": ["preventive-disaster-management"],

  // Climate change and the determinants of health.
  "pyqtw-0698": ["preventive-climate-change-health"],

  // Health communication: IEC, social marketing and social mobilisation.
  "pyqtw-0733": ["preventive-iec-social-marketing"],
  "pyqtw-0745": ["preventive-iec-social-marketing"],
  "pyqtw-0746": ["preventive-iec-social-marketing"],
  "pyqtw-0747": ["preventive-iec-social-marketing"],

  // Health planning and management: SWOT analysis, the planning cycle and
  // network analysis.
  "pyqtw-0743": ["preventive-health-planning-management"],
  "pyqtw-0777": ["preventive-health-planning-management"],

  // Geographic information systems in public health.
  "pyqtw-0730": ["preventive-health-information-gis"],

  // The declining child sex ratio and the PCPNDT Act.
  "pyqtw-0722": ["preventive-sex-ratio-pcpndt"],

  // Legislation for children and women: the Juvenile Justice Act and the
  // National Policy for the Empowerment of Women, 2001.
  "pyqtw-0641": ["preventive-child-women-legislation"],
  "pyqtw-0550": ["preventive-child-women-legislation"],

  // Chemical carcinogens and the tumours they cause.
  "pyqtw-0254": ["preventive-occupational-health"],
};
