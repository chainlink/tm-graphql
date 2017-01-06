import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import cartService from '../services/cart';

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
    },
    deliveries: { //NOTE: Before a delivery is selected this list is all available, after it becomes the one selected. Perhaps add a 'selected delivery ID?'
      type: new GraphQLList(DeliveryType),
      resolve: (obj, args) => {
        if(obj.attributes.deliveries) {
          return obj.attributes.deliveries
        } else {
          return cartService.getDeliveries(obj.id)
        }
      }
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

export const DeliveryType = new GraphQLObjectType({
  name: 'Delivery',
  fields: () => ({
    id: { type: GraphQLString },
    name: {
      type: GraphQLString,
      resolve: obj => obj.attributes.deliveryType
    },
    displayRank: {
      type: GraphQLInt,
      resolve: obj => obj.attributes.displayRank
    },
    longDescription: {
      type: GraphQLString,
      resolve: obj => obj.attributes.description.long
    },
    shortDescription: {
      type: GraphQLString,
      resolve: obj => obj.attributes.description.short
    },
    totalFee: {
      type: GraphQLString,
      resolve: obj => obj.attributes.totals.fee
    }
    //tax
    //grand
    //currency
    //restrictions
  })
})
