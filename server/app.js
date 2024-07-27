import morgan from 'morgan';
import express from 'express';
import TourRouter from './routes/tourRoutes.js';
import UserRouter from './routes/userRoutes.js';

const app = express();

// 1) Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTES
app.use('/api/v1/tours', TourRouter);
app.use('/api/v1/users', UserRouter);

export default app;
