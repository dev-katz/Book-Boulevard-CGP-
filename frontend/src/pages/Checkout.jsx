import './styles/CheckoutPage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CheckoutPage() {
    const userEmail = "ranil.wickremesinghe.unp@gmail.com";
    const { price } = useParams();

    // Define tax and setTax using useState
    const [tax, setTax] = useState(0);

    const openPayPalAPI = () => {
        window.open('https://developer.paypal.com/docs/api/overview/', '_blank');
    };

    // Calculate the Due Now amount
    const [dueNow, setDueNow] = useState('');

    useEffect(() => {
        // Convert price string to number (remove $ and /month)
        const priceNumber = parseFloat(price.replace('$', '').replace('/month', ''));

        // Calculate tax (9%)
        const calculatedTax = priceNumber * 0.09;

        // Round tax to two decimal places
        const roundedTax = calculatedTax.toFixed(2);

        // Set tax state
        setTax(roundedTax);

        // Calculate VAT ($0.99/month)
        const vat = 0.02;

        // Calculate total Due Now amount
        const totalDueNow = priceNumber + calculatedTax + vat;

        // Update state
        setDueNow(totalDueNow.toFixed(2)); // Round to 2 decimal places
    }, [price, setTax]); // Add setTax to the dependency array

    return (
        <main className="check-checkout-container">
            <Navbar />
            <section className="check-checkout-content">
                <div className="check-checkout-details">
                    <h1 className="check-checkout-title">Checkout</h1>
                    <p className="check-checkout-description">Enter the payment info to start your subscription</p>
                    <div className="check-user-info">
                        <div className="check-user-details">
                            <p className="check-user-label">You are logged in as,</p>
                            <p className="check-user-email">{userEmail}</p>
                        </div>
                    </div>
                </div>
                <div className="check-summary-container">
                    <h2 className="check-summary-title">Summary</h2>
                    <hr className="check-summary-divider" />
                    <div className="check-subscription-details">
                        <p className="check-subscription-label">Subscription</p>
                        <p className="check-subscription-price">{price}</p>
                    </div>
                    <hr className="check-summary-divider-2" />
                    <div className="check-subscription-details">
                        <p className="check-subscription-label">Sub Total</p>
                        <p className="check-subscription-price">{price}</p>
                    </div>
                    <div className="check-subscription-details">
                        <p className="check-subscription-label">Tax (9%)</p>
                        <p className="check-subscription-price">${tax}</p>
                    </div>
                    <div className="check-subscription-details">
                        <p className="check-subscription-label">Value added tax (VAT)</p>
                        <p className="check-subscription-price">$1/month</p>
                    </div>
                    <div className="check-subscription-due">
                        <p className="check-subscription-due-lable">Due Now</p>
                        <p className="check-subscription-due-price">${dueNow}</p>
                    </div>
                    <p className="check-subscription-due-text">If your PayPal is connected you will be billed once the proceed to PayPal is pressed.</p>

                    <button onClick={openPayPalAPI} className="paypal-api-icon">Open PayPal API</button>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default CheckoutPage;
