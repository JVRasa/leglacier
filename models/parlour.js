const db = require("../db");

module.exports.findAllParlours = () =>
  db.parlour.findMany({
    include: {
      menu: {
        select: {
          flavours: {
            select: {
              flavourname: true,
            },
          },
        },
      },
    },
  });

module.exports.getOneParlour = (id) => {
  return db.parlour.findUnique({
    include: {
      menu: {
        select: {
          flavours: {
            select: {
              flavourname: true,
            },
          },
        },
      },
      reviews: {
        select: {
          message: true,
          user: {
            select: {
              username: true,
            },
          },
        },
      },
    },
    where: { id: parseInt(id, 10) },
  });
};
