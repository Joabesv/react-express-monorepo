import express from 'express';

const server = express();

server.use('/', async (req, res) => {
  res.send({ msg: 'say hi from express' });
});

export { server };
