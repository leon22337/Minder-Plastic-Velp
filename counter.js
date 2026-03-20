// api/counter.js — Vercel Serverless Function
// Uses the REDIS_URL environment variable injected by the Redis Cloud integration.
//
// GET  /api/counter  → returns { count: N }
// POST /api/counter  → increments by 1, returns { count: N }

import { createClient } from "redis";

const COUNTER_KEY = "velp_email_clicks";

let client = null;

async function getClient() {
  if (client && client.isOpen) return client;
  client = createClient({ url: process.env.REDIS_URL });
  client.on("error", (err) => console.error("Redis error:", err));
  await client.connect();
  return client;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (!process.env.REDIS_URL) {
    console.warn("REDIS_URL not set — returning 0");
    return res.status(200).json({ count: 0, configured: false });
  }

  try {
    const redis = await getClient();

    if (req.method === "POST") {
      const count = await redis.incr(COUNTER_KEY);
      return res.status(200).json({ count, configured: true });
    } else {
      const raw   = await redis.get(COUNTER_KEY);
      const count = raw ? parseInt(raw, 10) : 0;
      return res.status(200).json({ count, configured: true });
    }
  } catch (err) {
    console.error("Redis handler error:", err);
    return res.status(500).json({ count: 0, error: String(err) });
  }
}
