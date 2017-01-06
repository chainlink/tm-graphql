import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import cartService from '../services/cart';
import eventService from '../services/event';

import { CartType } from './cart';
import { EventType } from './event';

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
        return eventService.getEvent(args.id);
      }
    },
    cart: {
      type: CartType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => {
        return cartService.getCart(args.id);
      }
    }
  })
});
/*
const MutationType = new GraphQLObjectType({
  name: 'CartMutations',
  description: 'All the things we can change',
  fields: () => ({
    createCart: {
      type: CartType,
      description: 'Create a new cart',
      args: {
        cart: { type: CartInputType }
      },
      resolve: (value, { article }) => {
        return
      }
    }
  })
})
*/
export default new GraphQLSchema({
  query: QueryType//,
  //mutation: MutationType
});
