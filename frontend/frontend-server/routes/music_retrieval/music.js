import express from 'express';
import defaultMusicRouter from './default_music.js';
import searchMusicRouter from './search_music.js';
import authenticationMusicRouter from './music_authentication.js';

const router = express.Router();

router.use("/music", defaultMusicRouter);
router.use("/music", searchMusicRouter);
router.use("/music", authenticationMusicRouter);
export default router