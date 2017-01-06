import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

export const OffersInputType = new GraphQLInputObjectType({
  name: 'OffersInput',
  fields: () => ({
    offer: { type: new GraphQLNonNull(GraphQLString) }
  })
})

export const ProductsInputType = new GraphQLInputObjectType({
  name: 'ProductsInput',
  fields: () => ({
    product: { type: new GraphQLNonNull(GraphQLString) },
    offers: { type: new GraphQLList(OffersInputType)},
    qty: { type: new GraphQLNonNull(GraphQLInt)}
  })
})

export const CartInputType = new GraphQLInputObjectType({
  name: 'CartInput',
  fields: () => ({
    products: {
      type: new GraphQLList(ProductsInputType)
    }
  })
});

export const CartType = new GraphQLObjectType({
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

export const ReservationType = new GraphQLObjectType({
  name: 'Reservation',
  fields: () => ({
    expiration: { type: GraphQLString },
    ItemDetails: {
      type: new GraphQLList(ItemDetailType),
      resolve: obj => obj.itemDetails
     }
  })
})

export const CartFeeType = new GraphQLObjectType({
  name: 'CartFee',
  fields: () => ({
    label: { type: GraphQLString },
    amount: { type: GraphQLString },
    type: { type: GraphQLString }
  })
})

export const CartTaxType = new GraphQLObjectType({
  name: 'CartTax',
  fields: () => ({
    label: { type: GraphQLString },
    amount: { type: GraphQLString },
    type: { type: GraphQLString }
  })
})

export const ItemDetailType = new GraphQLObjectType({
  name: 'ItemDetail',
  fields: () => ({
    section: { type: GraphQLString },
    row: { type: GraphQLString },
    startSeat: { type: GraphQLString },
    endSeat: { type: GraphQLString },
    ga: { type: GraphQLBoolean }
  })
})
