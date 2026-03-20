// api/counter.js — Vercel Serverless Function
// Uses REDIS_URL (injected by Redis Cloud integration on Vercel).
// No npm packages needed — uses Node.js built-in fetch.
//
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
    console.warn("REDIS_URL not configured");
    return res.status(200).json({ count: 0, configured: false });
  }

  try {
    // Parse the Redis URL to extract credentials and host
    // Format: redis://default:<password>@<host>:<port>
    const url  = new URL(redisUrl);
    const host = url.hostname;
    const port = url.port || "6379";
    const pass = url.password;

    // Use the Upstash Redis REST API (available on all Redis Cloud databases)
    // This works without any npm package
    const restBase = `https://${host}`;
    const authHeader = { Authorization: `Bearer ${pass}` };

    if (req.method === "POST") {
      const r = await fetch(`${restBase}/incr/${COUNTER_KEY}`, {
        method: "POST",
        headers: authHeader,
      });
      const data = await r.json();
      return res.status(200).json({ count: data.result ?? 0, configured: true });
    } else {
      const r = await fetch(`${restBase}/get/${COUNTER_KEY}`, {
        headers: authHeader,
      });
      const data = await r.json();
      return res.status(200).json({ count: data.result ? parseInt(data.result) : 0, configured: true });
    }

  } catch (err) {
    console.error("Counter error:", err.message);
    return res.status(500).json({ count: 0, error: err.message });
  }
}
