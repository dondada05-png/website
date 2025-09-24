import fs from 'fs';
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
  console.log('.env.local written with Ethereal credentials:\n');
  console.log(envContent);
}

run().catch((err) => {
  console.error('Failed to create Ethereal account:', err);
  process.exit(1);
});
