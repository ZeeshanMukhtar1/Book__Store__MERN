// Importing express for using express router middleware
import express from 'express';
const router = express.Router();
// Importing books schema from Books__Model
import { Book } from '../Models/Books__Model.js';

// Route for saving a new book (Create_Operation)
router.post('/', async (req, res) => {
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
// Getting all books at once
router.get('/', async (req, res) => {
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
// Getting a specific book by ID
router.get('/:id', async (req, res) => {
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
// Updating a certain book by ID
router.put('/:id', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send('Please fill all the fields');
    } else {
      const { id } = req.params;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      // Logging the success message separately
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
// Deleting a certain book by ID

router.delete('/:id', async (req, res) => {
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

export default router;
