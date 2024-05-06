import express from 'express';
import loginRouter from './login.js';
import signUpRouter from './signup.js';
import emailRouter from './email_verification.js';

const router = express.Router();

router.use("/user", loginRouter);
router.use("/user", signUpRouter);
router.use("/user", emailRouter);

export default router