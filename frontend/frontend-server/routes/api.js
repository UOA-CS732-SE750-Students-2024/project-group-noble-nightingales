import express from 'express';
import loginRouter from './user_credential/login.js';
import signUpRouter from './user_credential/signup.js';
import defaultVideosRouter from './video_retrieval/default_videos.js';
import defaultMusicRouter from './music_retrieval/default_music.js';

const router = express.Router()

router.use('/user', loginRouter);
router.use('/user', signUpRouter);
router.use('/video', defaultVideosRouter);
router.use('/music', defaultMusicRouter);

export default router