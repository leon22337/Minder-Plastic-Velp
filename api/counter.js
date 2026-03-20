// api/counter.js — Vercel Serverless Function
// Uses REDIS_URL environment variable (set in Vercel dashboard).
// GET  /api/counter  → { count: N }
// POST /api/counter  → increments, returns { count: N }

const COUNTER_KEY = "velp_email_clicks";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    return res.status(200).json({ count: 0, configured: false });
  }

  try {
    // Dynamically import redis (installed via package.json)
    const { createClient } = await import("redis");
    const client = createClient({ url: redisUrl });
    await client.connect();

    let count;
    if (req.method === "POST") {
      count = await client.incr(COUNTER_KEY);
    } else {
      const val = await client.get(COUNTER_KEY);
      count = val ? parseInt(val, 10) : 0;
    }

    await client.quit();
    return res.status(200).json({ count, configured: true });

  } catch (err) {
    console.error("Redis error:", err.message);
    return res.status(500).json({ count: 0, error: err.message });
  }
}
  }
}
