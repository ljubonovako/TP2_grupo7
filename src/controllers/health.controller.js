export async function health(req, res) {
  res.json({ ok: true, service: 'delivr-api' });
}
