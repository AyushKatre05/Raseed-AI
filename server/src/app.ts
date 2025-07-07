require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

// Initialize Express
const app = express();

// Database Connection
connectDB();

// Security Middleware
app.use(helmet());
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

// Static Files (if needed)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
});

// Error Handling Middleware
import { Request, Response, NextFunction } from 'express';

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'production' 
    ? 'Something went wrong' 
    : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});




app.get('/', async (req: Request, res: Response) => {
    console.log('Server is running...')
    res.status(200).json({
        message:"Server is working!"
    })
})

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API'
  });
});

//Routes
app.use('/auth',authRoutes);
app.use('/user',userRoutes);

// 404 Handler


// Server Configuration
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  if (err instanceof Error) {
    console.error(`Error: ${err.message}`);
  } else {
    console.error('Unhandled Rejection:', err);
  }
  server.close(() => process.exit(1));
});

module.exports = app;