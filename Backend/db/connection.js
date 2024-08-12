import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import createTableQuery from '../schemas/banner.js';
dotenv.config();

async function createConnections() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Connected to the database.');

        await connection.execute(createTableQuery);
       console.log('Banners table created successfully.');  
        return connection;
    } catch (err) {
        console.error('Error connecting to the database:', err.stack);
        throw err; // Re-throw the error to be handled by the caller if needed
    }
}

export default createConnections;


