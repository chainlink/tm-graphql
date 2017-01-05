import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import cartService from './cart-service';
import eventService from './event-service';

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

const OffersInputType = new GraphQLInputObjectType({
  name: 'OffersInput',
  fields: () => ({
    offer: { type: new GraphQLNonNull(GraphQLString) }
  })
})

const ProductsInputType = new GraphQLInputObjectType({
  name: 'ProductsInput',
  fields: () => ({
    product: { type: new GraphQLNonNull(GraphQLString) },
    offers: { type: new GraphQLList(OffersInputType)},
    qty: { type: new GraphQLNonNull(GraphQLInt)}
  })
})

const CartInputType = new GraphQLInputObjectType({
  name: 'CartInput',
  fields: () => ({
    products: {
      type: new GraphQLList(ProductsInputType)
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
        cart: { type: CartInputType }
      },
      resolve: (value, { article }) => {
        return
      }
    }
  })
})

const CartType = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    id: { type: GraphQLString },
    reservations: {
      type: new GraphQLList(ReservationType),
      resolve: obj => obj.attributes.reservations
    },
    fees: {
      type: new GraphQLList(CartFeeType),
      resolve: obj => obj.attributes.fees
    },
    taxes: {
      type: new GraphQLList(CartTaxType),
      resolve: obj => obj.attributes.taxes
    },
    currency: {
      type: GraphQLString,
      resolve: obj => obj.attributes.totals.currency
    },
    totalPrice: {
      type: GraphQLString,
      resolve: obj => obj.attributes.totals.price
    }
  })
})

const ReservationType = new GraphQLObjectType({
  name: 'Reservation',
  fields: () => ({
    expiration: { type: GraphQLString },
    ItemDetails: {
      type: new GraphQLList(ItemDetailType),
      resolve: obj => obj.itemDetails
     }
  })
})

const CartFeeType = new GraphQLObjectType({
  name: 'CartFee',
  fields: () => ({
    label: { type: GraphQLString },
    amount: { type: GraphQLString },
    type: { type: GraphQLString }
  })
})

const CartTaxType = new GraphQLObjectType({
  name: 'CartTax',
  fields: () => ({
    label: { type: GraphQLString },
    amount: { type: GraphQLString },
    type: { type: GraphQLString }
  })
})

const ItemDetailType = new GraphQLObjectType({
  name: 'ItemDetail',
  fields: () => ({
    section: { type: GraphQLString },
    row: { type: GraphQLString },
    startSeat: { type: GraphQLString },
    endSeat: { type: GraphQLString },
    ga: { type: GraphQLBoolean }
  })
})

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
          return eventService.getOffers(obj.id, args.name);
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
      type: new GraphQLList(EventFeeType),
      resolve: obj => obj.fees.filter(elem => parseFloat(elem.value) > 0)
    }
  })
});

const EventFeeType = new GraphQLObjectType({
  name: 'Fees',
  fields: () => ({
    value: { type: GraphQLString },
    label: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

const EventTaxType = new GraphQLObjectType({
  name: 'Taxes',
  fields: () => ({
    value: { type: GraphQLString },
    label: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
