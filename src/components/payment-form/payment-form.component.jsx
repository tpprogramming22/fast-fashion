import { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


import { FormContainer, PaymentFormContainer } from "./payment-form";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 2999 }),
    }).then(res => res.json());

    const { paymentIntent: { client_secret }} = response;


    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: 'Test user'
            }
        }
    })

    if(paymentResult.error) {
        alert(paymentResult.error);
    }
    else{
        if(paymentResult.paymentIntent.status=='succeeded'){
            alert('payment successful');
        }
    }

  };

  return (
    <div>
        <form onSubmit={paymentHandler}>
      <CardElement />
      <button>Pay now!</button>
      </form>
    </div>
  );
};

export default PaymentForm;
