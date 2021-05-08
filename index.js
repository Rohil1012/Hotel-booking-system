const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./html/home.html');
const booking = fs.readFileSync('./html/booking.html');
const rooms = fs.readFileSync('./html/rooms.html');
const contectus = fs.readFileSync('./html/contectus.html');

const server = http.createServer((req, res) => {

  console.log(req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(booking);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});