const Room = require('../models/RoomModel');

exports.create = (req, res) => {

    const room = new Room({
        hotelId: req.body.hotelId,
        roomType: req.body.roomType,
        roomDesc: req.body.roomDesc,
        roomPrice: req.body.roomPrice
    });
    
    room.save((error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Some error occurred while inserting new room.",
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Room type created successfully`
        });
    });
};

exports.getHotelRooms = (req, res) => {

    let param = {
        hotelId: req.params.hotelId
    }

    Room.find(param).exec((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: `Error while get list of hotel rooms`,
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