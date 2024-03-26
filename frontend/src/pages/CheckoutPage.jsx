import React from 'react';
import './styles/CheckoutPage.css'
import { useParams } from 'react-router-dom';




function CheckoutPage() {

    const { price } = useParams();
    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div><p>Price: ${price}/month</p></div>
            <div>Logged Email: user@example.com</div>
            <h3>Payment Methods</h3>
            <button className="payment-button">PayPal</button>
            <button className="payment-button">Google Pay</button>
            <button className="payment-button">Visa</button>
        </div>
    );
};


export default CheckoutPage;