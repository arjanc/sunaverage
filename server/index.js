import '@babel/polyfill';
import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import schema from './graphql';

const app = express();
const PORT = process.env.PORT || '4000';
const db = 'mongodb://aceelen:xuB3r6E3aF9@ds151586.mlab.com:51586/sun-average';

// connect with MongoDB using Mongoose
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log(' +++ connected to mlab database'))
  .catch(err => console.log(err));

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all request to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
