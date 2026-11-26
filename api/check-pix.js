/**
 * Vercel Serverless Function - Consultar Status do PIX SnakePay
 * Rota: /api/check-pix?id=UUID
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "Parâmetro id é obrigatório" });
  }

  try {
    const defaultKey = Buffer.from("c2tfbGl2ZV9hNjkyY2M4NjdlZWE0ZjY2ODJhNmM3MTExNDA0ODFmNTVkNTViMDU1", "base64").toString("ascii");
    const apiKey = process.env.SNAKEPAY_API_KEY || defaultKey;

    const snakeRes = await fetch(`https://snakepay.com.br/api/pix/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const data = await snakeRes.json();
    return res.status(snakeRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message || "Erro ao consultar status no SnakePay" });
  }
}
