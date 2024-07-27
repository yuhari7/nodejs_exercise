import express from 'express';
// import userController from '../controllers/userController.js';
import {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).patch(editUser).delete(deleteUser);

export default router;
