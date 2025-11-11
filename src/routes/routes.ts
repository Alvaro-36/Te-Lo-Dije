import { Router } from 'express';
import { searchCustom } from '../controllers/controller.js';

const router = Router();

router.get('/searchCustom', searchCustom);

// 5. "Exporta esta libreta de pedidos para que el restaurante la use"
export default router;