/**
 * Wrapper around server to allow babel/jsx/es6 > compilation.
 */
require('babel-core/register');
const logger = require('winston');
const server = require('./server.jsx');
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  logger.info(`Server listening on, ${PORT}`);
});
