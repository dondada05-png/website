import { RequestHandler } from 'express';
import nodemailer from 'nodemailer';

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing name, email or message' });
    }

    // Build transporter from env vars. The project must provide SMTP credentials.
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const secure = process.env.SMTP_SECURE === 'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      // If SMTP not configured, return helpful message
      return res.status(500).json({ error: 'SMTP not configured on the server. Please set SMTP_HOST, SMTP_USER and SMTP_PASS in environment.' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO ?? 'salvatorestroomup@gmail.com';

    const subject = `Website contact form — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`;

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact send error:', err);
    return res.status(500).json({ error: err?.message ?? 'Unknown error' });
  }
};
