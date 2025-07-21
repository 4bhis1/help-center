// Help Center Data Constants
export const HELP_DATA = {
  hero: {
    title: "How can we help you?",
    subtitle: "Search our knowledge base for quick answers",
    searchPlaceholder: "Search for help articles, guides, and FAQs..."
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
      tags: ["orders", "rejection", "trading"]
    },
    {
      id: 2,
      title: "How do I add funds to my account?",
      category: "Funds",
      views: 98000,
      readTime: "2 min",
      tags: ["funds", "deposit", "payment"]
    },
    {
      id: 3,
      title: "What is the difference between CNC, MIS, and NRML?",
      category: "Trading and Markets",
      views: 87000,
      readTime: "4 min",
      tags: ["product-types", "cnc", "mis", "nrml"]
    },
    {
      id: 4,
      title: "How to download contract notes and statements?",
      category: "Console",
      views: 76000,
      readTime: "3 min",
      tags: ["statements", "contract-notes", "download"]
    },
    {
      id: 5,
      title: "Why is my withdrawal not processed?",
      category: "Funds",
      views: 65000,
      readTime: "3 min",
      tags: ["withdrawal", "funds", "processing"]
    },
    {
      id: 6,
      title: "How to set up SIP in mutual funds?",
      category: "Coin",
      views: 54000,
      readTime: "5 min",
      tags: ["sip", "mutual-funds", "investment"]
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
  trackTicket: "/api/tickets/track"
};

// Helper functions for data manipulation
export const getArticlesByCategory = (categoryId: string) => {
  return HELP_DATA.popularArticles.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === categoryId
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