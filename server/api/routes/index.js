const { app } = require('../server');
const { userRouter } = require('./user');

const routes = [userRouter];

const initRoutes = () => {
  return routes.forEach((route) => {
    app.use('/api/', route);
  });
};

module.exports = {
  initRoutes,
};
