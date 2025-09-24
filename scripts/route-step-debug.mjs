import express from 'express';
import cors from 'cors';

function stepDebug() {
  const app = express();
  try {
    app.use(cors());
    console.log('cors registered');
    app.use(express.json());
    console.log('json registered');
    app.use(express.urlencoded({ extended: true }));
    console.log('urlencoded registered');

    try {
      app.get('/api/ping', (_req, res) => res.json({ message: 'ok' }));
      console.log('registered /api/ping');
    } catch (err) {
      console.error('error registering /api/ping', err);
    }

    try {
      // simulate handleDemo
      app.get('/api/demo', (req, res) => res.json({ message: 'demo' }));
      console.log('registered /api/demo');
    } catch (err) {
      console.error('error registering /api/demo', err);
    }

    try {
      // simulate handleContact
      app.post('/api/contact', (req, res) => res.json({ ok: true }));
      console.log('registered /api/contact');
    } catch (err) {
      console.error('error registering /api/contact', err);
    }

  } catch (err) {
    console.error('global error', err);
  }
}

stepDebug();
