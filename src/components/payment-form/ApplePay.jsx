import React from "react";
import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "gbp",
      country: "GB",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo Payment",
        amount: 2999,
      },
    });


    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on('paymentmethod', async(e) => {
        const {clientSecret} = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: 2999 }),
          }).then(r => r.json());

          const {error, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: e.paymentMethod.id,
            }, {
                handleActions: false,
            }
          )
          if(error){
            e.complete('fail');
            return;
          }
          e.complete('success');
          if(paymentIntent.status == 'requires_action'){
            stripe.confirmCardPayment(clientSecret);
          }
    })

  }, [stripe, elements]);
  return (
    <div>
      <h1>Apple Pay</h1>

      {paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}}/>}
    </div>
  );
};

export default ApplePay;
