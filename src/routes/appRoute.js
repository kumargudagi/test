const defaultRoute = require('./defaultRoute');
const userRoute = require('./userRoute');
let appRoute = new Object();


appRoute.initialize = (app) => {
    app.use('/', defaultRoute);
    app.use('/user', userRoute);
}

module.exports = appRoute;