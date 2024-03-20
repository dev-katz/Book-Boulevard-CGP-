const Book = require('../models/Books');

// Controller for adding a book
exports.addBook = async (req, res) => {
    try {
        const { bookName, bookLink, author, category, aboutBook, aboutAuthor  } = req.body;

        // Add more validation as needed
        if (!bookName || !bookLink || !author || !category || !aboutBook || !aboutAuthor) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const newBook = new Book({ bookName, bookLink, author, category, aboutBook, aboutAuthor  });
        await newBook.save();

        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add the book', error: error.message });
    }
};

// Controller for retrieving all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get books', error: error.message });
    }
};

