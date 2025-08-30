import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage - Highest priority
    {
      url: "https://www.assexmarkets.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    // Core trading pages - High priority
    {
      url: "https://www.assexmarkets.com/live-account-trading",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.assexmarkets.com/demo-account-trading",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.assexmarkets.com/metatrader5",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Trading instruments - High priority
    {
      url: "https://www.assexmarkets.com/forex-cfd",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.assexmarkets.com/crypto-cfd",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.assexmarkets.com/commodities",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.assexmarkets.com/metals",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Account types and features - Medium-high priority
    {
      url: "https://www.assexmarkets.com/standard",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.assexmarkets.com/raw-spread",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.assexmarkets.com/leverage-plus",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.assexmarkets.com/copy-trading",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.assexmarkets.com/paam",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Trading tools and calculators - Medium priority
    {
      url: "https://www.assexmarkets.com/trading-calculator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.assexmarkets.com/currency-converter",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },

    // Contests and promotions - Medium priority (may change frequently)
    {
      url: "https://www.assexmarkets.com/tournament",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.assexmarkets.com/trading-contest",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Financial information - Medium priority
    {
      url: "https://www.assexmarkets.com/fees",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.assexmarkets.com/deposits-withdrawals",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Company information - Medium priority
    {
      url: "https://www.assexmarkets.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.assexmarkets.com/client-protection",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Support and help - Medium priority
    {
      url: "https://www.assexmarkets.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.assexmarkets.com/faqs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Legal pages - Lower priority but important
    {
      url: "https://www.assexmarkets.com/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://www.assexmarkets.com/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
