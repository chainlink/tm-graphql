import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import fetch from 'node-fetch';

const APIKEY = '';
const BASEURL = 'https://app.ticketmaster.com';

function fetchJSON(relativeUrl) {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${APIKEY}`)
  .then(res => res.json());
}

function getEvent(eventId) {
  console.log('Getting event');
  return fetchJSON(`/discovery/v2/events/${eventId}.json`);
}

function getOffers(eventId, name) {
  console.log('Getting Event Offers');
  return fetchJSON(`/commerce/v2/events/${eventId}/offers.json`)
  .then(json => json.offers)
  .then(offers => {
    if(name) {
      var offer = offers.find(elem => elem.attributes.name === name);
      return [offer];
    }
    else {
      return offers;
    }
  });
}


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    event: {
      type: EventType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => {
        return getEvent(args.id);
      }
    }
  })
});

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    name: { type: GraphQLString },
    offers: {
      type: new GraphQLList(OfferType),
      args: {
        name: { type: GraphQLString }
      },
      resolve: (obj, args) => {
          return getOffers(obj.id, args.name);
      }
    }
  })
})

const OfferType = new GraphQLObjectType({
  name: 'Offer',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: obj => obj.attributes.name
    },
    description: {
      type: GraphQLString,
      resolve: obj => obj.attributes.description
    },
    prices: {
      type: new GraphQLList(PriceType),
      resolve: obj => obj.attributes.prices
    }
  })
});

const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: () => ({
    total: { type: GraphQLString },
    value: { type: GraphQLString },
    fees: {
      type: new GraphQLList(FeesType),
      resolve: obj => obj.fees.filter(elem => parseFloat(elem.value) > 0)
    }
  })
});

const FeesType = new GraphQLObjectType({
  name: 'Fees',
  fields: () => ({
    value: { type: GraphQLString },
    label: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

export default new GraphQLSchema({
  query: QueryType,
});
