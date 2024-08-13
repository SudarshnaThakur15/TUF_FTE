import express from 'express'
import dotenv from 'dotenv'
// import createConnections from './db/connection.js';
import router from './routes/MongoRoutes.js'
import cors from 'cors'
dotenv.config()
import connectDB from './db/connection-mongoose.js';

import Banner from './Models/banners.js'
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 5500;
=======
const port = process.env.PORT || 4000;
>>>>>>> f7cb5718e35d352dd05ba90b82444da49b3ebd6a
app.use(express.json()); 
app.use(cors());
// MySQL connection


        const connection= await connectDB();
        app.use('/api/banners', router);
        if(connection){
            app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
          });}
    
      
app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });





