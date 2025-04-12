import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import connectedDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import userModel from './models/userModel.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51PaePxCaWz00BLNqJ2TR9WvHtSDqoISg5g7spDLRPTdMmgnjXSLX9HMBhSUPkfOeyOxOMSvwKLtEuiX8w24Lb3hP009xWRc1wu', {
  apiVersion: '2023-10-16'
});
const app = express();

app.use(express.json());
app.use(cors({
  origin: ['https://image-project-client.vercel.app', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}));
await connectedDB();

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Create checkout session
app.post('/api/stripe/create-checkout-session', async (req, res) => {
    try {
        const { planId, userId } = req.body;

        if (!planId || !userId) {
            return res.status(400).json({ success: false, message: 'Plan ID and User ID are required' });
        }

        const plans = {
            Basic: { price: 1000, credits: 100, id: 'Basic' }, // Price is in cents
            Advanced: { price: 5000, credits: 500, id: 'Advanced' },
            Business: { price: 25000, credits: 5000, id: 'Business' },
        };

        const plan = plans[planId];
        if (!plan) {
            return res.status(400).json({ success: false, message: 'Invalid Plan ID' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: plan.id, // Plan ID used as name
                        },
                        unit_amount: plan.price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/success`,
            cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/cancel`,
        });

        res.status(200).json({ 
            success: true, 
            url: session.url,
            userId, // Include userId in the response
            planName: plan.id // Include the plan name in the response
        });
    } catch (error) {
        console.error('Error creating Stripe session:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.post('/api/stripe/confirm-payment', async (req, res) => {
    try {
        const { planId, userId } = req.body;

        if (!planId || !userId) {
            return res.status(400).json({ success: false, message: 'Plan ID and User ID are required' });
        }

        // Map plan IDs to credit values
        const productPlans = {
            Basic: 100,
            Advanced: 500,
            Business: 5000,
        };

        const creditsToAdd = productPlans[planId];
        if (!creditsToAdd) {
            return res.status(400).json({ success: false, message: `Invalid plan ID: ${planId}` });
        }

        // Find the user by ID
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Update user credits
        user.creditBalance = (user.creditBalance || 0) + creditsToAdd;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Payment confirmed and credits updated',
            creditBalance: user.creditBalance,
        });
    } catch (error) {
        console.error('Error confirming payment:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.get('/', (req, res) => res.send('API working'));
app.listen(PORT, () => console.log('Server running on port ' + PORT));
