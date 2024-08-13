import express from 'express'
import dotenv from 'dotenv'
// import createConnections from './db/connection.js';
import router from './routes/MongoRoutes.js'
import cors from 'cors'
dotenv.config()
import connectDB from './db/connection-mongoose.js';

import Banner from './Models/banners.js'
const app = express();


const port = process.env.PORT || 4000;
 
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





