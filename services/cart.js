import { fetchJSON } from '../lib';
import cart from '../fixtures/cart';

module.exports.getCart = (cartId) => {
  console.log(`Getting cart: ${cartId}`);
  console.log(cart);
  //return fetchJSON(`/commerce/v2/shopping/carts/${cartId}.json`)
  return Promise.resolve(cart)
  .then(res => res.cart);
}
