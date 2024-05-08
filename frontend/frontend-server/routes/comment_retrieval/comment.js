import express from 'express';
import commentRouter from './retrieve_comment.js';

const router = express.Router();

router.use('/comment', commentRouter);

export default router