import express from 'express';

import randomRouter from './randomRouter';

const router = express.Router();

router.use('/random', randomRouter);

export default router;