import { fetchJSON, postJSON } from '../lib';
import cart from '../fixtures/cart';

function getCart(cartId) {
  console.log(`Getting cart: ${cartId}`);
  console.log(cart);
  //return fetchJSON(`/commerce/v2/shopping/carts/${cartId}.json`)
  return Promise.resolve(cart)
  .then(res => res.cart);
}

function createCart(cart) {
  //Hacky solution to pass callback URL
  cart.pollingCallbackUrl = "http://requestb.in/14hknvt1"; //TODO: Fix dis!
  return postJSON(`/commerce/v2/shopping/carts.json`, cart)
  .then(res => res.cart);
}

export default { getCart, createCart }
