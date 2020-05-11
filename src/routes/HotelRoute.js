module.exports = (app) => {
    const hotel = require('../controllers/HotelController');

    app.post('/hotel', hotel.insert);

    app.get('/hotel', hotel.getAllHotel);

    app.get('/hotel/:hotelId', hotel.getHotelById);

    app.put('/hotel/:hotelId', hotel.update);
}