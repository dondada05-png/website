// Use global fetch available in Node 18+
async function run() {
  const url = 'http://localhost:3001/api/contact';
  const payload = {
    name: 'Local Express Test',
    email: 'test@example.com',
    message: 'Testing express local server sending via Ethereal'
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  console.log('Status', res.status);
  console.log(await res.text());
}

run().catch((err) => { console.error(err); process.exit(1); });
