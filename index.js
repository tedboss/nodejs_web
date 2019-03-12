const rh = require('./request-handler');
const server = require('dgram').createSocket('udp4');
const my_utils = require('./my-utils');

var bb = rh.createGetVarDValuePackage(12);
my_utils.printHighSpeedPackage(bb);

server.on('error', (err) => {
  console.log('Error occurss ' + err);
  server.close();
});

server.on('message', (msg, rinfo) => {
  
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(20000);

// server.send(bb, 0, bb.length, 10040, '192.168.0.20', (err) => {
//   if (err)
//   {
//     console.log("ERROR SENDING" + err);
//     server.close();
//   } else 
//   {
//     console.log("SEND SUCCESSFUL");
//   }
// });
