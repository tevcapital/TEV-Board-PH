const AGENTS = [
  { id: 'MVP', name: 'Manny V. Pangilinan', type: 'research', company: 'Metro Pacific / PLDT / Meralco' },
  { id: 'RSA', name: 'Ramon S. Ang', type: 'research', company: 'San Miguel Corporation' },
  { id: 'JAZA', name: 'Jaime Augusto Zobel de Ayala', type: 'research', company: 'Ayala Corporation' },
  { id: 'EKR', name: 'Enrique K. Razon Jr.', type: 'research', company: 'ICTSI / Bloomberry / Prime Infra' },
  { id: 'NVT', name: 'Nestor V. Tan', type: 'research', company: 'BDO Unibank' },
  { id: 'CHIEF', name: 'CHIEF', type: 'chief', company: 'TEV Board PH' },
  { id: 'TENSION', name: 'TENSION', type: 'tension', company: 'TEV Board PH' }
];

const RESEARCH_IDS = AGENTS.filter((a) => a.type === 'research').map((a) => a.id);

module.exports = { AGENTS, RESEARCH_IDS };
