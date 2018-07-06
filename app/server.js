const Fastify = require('fastify');

const config = require('./config');

function buildFastify () {
  const fastify = Fastify({
    logger: {
      level: config.loglevel,
    },
  });

  fastify.get('/ping', function (request, reply) {
    reply.send('pong');
  });

  return fastify;
}

module.exports = buildFastify;
