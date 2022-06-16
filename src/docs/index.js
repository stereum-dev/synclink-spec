const basicInfo = require('./basicInfo');
const tags = require('./tags');
const epochs = require('./epochs');
const components = require('./components');

module.exports = {
  ...basicInfo,
  ...tags,
  ...epochs,
  ...components,
};
