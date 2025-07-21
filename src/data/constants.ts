// Zerodha Support Center Data Constants
export const HELP_DATA = {
  hero: {
    title: "Support Portal",
    subtitle: "Search for answers or browse around for help",
    searchPlaceholder: "What can we help you with?"
  },
  
  categories: [
    {
      id: "account",
      title: "Account",
      description: "Opening, KYC, and account-related queries",
      icon: "👤",
      articleCount: 45,
      color: "#387ed1"
    },
    {
      id: "trading",
      title: "Trading and Markets",
      description: "Orders, positions, and market-related queries",
      icon: "📈",
      articleCount: 78,
      color: "#00d09c"
    },
    {
      id: "funds",
      title: "Funds",
      description: "Adding funds, withdrawals, and payments",
      icon: "💰",
      articleCount: 32,
      color: "#eb6100"
    },
    {
      id: "console",
      title: "Console",
      description: "Reports, statements, and portfolio queries",
      icon: "📊",
      articleCount: 28,
      color: "#9b59b6"
    },
    {
      id: "coin",
      title: "Coin",
      description: "Mutual funds and SIP-related queries",
      icon: "🪙",
      articleCount: 24,
      color: "#f39c12"
    },
    {
      id: "kiteconnect",
      title: "Kite Connect",
      description: "API documentation and developer queries",
      icon: "🔗",
      articleCount: 56,
      color: "#e74c3c"
    }
  ],

  popularArticles: [
    {
      id: 1,
      title: "Why is my order getting rejected?",
      category: "Trading and Markets",
      views: 125000,
      readTime: "3 min",
      tags: ["orders", "rejection", "trading"],
      categoryId: "trading"
    },
    {
      id: 2,
      title: "How do I add funds to my account?",
      category: "Funds",
      views: 98000,
      readTime: "2 min",
      tags: ["funds", "deposit", "payment"],
      categoryId: "funds"
    },
    {
      id: 3,
      title: "What is the difference between CNC, MIS, and NRML?",
      category: "Trading and Markets",
      views: 87000,
      readTime: "4 min",
      tags: ["product-types", "cnc", "mis", "nrml"],
      categoryId: "trading"
    },
    {
      id: 4,
      title: "How to download contract notes and statements?",
      category: "Console",
      views: 76000,
      readTime: "3 min",
      tags: ["statements", "contract-notes", "download"],
      categoryId: "console"
    },
    {
      id: 5,
      title: "Why is my withdrawal not processed?",
      category: "Funds",
      views: 65000,
      readTime: "3 min",
      tags: ["withdrawal", "funds", "processing"],
      categoryId: "funds"
    },
    {
      id: 6,
      title: "How to set up SIP in mutual funds?",
      category: "Coin",
      views: 54000,
      readTime: "5 min",
      tags: ["sip", "mutual-funds", "investment"],
      categoryId: "coin"
    },
    {
      id: 7,
      title: "How to open a Zerodha account?",
      category: "Account",
      views: 89000,
      readTime: "4 min",
      tags: ["account-opening", "kyc", "documents"],
      categoryId: "account"
    },
    {
      id: 8,
      title: "What are the brokerage charges?",
      category: "Account",
      views: 67000,
      readTime: "2 min",
      tags: ["brokerage", "charges", "pricing"],
      categoryId: "account"
    }
  ],

  quickLinks: [
    {
      title: "Create a ticket",
      description: "Can't find your answer? Create a support ticket",
      icon: "🎫",
      action: "create-ticket"
    },
    {
      title: "Track your ticket",
      description: "Check the status of your existing tickets",
      icon: "🔍",
      action: "track-ticket"
    },
    {
      title: "Call us",
      description: "Speak to our support team directly",
      icon: "📞",
      action: "call-support"
    }
  ],

  searchSuggestions: [
    "How to place an order",
    "Account opening process",
    "Adding funds to account",
    "Margin requirements",
    "Tax implications",
    "API documentation",
    "Mobile app issues",
    "Withdrawal process"
  ]
};

// API endpoints (for future integration)
export const API_ENDPOINTS = {
  search: "/api/search",
  categories: "/api/categories",
  articles: "/api/articles",
  popularArticles: "/api/articles/popular",
  createTicket: "/api/tickets/create",
  trackTicket: "/api/tickets/track",
  faqs: "/api/faqs"
};

// Helper functions for data manipulation
export const getArticlesByCategory = (categoryId: string) => {
  if (categoryId === 'all') return HELP_DATA.popularArticles;
  return HELP_DATA.popularArticles.filter(article => 
    article.categoryId === categoryId
  );
};

export const searchArticles = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return HELP_DATA.popularArticles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};

export const getFAQsByCategory = (categoryId: string) => {
  if (categoryId === 'all') return FAQ_DATA;
  return FAQ_DATA.filter(faq => faq.category === categoryId);
};

export const getPopularFAQs = () => {
  return FAQ_DATA.filter(faq => faq.isPopular);
};
// FAQ Data
export const FAQ_DATA = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions sent to your email.",
    category: "account",
    isPopular: true
  },
  {
    id: 2,
    question: "What are the trading hours?",
    answer: "Trading hours are Monday to Friday, 9:15 AM to 3:30 PM for equity markets. Currency and commodity markets have different timings.",
    category: "trading",
    isPopular: true
  },
  {
    id: 3,
    question: "How long does fund withdrawal take?",
    answer: "Fund withdrawals are processed within 30 minutes during market hours and by next working day for requests after market hours.",
    category: "funds",
    isPopular: true
  },
  {
    id: 4,
    question: "What documents are required for account opening?",
    answer: "You need PAN card, Aadhaar card, bank statement/cancelled cheque, and income proof documents for account opening.",
    category: "account",
    isPopular: false
  },
  {
    id: 5,
    question: "How do I place a stop-loss order?",
    answer: "You can place a stop-loss order by selecting 'SL' or 'SL-M' as the order type and entering your trigger price.",
    category: "trading",
    isPopular: true
  },
  {
    id: 6,
    question: "What is the minimum amount to start trading?",
    answer: "There's no minimum amount required to start trading. However, you need sufficient funds to buy at least one share of your chosen stock.",
    category: "account",
    isPopular: false
  },
  {
    id: 7,
    question: "How do I download my tax statements?",
    answer: "You can download tax statements from Console under the 'Reports' section. P&L statements and tax reports are available there.",
    category: "console",
    isPopular: false
  },
  {
    id: 8,
    question: "What is the brokerage for delivery trades?",
    answer: "Delivery trades (CNC) have zero brokerage. You only pay statutory charges like STT, exchange charges, and GST.",
    category: "account",
    isPopular: true
  }
];
