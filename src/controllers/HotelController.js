const Hotel = require('../models/HotelModel');

exports.insert = (req, res) => {

    const hotel = new Hotel({
        hotelName: req.body.hotelName,
        hotelImg: req.body.hotelImg,
        hotelLocation: req.body.hotelLocation,
        hotelRating: req.body.hotelRating,
        hotelPrice: req.body.hotelPrice
    });

    hotel.save((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: "Error while inserting new hotel",
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Insert ${hotel.hotelName} successfully`
        });
    });
};

exports.getAllHotel = (req, res) => {

    Hotel.find().exec((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: `Error while get list of hotel`,
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

exports.getHotelById = (req, res) => {

    let param = {
        _id: req.params.hotelId
    }

    Hotel.findById(param).exec((error, document) => {
        if (error) {
            return res.status(400).send({
                status: 400,
                message: `Error while get hotel detail`,
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

exports.update = (req, res) => {

    let param = {
        _id: req.params.hotelId
    }

    let update = {
        hotelName: req.body.hotelName,
        hotelLocation: req.body.hotelLocation,
        hotelRating: req.body.hotelRating,
        hotelPrice: req.body.hotelPrice
    }

    Hotel.findByIdAndUpdate(param, update, (error, document, result) => {
        if (error) {
            return res.status(400).send({
                status: 400,
                message: `Hotel not found with id ${param._id}`,
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Hotel attribute updated successfully`
        });
    });
};