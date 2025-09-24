require('ts-node').register({ transpileOnly: true });
require('dotenv').config({ path: '.env.local' });

const { createServer } = require('../server');

const port = Number(process.env.LOCAL_SERVER_PORT || 3001);
const app = createServer();
app.listen(port, () => {
  console.log(`Local Express server listening on http://localhost:${port}`);
});
