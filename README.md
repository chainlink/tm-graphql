# tm-graphql
GraphQL Wrapper for Tickermaster Open API

# Installing

Uses Node v6.9.1

Add your Api key to `APIKEY` on line 10 of `schema.js`

```
npm install
npm start
```

Open [http://localhost:5000](http://localhost:5000)

[Example Query](http://localhost:5000/?query=%7B%0A%20%20event(id%3A%20%221AvZZfpGkBqGJ76%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20offers(name%3A%20%22VIP1%22)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20prices%20%7B%0A%20%20%20%20%20%20%20%20total%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
