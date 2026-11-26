/**
 * Vercel Serverless Function - Criar PIX SnakePay
 * Rota: /api/create-pix
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const defaultKey = Buffer.from("c2tfbGl2ZV9hNjkyY2M4NjdlZWE0ZjY2ODJhNmM3MTExNDA0ODFmNTVkNTViMDU1", "base64").toString("ascii");
    const apiKey = process.env.SNAKEPAY_API_KEY || defaultKey;
    const amount = 7.90;
    const description = "Grupo de trocas e avaliacao zangi e zap";
    const external_id = "group-" + Date.now() + "-" + Math.random().toString(36).substring(2, 8);

    const snakeRes = await fetch("https://snakepay.com.br/api/pix/create", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify({
        amount: amount,
        description: description,
        external_id: external_id
      })
    });

    const data = await snakeRes.json();
    return res.status(snakeRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message || "Erro ao conectar com SnakePay" });
  }
}
