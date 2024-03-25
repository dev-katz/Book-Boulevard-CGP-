const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tier: {
        type: String,
        enum: ['Basic', 'Standard', 'Premium'],
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled'],
        default: 'Active'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    }
    // include other relevant fields such as payment details
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
