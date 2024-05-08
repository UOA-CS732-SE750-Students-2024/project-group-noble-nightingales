import express from 'express';
import loginRouter from './login.js';
import signUpRouter from './signup.js';
import emailRouter from './email_verification.js';
import subscriptionRouter from './email_subscription.js';

const router = express.Router();

router.use("/user", loginRouter);
router.use("/user", signUpRouter);
router.use("/user", emailRouter);
router.use("/user", subscriptionRouter);

export default router