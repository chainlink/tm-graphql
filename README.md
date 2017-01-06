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
    deliveries {
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

Delete Cart

```
mutation DeleteCart {
  deleteCart(id: "682692fe-c287-4dbe-aa17-a0e719c3924d.jash1") {
    totalPrice
  }
}
```

Select Delivery

```
mutation SelectDelivery {
  selectDelivery(
    cartId: "d4392a2d-1767-4065-82c2-00b67b9db39d.jash1"
    deliveryId: "0b01dd84e0d7c5397bc427d0a66164fc"
  ) {
    deliveries {
      name
    }
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
