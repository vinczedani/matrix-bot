const Fastify = require('fastify');

const config = require('./config');

function buildFastify () {
  const logger = config.env === 'test' ? false : {
    level: config.loglevel,
  };

  const fastify = Fastify({
    logger,
  });

  fastify.get('/ping', function (request, reply) {
    reply.send('pong');
  });

  return fastify;
}

module.exports = buildFastify;
