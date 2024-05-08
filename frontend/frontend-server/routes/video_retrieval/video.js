import express from 'express';
import defaultVideoRouter from './default_videos.js';
import searchVideoRouter from './search_videos.js'

const router = express.Router();

router.use('/video', defaultVideoRouter);
router.use('/video',searchVideoRouter)

export default router