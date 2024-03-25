const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authenticateToken = require('../middleware/authMiddleware');

// Route to handle subscription
router.post('/subscribe', authenticateToken, subscriptionController.subscribe);

// Route to cancel subscription
router.post('/cancel-subscription', authenticateToken, subscriptionController.cancelSubscription);

module.exports = router;
