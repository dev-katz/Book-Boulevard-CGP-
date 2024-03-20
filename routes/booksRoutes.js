const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController');


router.post('/add', bookController.addBook);

router.get('/all', bookController.getAllBooks);

router.post('/:bookId/testimonials', bookController.addTestimonialToBook);

router.get('/:bookId', bookController.getBookById);

router.put('/:bookId/update', bookController.updateBookDetails);

module.exports = router;
