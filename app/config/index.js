const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  host: {
    doc: 'The host to bind',
    format: String,
    default: '127.0.0.1',
    env: 'HOST',
    arg: 'host',
  },
  loglevel: {
    doc: 'Level of the visible logs',
    format: ['info', 'error', 'debug', 'warn', 'trace', 'fatal'],
    default: 'info',
    env: 'LOGLEVEL',
    arg: 'loglevel',
  }
});

// Load environment JSON based on NODE_ENV
const env = config.get('env');
config.loadFile(`${__dirname}/${env}.json`);

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config.getProperties();
