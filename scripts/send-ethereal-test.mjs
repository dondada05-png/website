import nodemailer from 'nodemailer';

async function run() {
  // Create a test account (Ethereal)
  const testAccount = await nodemailer.createTestAccount();

  console.log('Ethereal account created: %s %s', testAccount.user, testAccount.pass);

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const to = 'salvatorestroomup@gmail.com';

  const info = await transporter.sendMail({
    from: 'StroomUp Test <test@stroomup.local>',
    to,
    subject: 'Ethereal test message from local script',
    text: 'This is a test message sent via Ethereal (nodemailer).',
    html: '<p>This is a test message sent via <strong>Ethereal</strong> (nodemailer).</p>',
  });

  console.log('Message sent: %s', info.messageId);
  const preview = nodemailer.getTestMessageUrl(info);
  console.log('Preview URL (open in browser): %s', preview);
}

run().catch((err) => {
  console.error('Failed to send test message:', err);
  process.exit(1);
});
