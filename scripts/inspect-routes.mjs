import "dotenv/config";
import { createServer } from '../dist/server/node-build.mjs';

try {
  const app = createServer();
  const routes = [];
  const stack = (app && app._router && app._router.stack) ? app._router.stack : [];
  for (const layer of stack) {
    if (layer && layer.route && layer.route.path) {
      routes.push({ path: layer.route.path, methods: layer.route.methods });
    }
  }
  console.log('routes:', routes);
} catch (err) {
  console.error('inspect error', err);
  process.exit(1);
}
