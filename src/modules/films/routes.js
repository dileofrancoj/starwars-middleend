import { Router } from 'express';
import { getMovies } from './controller';

const router = Router();

router.route('/films').get(getMovies);

export default router;
