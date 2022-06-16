const getEpochs = require('./getEpochs');

module.exports = {
  paths: {
    '/epochs': {
      ...getEpochs,
    },
  },
};
