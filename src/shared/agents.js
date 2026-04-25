const AGENTS = [
  { id: 'MVP', name: 'Manny V. Pangilinan', type: 'research', company: 'Metro Pacific / PLDT / Meralco', workingLanguage: 'English' },
  { id: 'RSA', name: 'Ramon S. Ang', type: 'research', company: 'San Miguel Corporation', workingLanguage: 'Tagalog' },
  { id: 'JAZA', name: 'Jaime Augusto Zobel de Ayala', type: 'research', company: 'Ayala Corporation', workingLanguage: 'English' },
  { id: 'EKR', name: 'Enrique K. Razon Jr.', type: 'research', company: 'ICTSI / Bloomberry / Prime Infra', workingLanguage: 'English' },
  { id: 'NVT', name: 'Nestor V. Tan', type: 'research', company: 'BDO Unibank', workingLanguage: 'English' },
  { id: 'CHIEF', name: 'CHIEF', type: 'chief', company: 'TEV Board PH', workingLanguage: 'English' },
  { id: 'TENSION', name: 'TENSION', type: 'tension', company: 'TEV Board PH', workingLanguage: 'English' }
];

const RESEARCH_IDS = AGENTS.filter((a) => a.type === 'research').map((a) => a.id);

module.exports = { AGENTS, RESEARCH_IDS };
