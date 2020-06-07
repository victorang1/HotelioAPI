module.exports = (app) => {
    const user = require('../controllers/UserController');

    app.get('/user', user.getUsers);

    app.post('/register', user.create);
    
    app.post('/login', user.checkLogin);
}