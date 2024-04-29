import express from 'express';
import defaultMusicRouter from './default_music.js';
import searchMusicRouter from './search_music.js';

const router = express.Router();

router.use("/music", defaultMusicRouter);
router.use("/music", searchMusicRouter);

export default router