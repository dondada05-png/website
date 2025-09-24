import fs from 'fs';

async function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function run() {
  if (!fs.existsSync('.env.local')) {
    console.error('.env.local not found — run scripts/gen-env-ethereal.mjs first');
    process.exit(1);
  }

  const url = 'http://localhost:8888/api/contact';
  const payload = {
    name: 'Local Test',
    email: 'test@example.com',
    message: 'This is a local Netlify Dev test.'
  };

  for (let i=0;i<20;i++) {
    try {
      console.log('POST attempt', i+1, 'to', url);
      // Use global fetch available in Node 18+ / 24+
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      console.log('Status:', res.status);
      console.log('Response:', text);
      return;
    } catch (err) {
      console.log('Request failed (server probably not up yet):', err.message || err);
      await wait(1500);
    }
  }

  console.error('All attempts failed. Is netlify dev running?');
}

run().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
