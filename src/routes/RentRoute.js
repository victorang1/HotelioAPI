module.exports = (app) => {
    const rent = require('../controllers/RentController');

    app.get('/rent/:userId', rent.getUserBookedHotel);

    app.post('/rent', rent.insert);
}