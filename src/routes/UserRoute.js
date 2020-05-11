module.exports = (app) => {
    const user = require('../controllers/UserController');

    app.post('/register', user.create);
    
    app.post('/login', user.checkLogin);
}