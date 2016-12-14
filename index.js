import express from 'express';
import graphqlHTTP from 'express-graphql';
import DataLoader from 'dataloader';
import schema from './schema';

const app = express();


app.use(graphqlHTTP(req => {
  /*const cacheMap = new Map();
  const offersLoader =
    new DataLoader(keys => Promise.all(keys.map(getOffers)), {
      cacheKeyFn: key => `/offers/${key}`,
      cacheMap
    });
  const loaders = { offers: offersLoader };*/
  return {
    //context: {loaders},
    graphiql: true,
    schema,
  };
}));

app.listen(5000, () => {
  console.log('runnin');
});
