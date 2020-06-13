const mongoose = require('mongoose');

const rentSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    rentDate: { type: String, default: ""}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Rent', rentSchema);