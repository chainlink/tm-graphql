import fetch from 'node-fetch';
import { apikey } from './secrets.json'

const BASEURL = 'https://app.ticketmaster.com';

module.exports.fetchJSON = (relativeUrl) => {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${apikey}`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    return res;
  });
}
