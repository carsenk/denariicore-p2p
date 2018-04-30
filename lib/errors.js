'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on denariicore-p2p Module {0}'
};

module.exports = require('denariicore-lib').errors.extend(spec);
