import { Router } from 'express';
import {
    userDelete,
    userGet,
    userPatch,
    userPost,
    userPut
} from '../controllers/user.controller.js';

export const router = Router();

router.get('/', userGet);

router.post('/', userPost);

router.put('/', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);