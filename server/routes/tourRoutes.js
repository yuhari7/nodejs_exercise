import express from 'express';
import {
  deleteTour,
  editTour,
  createTour,
  getTourById,
  getAllTours,
} from '../controllers/tourController.js';

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(editTour).delete(deleteTour);

export default router;
