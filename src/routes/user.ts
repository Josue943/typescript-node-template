import { Router } from 'express';

import * as controller from '../controllers/user.controller';

const router = Router();

router.post('', controller.createUser);
router.get('', controller.getUsers);

export default router;
