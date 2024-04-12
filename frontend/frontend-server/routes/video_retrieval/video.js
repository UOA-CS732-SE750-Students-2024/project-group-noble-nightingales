import express from 'express';
import defaultVideoRouter from './default_videos.js';

const router = express.Router();

router.use('/video', defaultVideoRouter);

export default router