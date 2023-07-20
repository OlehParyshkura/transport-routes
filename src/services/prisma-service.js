const { PrismaClient } = require('@prisma/client');

class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
}

module.exports = PrismaService;
