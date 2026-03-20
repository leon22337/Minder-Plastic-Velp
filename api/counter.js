// api/counter.js — Vercel Serverless Function
// Connects to Redis Cloud using TLS (required by Redis Cloud).

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
    const { createClient } = await import("redis");

    // Redis Cloud requires TLS — force rediss:// even if env var says redis://
    const tlsUrl = redisUrl.replace(/^redis:\/\//, "rediss://");

    const client = createClient({
      url: tlsUrl,
      socket: {
        tls: true,
        rejectUnauthorized: false, // Redis Cloud uses self-signed certs
      },
    });

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
