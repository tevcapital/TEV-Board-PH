const AGENT_FEEDS = {
  MVP: [
    'https://news.google.com/rss/search?q=%22Manny+Pangilinan%22+OR+PLDT+OR+Meralco+OR+%22Metro+Pacific%22&hl=en-PH&gl=PH&ceid=PH:en'
  ],
  RSA: [
    'https://news.google.com/rss/search?q=%22Ramon+Ang%22+OR+%22San+Miguel+Corporation%22+OR+SMC&hl=en-PH&gl=PH&ceid=PH:en'
  ],
  JAZA: [
    'https://news.google.com/rss/search?q=%22Jaime+Zobel%22+OR+%22Ayala+Corporation%22+OR+%22Ayala+Land%22+OR+%22Bank+of+the+Philippine+Islands%22&hl=en-PH&gl=PH&ceid=PH:en'
  ],
  EKR: [
    'https://news.google.com/rss/search?q=%22Enrique+Razon%22+OR+ICTSI+OR+Bloomberry+OR+Solaire&hl=en-PH&gl=PH&ceid=PH:en'
  ],
  NVT: [
    'https://news.google.com/rss/search?q=%22Nestor+Tan%22+OR+%22BDO+Unibank%22+OR+%22BDO+Philippines%22&hl=en-PH&gl=PH&ceid=PH:en'
  ],
  CHIEF: [],
  TENSION: []
};

const SHARED_FEEDS = [
  'https://www.bworldonline.com/feed/',
  'https://business.inquirer.net/feed',
  'https://news.google.com/rss/search?q=PSEi+OR+%22Philippine+Stock+Exchange%22&hl=en-PH&gl=PH&ceid=PH:en',
  'https://news.google.com/rss/search?q=%22Bangko+Sentral%22+OR+BSP+Philippines&hl=en-PH&gl=PH&ceid=PH:en',
  'https://feeds.reuters.com/reuters/APTopNews',
  'https://news.google.com/rss/search?q=Philippines+economy&hl=en&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=Philippines+OR+ASEAN+business&hl=en&gl=US&ceid=US:en'
];

const FEEDS = Object.fromEntries(
  Object.entries(AGENT_FEEDS).map(([agentId, urls]) => [agentId, [...urls, ...SHARED_FEEDS]])
);

module.exports = { FEEDS };
