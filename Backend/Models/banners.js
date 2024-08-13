import mongoose from 'mongoose'
const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    timer: {
        type: Number,
        required: true,
    },
    visibility: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const Banner = mongoose.model('Banner', bannerSchema);

export default Banner ;
