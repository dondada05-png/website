# website

Form & email delivery
---------------------

This project supports two ways to deliver contact form messages:

- Server SMTP (current serverless `/api/contact` route, requires SMTP credentials set as environment variables in your host).
- Formspree (recommended when you don't want to manage SMTP credentials). Configure a Formspree endpoint and set `VITE_FORMSPREE_ENDPOINT` at build time.

Quick Formspree setup

1. Create a free account at https://formspree.io and create a new form.
2. Copy the provided Formspree endpoint, it looks like `https://formspree.io/f/{your-id}`.
3. In your development environment create a `.env.local` with:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

4. Rebuild and deploy the site so Vite picks up the new env var.

Testing

Run the app locally and submit the contact form; Formspree will forward submissions to the email address configured in your Formspree project.
