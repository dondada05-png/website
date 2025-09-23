import serverless from 'serverless-http';
import { createServer } from '../../server/index';

// Create the express app once per function cold start
const app = createServer();

// Export the Netlify-compatible handler
export const handler = serverless(app as any);
