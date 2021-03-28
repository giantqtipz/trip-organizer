const bcrypt = require('bcrypt');

const registerUser = async (password) => {
  return new Promise((resolve) => {
    bcrypt.hash(password, 10, async (err, hash) => {
      resolve(hash);
    });
  });
};

module.exports = {
  registerUser,
};
