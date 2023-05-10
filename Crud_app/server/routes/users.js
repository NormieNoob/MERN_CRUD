import express from 'express';
import { createUser, getAllUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/all', getAllUsers)
router.post('/add', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router; 