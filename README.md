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

Open [http://localhost:5000](http://localhost:5000)

## Example Queries

**NOTE:** (Make sure to populate $cId in query variable section)

Create Cart and return Delivery Types (two api calls)

```
mutation CreateCart {
  createCart(cart:{
    products: [{
     product: "100051479EDC6332"
     offers: [{
      offer: "000000000001"
    }]
    qty:1
    }]
  }) {
    id
    reservations {
      expiration
      ItemDetails {
        section
      }
    }
    deliveryTypes {
      id
      name
    }
  }
}
```

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
