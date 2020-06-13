module.exports = (app) => {
    const room = require('../controllers/RoomController');

    app.get('/room/:hotelId', room.getHotelRooms);

    app.post('/room', room.create);
}