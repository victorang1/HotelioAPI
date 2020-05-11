const User = require('../models/UserModel');

exports.create = (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save((error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: "Some error occurred while registering the user.",
                Exception: error
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Create user with username ${user.username} successfully`
        });
    });
};

exports.checkLogin = (req, res) => {

    let param = {
        username: req.body.username
    };

    User.findOne(param, (error, document) => {
        if (error) {
            return res.status(404).send({
                status: 404,
                message: `Something error occurred while logging in`,
                Exception: error
            });
        }

        if(document == null) {
            return res.status(400).send({
                status: 400,
                message: `User ${param.username} not found`,
                Exception: error
            });
        }

        if(document.password !== req.body.password) {
            return res.status(400).send({
                status: 404,
                message: "Password is incorrect"
            })
        }

        return res.status(200).send({
            status: 200,
            message: `Login success`
        });
    });
};