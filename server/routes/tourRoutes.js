import express from 'express';
import {
  deleteTour,
  editTour,
  createTour,
  getTourById,
  getAllTours,
  checkId,
  checkBody,
} from '../controllers/tourController.js';

const router = express.Router();

// Apply the checkId middleware to routes with 'id' parameter
router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTourById).patch(editTour).delete(deleteTour);

export default router;
