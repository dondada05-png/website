import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });

async function run() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = String(process.env.SMTP_SECURE) === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error('SMTP not configured in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  const info = await transporter.sendMail({
    from: 'Test <test@example.com>',
    to: process.env.CONTACT_TO || 'salvatorestroomup@gmail.com',
    subject: 'SMTP test message',
    text: 'This is a test from send-smtp-test.mjs',
  });

  console.log('Message sent:', info.messageId);
  const url = nodemailer.getTestMessageUrl(info);
  if (url) console.log('Preview URL:', url);
}

run().catch((err) => { console.error(err); process.exit(1); });
