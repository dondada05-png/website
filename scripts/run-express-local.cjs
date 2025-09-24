// Use dynamic ESM import to work in projects that use "type": "module"
require('ts-node').register({ transpileOnly: true });
require('dotenv').config({ path: '.env.local' });

(async () => {
  try {
    const fs = require('fs');
    let serverModule;
    // Prefer the compiled server build if present to avoid ESM/ts-node issues
    const builtPath = '../dist/server/node-build.mjs';
    if (fs.existsSync(require('path').join(__dirname, '..', 'dist', 'server', 'node-build.mjs'))) {
      serverModule = await import(builtPath);
    } else {
      serverModule = await import('../server/index.ts');
    }
    const createServer = serverModule.createServer || serverModule.default;
    const port = Number(process.env.LOCAL_SERVER_PORT || 3001);
    const app = createServer();
    app.listen(port, () => {
      console.log(`Local Express server listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to start local server:', err);
    process.exit(1);
  }
})();
