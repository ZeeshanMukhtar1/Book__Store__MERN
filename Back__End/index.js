import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
dotEnv.config();

const app = express();

// Define constants first
const PORT = process.env.PORT || 5000;

// making 1st route at /
app.get('/', (req, res) => {
  res.json('route is working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const databaseUrl = process.env.DATABASE_URL;
console.log('DATABASE_URL', databaseUrl);

// connecting to MongoDB
mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
