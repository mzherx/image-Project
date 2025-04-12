import { loadStripe } from '@stripe/stripe-js';

// Make sure to use the publishable key, not the secret key
const stripePromise = loadStripe('pk_test_51PaePxCaWz00BLNqJ2TR9WvHtSDqoISg5g7spDLRPTdMmgnjXSLX9HMBhSUPkfOeyOxOMSvwKLtEuiX8w24Lb3hP009xWRc1wu');

export default stripePromise;
