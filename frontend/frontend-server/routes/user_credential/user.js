import express from 'express';
import loginRouter from './login.js';
import signUpRouter from './signup.js';

const router = express.Router();

router.use("/user", loginRouter);
router.use("/user", signUpRouter);

export default router