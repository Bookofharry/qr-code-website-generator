import mongoose from 'mongoose';
const qrSchema = new mongoose.Schema({ 
    text: {
        type: String,
        required: true
    },
    qrImage: {
        type: String,
        required: true
    }
});
const QRCode = mongoose.model('QRCode', qrSchema);
export default QRCode;

// This model defines a schema for storing QR codes in MongoDB.

