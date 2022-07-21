const db = require("../db");

module.exports.findByEmail = (email = "") =>
  db.user.findUnique({ where: { email } }).catch(() => null);

module.exports.createUser = ({ username, email, password, picture }) => {
  return db.user.create({
    data: { username, email, password, picture },
  });
};

module.exports.findAllUsers = () =>
  db.user.findMany({
    include: {
      favourites: {
        select: {
          parlour: {
            select: { shopname: true },
          },
        },
      },
      reviews: {
        include: {
          parlour: {
            select: { shopname: true },
          },
        },
      },
    },
  });

module.exports.getOneUser = (id) => {
  return db.user.findUnique({
    include: {
      favourites: {
        select: {
          parlour: {
            select: { shopname: true },
          },
        },
      },
      reviews: {
        include: {
          parlour: {
            select: { shopname: true },
          },
        },
      },
    },
    where: { id: parseInt(id, 10) },
  });
};

module.exports.getSafeAttributes = (user) => ({
  ...user,
  password: undefined,
});
