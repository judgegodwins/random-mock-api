import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/signup', AuthController.register);
router.post('/test', async (req, res) => { throw new Error('sjs') })

export default router;