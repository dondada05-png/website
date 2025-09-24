import nodemailer from 'nodemailer';
import fs from 'fs';

(async function(){
  const test = await nodemailer.createTestAccount();
  const s = `SMTP_HOST=${test.smtp.host}\nSMTP_PORT=${test.smtp.port}\nSMTP_SECURE=${test.smtp.secure}\nSMTP_USER=${test.user}\nSMTP_PASS=${test.pass}\nCONTACT_TO=salvatorestroomup@gmail.com\n`;
  fs.writeFileSync('.env.local', s, { encoding: 'utf8' });
  console.log('.env.local written');
  console.log('Ethereal user:', test.user);
  console.log('Ethereal pass:', test.pass);
})();
