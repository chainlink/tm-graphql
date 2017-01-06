# tm-graphql
GraphQL Wrapper for Ticketmaster Open API

# Installing

Uses Node v6.9.1

Add file `secrets.json` with format:

```
{
  "apikey": "YOUR TM DEVELOPER API KEY"
}
```

```
npm install
npm start
```

Currently Get Cart Reads from saved Fixture

Open [http://localhost:5000](http://localhost:5000)

## Example Queries

**NOTE:** (Make sure to populate $cId in query variable section)

Get Cart

```
query cart($cId: String) {
  cart(id: $cId) {
    reservations {
      expiration
      ItemDetails {
        section
      }
    }
    fees {
      label
      amount
      type
    }
    taxes {
      amount
      label
      type
    }
    currency
    totalPrice
  }
}
```

Get Event

```
query event($id: String) {
  event(id: $id) {
    name
    offers(name: "ALLTIX") {
      name
      description
      prices {
        total
      }
    }
  }
}
```
