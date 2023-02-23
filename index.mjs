const args = process.argv.slice(2);




import { Client, Server } from 'node-osc';

const client = new Client('192.168.56.1', 3333);
var server = new Server(3334, '0.0.0.0');

server.on('listening', () => {
  console.log('OSC Server is listening.');
})

server.on('message', (msg) => {
  console.log(`Message: ${msg}`);
  server.close();
});

client.send(args, (err) => {
  if (err) console.error(err);
  client.close();
});


// test