import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Ji9VFSBncWPFJuppuTRgrD5SDDYUZTGCoZc2yTVQmgwDJDFt3FBozLsCh3WoXHYsp318twFZIMkfztPzYs3zX8I00Uxn3YZAZ';

    const onToken = token => {
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label='Hit Me To Purchase'
            name='LION clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is Rs${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;