const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomType: { type: String },
    roomPrice: { type: String, default: "0" }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Room', roomSchema);