const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const prisma = new PrismaClient();

async function main() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json'
  );

  for (const joke of data) {
    await prisma.joke.create({
      data: {
        type: joke.type,
        setup: joke.setup,
        punchline: joke.punchline,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
