import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connection-mongoose.js';
import router from './routes/MongoRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); 
app.use(cors(
  {
    origin: 'http://localhost:5173/',
    credentials: true,
  }

));

// Connect to the database
(async () => {
  try {
    const connection = await connectDB();
    if (connection) {
      console.log('Database connected successfully');
    } else {
      console.log('Failed to connect to the database');
    }

    // Use the router for your API
    app.use('/api/banners', router);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
})();
