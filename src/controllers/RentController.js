const Rent = require('../models/RentModel');

exports.insert = (req, res) => {

    const rent = new Rent({
        userId: req.body.userId,
        hotel: req.body.hotelId,
        room: req.body.roomId,
        rentDate: req.body.rentDate
    });

    rent.save((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 400,
                message: "Error while renting the hotel",
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Rent success`
        });
    });
};

exports.getUserBookedHotel = (req, res) => {

    let param = {
        userId: req.params.userId
    }

    let rentQuery = '_id userId hotel room rentDate';
    let roomQuery = 'roomType roomPrice';
    let hotelQuery = 'hotelImg hotelName hotelLocation';

    Rent.find(param, rentQuery)
    .populate('hotel', hotelQuery)
    .populate('room', roomQuery).exec((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: `Error while get list of booked hotel`,
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: ``,
            data: document
        });
    });
};