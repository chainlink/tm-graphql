import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import cartService from '../services/cart';
import eventService from '../services/event';

import * as Cart from './cart'; //TODO: Figure out why CartInputType import on next line broken
import { CartType, CartInputType } from './cart';
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

const MutationType = new GraphQLObjectType({
  name: 'CartMutations',
  description: 'All the things we can change',
  fields: () => ({
    createCart: {
      type: CartType,
      description: 'Create a new cart',
      args: {
        cart: { type: Cart.CartInputType }
      },
      resolve: (value, { cart }) => {
        return cartService.createCart(cart);
      }
    },
    deleteCart: {
      type: CartType, //TODO: Make Delete Cart Type
      description: 'Deletes an existing cart',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, args) => {
        return cartService.deleteCart(args.id);
      }
    }
  })
})

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
