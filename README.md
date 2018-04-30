<img src="http://bitcore.io/css/images/bitcore-p2p.svg" alt="denariicore payment protocol" height="35" width="102">

denariicore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/denariicore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/denariicore-p2p)
[![Build Status](https://img.shields.io/travis/carsenk/denariicore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/carsenk/denariicore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/carsenk/denariicore-p2p.svg?style=flat-square)](https://coveralls.io/r/carsenk/denariicore-p2p?branch=master)

`denariicore-p2p` adds [Denarius protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for denariicore.

See [the main denariicore repo](https://github.com/carsenk/denariicore) for more information.

## Getting Started

```sh
npm install denariicore-p2p
```
In order to connect to the Denarius network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('denariicore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [denariicore guide](http://litecore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/carsenk/denariicore/blob/master/CONTRIBUTING.md) on the main denariicore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/carsenk/denariicore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2018 The Denarius Core Developers
