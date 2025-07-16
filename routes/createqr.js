import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import qr from 'qr-image';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
const __dirname = fileURLToPath(import.meta.url);







dotenv.config()

const uri = process.env.MONGO_URI
router.get('/', (req, res) => {
  res.render('index')
});

mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
}); 

// Handle POST request to create QR code
router.post('/', (req, res) => {
    const url = req.body.url;
    if (!url) {
        return res.status(400).send('No URL provided.');
    }
    console.log('Received URL:', url);

    // Define output file path
   

    // Generate QR code image
    try {
        const qrImage = qr.image(url, { type: 'png', size: 10 });
        qrImage.pipe(fs.createWriteStream('ssd.png'));
        console.log('QR code image generated:');        
        res.send('QR code saved.');

        
        (async function(){
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET
            });

            //upload the QR code image to Cloudinary
            const result = await cloudinary.uploader
            .upload(
                'ssd.png',{
                    public_id: `qr-codes/${Date.now()}`,
                }
            )
            .catch((error) => {
                console.error('Error uploading to Cloudinary:', error);
                res.status(500).send('Failed to upload QR code image.');
            });
            console.log('QR code uploaded to Cloudinary:', result);

            //optimize the image URL
            const optimizeurl = cloudinary.url(result.public_id, {
                fetch_format : 'auto',
                quality: 'auto'
            });
            console.log('Optimized QR code URL:', optimizeurl);

            // Save the QR code data to MongoDB
            const QRCode = mongoose.model('QRCode', {
                text: String,
                qrImage: String
            });
            const qrCode = new QRCode({
                text: url,
                qrImage: optimizeurl
            });
            await qrCode.save();
            console.log('QR code saved to MongoDB:', qrCode);   
        }())




    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Failed to generate QR code.');
    }
})
export default router;
