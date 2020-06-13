const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    hotelName: { type: String },
    hotelImg: { type: String, default: ""},
    hotelLocation: { type: String },
    hotelRating: { type: String, default: "0"},
    hotelPrice: { type: String, default: "0" }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Hotel', hotelSchema);