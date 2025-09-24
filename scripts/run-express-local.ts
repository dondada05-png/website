import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createServer } from '../server/index.ts';

const port = Number(process.env.LOCAL_SERVER_PORT ?? 3001);
const app = createServer();

app.listen(port, () => {
  console.log(`Local Express server listening on http://localhost:${port}`);
});
