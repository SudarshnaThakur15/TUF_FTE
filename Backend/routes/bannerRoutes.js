// backend/routes/banner.js

import { Router } from 'express';
import createConnection from '../db/connection.js';

const router = Router();

// Insert a new banner
router.post('/', async (req, res) => {
    const { title, description, image_url, link, timer } = req.body;
    const connection = await createConnection();
    try {
        
        
        const [result] = await connection.query(
            'INSERT INTO banners (title, description, image_url, link, timer, visibility, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
            [title, description, image_url, link, timer, 1] // Assuming visibility is set to 1 by default
        );
        console.log(result);
        res.json({ id: result.insertId, title, description, image_url, link, timer, visibility: 1 });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
});


// Update an existing banner
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, image_url, link, timer, visibility } = req.body;
    const connection = await createConnection();
    try {
        await connection.query(
            'UPDATE banners SET title = ?, description = ?, image_url = ?, link = ?, timer = ?, visibility = ? WHERE id = ?',
            [title, description, image_url, link, timer, visibility, id]
        );
        res.json({ id, title, description, image_url, link, timer, visibility });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        connection.end();
    }
});


// Retrieve a specific banner
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM banners WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        connection.end();
    }
});
// Retrieve all banners
router.get('/', async (req, res) => {
    const connection = await createConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM banners');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        connection.end();
    }
});




export default router;
