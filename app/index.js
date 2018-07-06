require('dotenv').config();

const buildFastify = require('./server');
const config = require('./config');

const fastify = buildFastify();

async function start() {
  try {
    await fastify.listen(config.port, config.host);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();
