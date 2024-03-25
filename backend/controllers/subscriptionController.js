const Subscription = require('../models/Subscription');
const paypal = require('../paypal-config');


exports.subscribe = async (req, res) => {
    try {
        const { tier } = req.body; // Assuming tier corresponds to a billing plan ID on PayPal

        const planId = tier;

        if (!req.user || !req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }



        // Create the subscription JSON object
        const billingAgreementAttributes = {
            "name": "Subscription to " + tier,
            "description": "Monthly Subscription to " + tier,
            "start_date": new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString(), // Start date should be at least 24 hours in the future
            "plan": {
                "id": planId
            },
            "payer": {
                "payment_method": "paypal"
            }
        };

        // Use the PayPal SDK to create the subscription
        paypal.billingAgreement.create(billingAgreementAttributes, async function (error, billingAgreement) {
            if (error) {
                console.error(error);
                res.status(500).json({ message: error.response });
                return;
            }

            // Find the approval URL to redirect the user to
            let approvalUrl = billingAgreement.links.find(linkObj => linkObj.rel === 'approval_url').href;

            // Here you would normally save the billing agreement details to your database.
            // For this example, we'll only log it out.
            console.log(billingAgreement);

            // Redirect the user to PayPal to approve the subscription
            res.status(200).json({ approvalUrl });
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.cancelSubscription = async (req, res) => {
    try {
        const { subscriptionId } = req.body; // The PayPal subscription ID
        const userId = req.user.userId;

        paypal.billingAgreement.cancel(subscriptionId, {"note": "The user has cancelled the subscription."}, function (error, response) {
            if (error) {
                console.error(error);
                res.status(500).json({ message: error.response });
                return;
            }

            // Update your database to mark the subscription as cancelled
            // ...

            res.status(200).json({ message: 'Subscription cancelled successfully' });
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

