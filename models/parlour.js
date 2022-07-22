const db = require("../db");

module.exports.findAllParlours = ({ search }) =>
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
    where: {
      menu: { some: { flavours: { flavourname: { contains: search } } } },
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
          id: true,
          message: true,
          user: {
            select: {
              username: true,
              picture: true,
            },
          },
        },
      },
    },
    where: { id: parseInt(id, 10) },
  });
};
