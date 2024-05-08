import express from 'express';
import userRouter from './user_credential/user.js';
import videoRouter from './video_retrieval/video.js';
import musicRouter from './music_retrieval/music.js';
import commentRouter from './comment_retrieval/comment.js';

const router = express.Router()

router.use('/api', userRouter);
router.use('/api', videoRouter);
router.use('/api', musicRouter);
router.use('/api', commentRouter);

export default router