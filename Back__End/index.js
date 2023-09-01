import express from 'express';
import { PORT } from './config.js';

const app = express();

// making 1st route at /
app.get('/', (req, res) => {
  res.json('route is working');
  return res.status(200);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
