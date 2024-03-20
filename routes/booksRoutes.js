const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController');

// Route to add a book
router.post('/add', bookController.addBook);

// Route to get all books
router.get('/all', bookController.getAllBooks);

module.exports = router;
