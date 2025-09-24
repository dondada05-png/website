import serverless from 'serverless-http';
import { createServer } from '../../server/index';

let handler: any;

try {
	// Create the express app once per function cold start
	const app = createServer();
	handler = serverless(app as any);
} catch (err) {
	// Ensure any startup error is visible in Netlify logs
	console.error('Failed to initialize serverless handler for api function:', err);
	// Provide a fallback handler that returns 500 with the error message
	handler = async (event: any, context: any) => {
		console.error('api function fallback handler invoked due to init error');
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Server failed to initialize', details: String(err) }),
		};
	};
}

export { handler };
