import React, { useEffect } from 'react';

const PayPalButton = ({ planId }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AZUSZFCpoMfvoraxEmJaWyCPZvCf9htraDivR5IPvx02CoZxN-OxAdvJvGoQ-meiBuG6BIjeSgU0dinN&vault=true&intent=subscription";
        script.addEventListener("load", () => {
            window.paypal.Buttons({
                style: {
                    shape: 'pill',
                    color: 'black',
                    layout: 'vertical',
                    label: 'subscribe',
                },
                createSubscription: function (data, actions) {
                    return actions.subscription.create({
                        plan_id: planId,
                    });
                },
                onApprove: function (data, actions) {
                    alert(`Subscription successful: ${data.subscriptionID}`);
                },
            }).render(`#paypal-button-container-${planId}`);
        });
        document.body.appendChild(script);
    }, [planId]);

    return <div id={`paypal-button-container-${planId}`}></div>;
};

export default PayPalButton;
