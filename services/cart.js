import { fetchJSON, postJSON, deleteJSON, patchJSON } from '../lib';
import cart from '../fixtures/cart';

function getCart(cartId) {
  console.log(`Getting cart: ${cartId}`);
  return fetchJSON(`/commerce/v2/shopping/carts/${cartId}.json`)
  //return Promise.resolve(cart)
  .then(res => res.cart);
}

function createCart(cart) {
  //Hacky solution to pass callback URL
  cart.pollingCallbackUrl = "http://requestb.in/14hknvt1"; //TODO: Fix dis!
  return postJSON(`/commerce/v2/shopping/carts.json`, cart)
  .then(res => res.cart);
}

function deleteCart(cartId) {
  return deleteJSON(`/commerce/v2/shopping/carts/${cartId}.json`)
  .then(res => res.cart);
}

function getDeliveries(cartId) {
  return fetchJSON(`/commerce/v2/checkout/carts/${cartId}/deliveries`) //TODO: pass .json?
  .then(res => res.deliveries);
}

function setDelivery(cartId, deliveryId) {
  return patchJSON(`/commerce/v2/shopping/carts/${cartId}/deliveries.json`, {
    pollingCallbackUrl: "http://requestb.in/14hknvt1", //TODO: Remove Hax,
    deliveries: [{ //TODO: Actually support multiple delivery methods??
      op: 'add', //Not currently documented
      deliveryId: deliveryId
    }]
  })
  .then(res => res.cart);
}

export default {
  getCart,
  createCart,
  deleteCart,
  getDeliveries,
  setDelivery
}
