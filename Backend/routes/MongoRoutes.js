import { Router } from 'express';
import connectDB from '../db/connection-mongoose.js';
import Banner from '../Models/banners.js';

const router = Router();
connectDB();

// Insert a new banner
router.post('/', async (req, res) => {
    const { title, description, image_url, link, timer } = req.body;
    
    try {
        const newBanner = new Banner({
            title,
            description,
            image_url,
            link,
            timer,
            visibility: true, // Assuming visibility is true by default
        });

        const savedBanner = await newBanner.save();
        res.json(savedBanner);
    } catch (error) {
        console.error('Error while saving banner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an existing banner
router.post('/update/:id', async (req, res) => {
    const { title, description, image_url, link, timer } = req.body;
    
    try {
        const newBanner = new Banner({
            title,
            description,
            image_url,
            link,
            timer,
            visibility: true,
        });

        const savedBanner = await newBanner.save();
        res.json(savedBanner);
        
    } catch (error) {
        console.error('Error while saving banner:', error); // Enhanced error logging
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Retrieve a specific banner
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const banner = await Banner.findById(id);
        
        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        res.json(banner);
    } catch (error) {
        console.error('Error while retrieving banner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve all banners
router.get('/get', async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (error) {
        console.error('Error while retrieving banners:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
