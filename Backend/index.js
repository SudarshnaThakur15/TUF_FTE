import express from 'express'
import dotenv from 'dotenv'
import createConnections from './db/connection.js';
import router from './routes/bannerRoutes.js'
import cors from 'cors'
dotenv.config()

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json()); 
app.use(cors());
// MySQL connection

(async()=> { 
    
    try{
        const connection= await createConnections();
        app.use('/api/banner', router);
        if(connection){
            app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
          });}
    }
    catch(error)
    {
     console.log(error)
    }
      
    

})();




