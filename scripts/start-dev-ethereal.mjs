import fs from 'fs';
import { execSync } from 'child_process';
import nodemailer from 'nodemailer';

async function run() {
  console.log('Creating Ethereal account...');
  const testAccount = await nodemailer.createTestAccount();

  const envContent = `SMTP_HOST=${testAccount.smtp.host}
SMTP_PORT=${testAccount.smtp.port}
SMTP_SECURE=${testAccount.smtp.secure}
SMTP_USER=${testAccount.user}
SMTP_PASS=${testAccount.pass}
CONTACT_TO=salvatorestroomup@gmail.com
PING_MESSAGE=dev-ping
`;

  fs.writeFileSync('.env.local', envContent, { encoding: 'utf8' });
  console.log('.env.local written with Ethereal credentials. Starting dev server...');

  // Start dev server (blocking)
  execSync('pnpm dev', { stdio: 'inherit' });
}

run().catch((err) => {
  console.error('Failed to start dev with Ethereal:', err);
  process.exit(1);
});
