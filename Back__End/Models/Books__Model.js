// Import the necessary modules and libraries
import mongoose from 'mongoose';

// Define the schema for the Book model
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    required: false,
  }
);

// Create and export the Book model using the schema
export const Book = mongoose.model('Book', bookSchema);
