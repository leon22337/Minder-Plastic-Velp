// api/counter.js — Vercel Serverless Function
// Handles the shared click counter using Vercel KV (Redis).
//
// GET  /api/counter        → returns { count: N }
// POST /api/counter        → increments by 1, returns { count: N }
//
// Setup: In your Vercel project dashboard, go to Storage → Create KV Database
// → Connect it to this project. That's it — KV_REST_API_URL and
// KV_REST_API_TOKEN are injected automatically as environment variables.

const COUNTER_KEY = "velp_email_clicks";

export default async function handler(req, res) {
  // Allow cross-origin requests from the frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Check KV environment variables are available
  const kvUrl   = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  if (!kvUrl || !kvToken) {
    // KV not set up yet — return 0 gracefully so the site still works
    console.warn("Vercel KV not configured. Set up KV storage in your Vercel dashboard.");
    return res.status(200).json({ count: 0, configured: false });
  }

  try {
    if (req.method === "POST") {
      // Atomically increment the counter
      const response = await fetch(`${kvUrl}/incr/${COUNTER_KEY}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${kvToken}` },
      });
      const data = await response.json();
      return res.status(200).json({ count: data.result ?? 0, configured: true });

    } else {
      // GET — just read the current value
      const response = await fetch(`${kvUrl}/get/${COUNTER_KEY}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      });
      const data = await response.json();
      return res.status(200).json({ count: data.result ?? 0, configured: true });
    }

  } catch (err) {
    console.error("KV error:", err);
    return res.status(500).json({ count: 0, error: "Counter unavailable" });
  }
}
