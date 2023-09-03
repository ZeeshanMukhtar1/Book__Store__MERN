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
// getting all books at once
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
// getting specific book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    return res.status(200).json({
      books: books,
    });
  } catch (error) {
    console.log('Error ', error);
    res.status(500).send('Server error');
  }
});
// Updating a cetain book by ID
app.put('/books/:id', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send('Please fill all the fields');
    } else {
      const { id } = req.params;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      // Logging the success  the message separately
      console.log('Book Updated successfully', updatedBook);

      // Send the response with JSON data
      return res.status(200).json({
        books: updatedBook,
      });
    }
  } catch (error) {
    console.log('Error', error);
    res.status(500).send('Server error');
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send('Invalid book ID');
    }

    // Attempt to find and delete the book by ID
    const deletedBook = await Book.findByIdAndRemove(id);

    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }

    // Book was successfully deleted
    return res.status(200).json({
      message: 'Book deleted successfully',
      deletedBook,
    });
  } catch (error) {
    console.error('Error', error);
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
