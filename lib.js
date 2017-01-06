import fetch from 'node-fetch';
import { apikey } from './secrets.json'

const BASEURL = 'https://app.ticketmaster.com';

function fetchJSON(relativeUrl) {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${apikey}`)
  .then(res => res.json())
  .then(res => {
    console.log(`GET: ${relativeUrl} \n`,res);
    return res;
  });
}

function postJSON(relativeUrl, body) {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${apikey}`,
  {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => {
    console.log(`POST: ${relativeUrl} \n`,res);
    return res;
  });
}

function deleteJSON(relativeUrl) {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${apikey}`,
  {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => {
    console.log(`DELETE: ${relativeUrl} \n`, res);
    return res;
  });
}

function patchJSON(relativeUrl, body) {
  return fetch(`${BASEURL}${relativeUrl}?apikey=${apikey}`,
  {
    method: 'PATCH',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => {
    console.log(`PATCH: ${relativeUrl} \n`,res);
    return res;
  });
}

export {
  fetchJSON,
  postJSON,
  deleteJSON,
  patchJSON
}
