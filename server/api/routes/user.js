const userRouter = require('express').Router();
const { User } = require('../../db/models');
const { registerUser } = require('./utils');

userRouter.post('/users', async (req, res) => {
  const {
    newUser: { email, password },
  } = req.body;
  try {
    await User.findOne({
      where: {
        email,
      },
    }).then(async (user) => {
      if (!user) {
        await registerUser(password).then(async (response) => {
          await User.create({
            email,
            password: response,
          })
            .then((r) => {
              res.status(200).send({ r, message: 'Account Registered!' });
            })
            .catch((error) =>
              res
                .status(500)
                .send({ error, message: 'Unable to create account' })
            );
        });
      } else {
        res.status(500).send({ message: 'Account already exists' });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Server error' });
  }
});

module.exports = {
  userRouter,
};
