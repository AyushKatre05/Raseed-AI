import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not defined');
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Database connection error:', err.message);
    } else {
      console.error('Database connection error:', err);
    }
    process.exit(1);
  }
};

export default connectDB;