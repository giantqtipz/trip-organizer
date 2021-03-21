const userRouter = require('express').Router();
const { User } = require('../../db/models');

userRouter.post('/users', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const newUser = await User.Create({
      email,
      password,
    });
    newUser.then((response) => response.status(200).send(newUser));
  } catch (e) {
    // console.log(e);
    res.status(500).send({ message: 'Unable to create account' });
  }
});

module.exports = {
  userRouter,
};
