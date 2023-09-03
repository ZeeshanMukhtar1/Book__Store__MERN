import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Book } from './Models/Books__Model.js';

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

// Route for saving a new book (Create_Operation)
app.post('/books', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send('Please fill all the fields');
    } else {
      const newBook = await Book.create(req.body);
      return res.status(200).send(newBook);
    }
  } catch (error) {
    console.error('Error', error);
    res.status(500).send('Server error');
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      count: books.length,
      books: books,
    });
  } catch (error) {
    console.log('Error ', error);
    res.status(500).send('Server error');
  }
});

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
