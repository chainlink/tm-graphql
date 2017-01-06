import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import eventService from '../services/event';

export const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    name: { type: GraphQLString },
    offers: {
      type: new GraphQLList(EventOfferType),
      args: {
        name: { type: GraphQLString }
      },
      resolve: (obj, args) => {
          return eventService.getOffers(obj.id, args.name);
      }
    }
  })
})

export const EventOfferType = new GraphQLObjectType({
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

export const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: () => ({
    total: { type: GraphQLString },
    value: { type: GraphQLString },
    fees: {
      type: new GraphQLList(EventFeeType),
      resolve: obj => obj.fees.filter(elem => parseFloat(elem.value) > 0)
    }
  })
});

export const EventFeeType = new GraphQLObjectType({
  name: 'Fees',
  fields: () => ({
    value: { type: GraphQLString },
    label: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

export const EventTaxType = new GraphQLObjectType({
  name: 'Taxes',
  fields: () => ({
    value: { type: GraphQLString },
    label: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});
