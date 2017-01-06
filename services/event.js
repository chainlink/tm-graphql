import { fetchJSON } from '../lib';

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

export default { getEvent, getOffers }
