import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      'mongodb+srv://Roman:NBOUaCak34DXItU6@todoappcluster.0v1d7.mongodb.net/?retryWrites=true&w=majority&appName=TodoAppCluster'
    );
    console.log('MongoDB connected successfully');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('MongoDB connection error:', err.message);
    } else {
      console.error('An unknown error occurred during MongoDB connection');
    }
    process.exit(1);
  }
};

export default connectDB;
