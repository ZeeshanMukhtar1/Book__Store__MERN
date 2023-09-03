import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Book } from './Models/Books__Model.js';
//  importing book router
import booksRouter from './Routes/Books__Route.js';

dotenv.config();

const app = express();

// Define constants first
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route at /
app.get('/', (req, res) => {
  res.json('Route is working');
});

// Using middleware for the /books route
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const databaseUrl = process.env.DATABASE_URL;
console.log('DATABASE_URL', databaseUrl);

// Connecting to MongoDB
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
