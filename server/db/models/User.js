const Sequelize = require('sequelize');

const { UUID, UUIDV4, INTEGER, TEXT } = Sequelize;
const { db } = require('../db');

const User = db.define('User', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  email: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = { User };
