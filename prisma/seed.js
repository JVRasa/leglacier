const db = require("../db");

async function seed() {
  const toto = await db.user.create({
    data: {
      username: "Toto",
      email: "toto@alaplage.fr",
      password: "totototo",
      picture: "/image/iconToto.jpg",
    },
  });
  const baba = await db.user.create({
    data: {
      username: "Baba",
      email: "baba@orhum.fr",
      password: "babababa",
      picture: "/image/iconBaba.jpg",
    },
  });

  const parlour1 = await db.parlour.create({
    data: {
      shopname: "Le petit Glacier",
      address: "2 rue Delandine",
      zip: "69007",
      city: "Lyon",
      picture: "/image/logoHome.jpg",
      hours: "10h - 20h",
    },
  });

  const parlour2 = await db.parlour.create({
    data: {
      shopname: "Le grand Glacier",
      address: "16 rue Trouille",
      zip: "69002",
      city: "Lyon",
      picture: "/image/iconHome.jpg",
      hours: "16h - 23h",
    },
  });
  const parlour3 = await db.parlour.create({
    data: {
      shopname: "Le rikiki Glacier",
      address: "68 rue Zola",
      zip: "69001",
      city: "Lyon",
      picture: "/image/iconBaba.jpg",
      hours: "10h - 20h",
    },
  });

  await db.favourites.createMany({
    data: [
      {
        userId: toto.id,
        parlourId: parlour1.id,
      },
      {
        userId: toto.id,
        parlourId: parlour3.id,
      },
    ],
  });

  const banane = await db.flavours.create({
    data: {
      flavourname: "Banane",
    },
  });

  const noisette = await db.flavours.create({
    data: {
      flavourname: "Noisette",
    },
  });

  const chocolat = await db.flavours.create({
    data: {
      flavourname: "Chocolat",
    },
  });

  const vanille = await db.flavours.create({
    data: {
      flavourname: "Vanille",
    },
  });

  const fraise = await db.flavours.create({
    data: {
      flavourname: "Fraise",
    },
  });

  const pistache = await db.flavours.create({
    data: {
      flavourname: "Pistache",
    },
  });

  await db.menu.createMany({
    data: [
      {
        parlourId: parlour1.id,
        flavoursId: banane.id,
      },
      {
        parlourId: parlour1.id,
        flavoursId: noisette.id,
      },
      {
        parlourId: parlour1.id,
        flavoursId: chocolat.id,
      },
      {
        parlourId: parlour1.id,
        flavoursId: vanille.id,
      },
      {
        parlourId: parlour1.id,
        flavoursId: pistache.id,
      },
      {
        parlourId: parlour2.id,
        flavoursId: banane.id,
      },
      {
        parlourId: parlour2.id,
        flavoursId: noisette.id,
      },
      {
        parlourId: parlour3.id,
        flavoursId: vanille.id,
      },
      {
        parlourId: parlour3.id,
        flavoursId: fraise.id,
      },
      {
        parlourId: parlour3.id,
        flavoursId: noisette.id,
      },
    ],
  });

  await db.reviews.createMany({
    data: [
      {
        message: "C'était trop bon",
        userId: toto.id,
        parlourId: parlour1.id,
      },
      {
        message: "Miam miam",
        userId: baba.id,
        parlourId: parlour1.id,
      },
      {
        message: "J'adore",
        userId: baba.id,
        parlourId: parlour2.id,
      },
      {
        message: "Les meilleurs",
        userId: toto.id,
        parlourId: parlour3.id,
      },
    ],
  });
}

seed();

module.exports = seed;
