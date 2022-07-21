const db = require("../db");

module.exports.createReview = ({ message, userId, parlourId }) => {
  return db.reviews.create({
    data: { message, userId, parlourId },
  });
};

module.exports.getOneReview = (id) => {
  return db.reviews.findUnique({
    include: {
      user: {
        select: {
          username: true,
          picture: true,
        },
      },
      parlour: {
        select: {
          shopname: true,
        },
      },
    },
    where: { id: parseInt(id, 10) },
  });
};

module.exports.deleteOneReview = async (id) => {
  return await db.reviews.delete({ where: { id: parseInt(id, 10) } });
};

module.exports.patchOneReview = (id, data) => {
  return db.reviews.update({
    where: { id: parseInt(id, 10) },
    data: {
      message: data.message,
      userId: data.userId,
      parlourId: data.parlourId,
    },
  });
};
