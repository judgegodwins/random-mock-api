import express from 'express';
import RandomController from '../controllers/RandomController';

const router = express.Router();

router.get('/words', RandomController.getRandomWords);

export default router;