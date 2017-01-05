module.exports = {
  "cart": {
    "id": "49ae4dde-67fc-4853-b22a-b987c976ddb3.jash1",
    "type": "carts",
    "attributes": {
      "reservations": [
        {
          "expiration": "2017-01-05T22:57:51.529Z",
          "itemGroups": [
            {
              "type": "ticket-item-groups",
              "metadata": {
                "type": "tmss-ticket-item-group-meta",
                "lineItem": "1"
              },
              "id": "1-000000000001",
              "quantity": 1,
              "currency": "CAD",
              "perItemPrice": "46.00",
              "fees": [
                {
                  "label": "Distance Fee",
                  "amount": "0.00",
                  "type": "distance"
                },
                {
                  "label": "Facility Fee",
                  "amount": "2.75",
                  "type": "facility"
                },
                {
                  "label": "Service Fee",
                  "amount": "12.10",
                  "type": "service"
                }
              ],
              "taxes": [
                {
                  "label": "Service",
                  "amount": "0.00",
                  "type": "service"
                },
                {
                  "label": "Service",
                  "amount": "0.00",
                  "type": "service"
                }
              ],
              "offer": "000000000001"
            }
          ],
          "itemDetails": [
            {
              "type": "ticket-block-details",
              "metadata": {
                "type": "ticket-block-detail-meta",
                "itemGroup": "1-000000000001"
              },
              "section": "121",
              "row": "24",
              "startSeat": "3",
              "endSeat": "3",
              "ga": false
            }
          ],
          "reservation": "1",
          "product": "100051479EDC6332"
        }
      ],
      "fees": [
        {
          "label": "Processing Fee",
          "amount": "4.75",
          "type": "processing_fee"
        }
      ],
      "taxes": [
        {
          "label": "Processing Tax",
          "amount": "0.00",
          "type": "processing_tax"
        }
      ],
      "totals": {
        "currency": "CAD",
        "price": "46.00",
        "fees": "19.60",
        "taxes": "0.00",
        "deliveries": "0.00",
        "upsells": "0.00",
        "total": "65.60"
      }
    },
    "relationships": {
      "events": {
        "data": [
          {
            "id": "1k7ZvooyGACMkGw",
            "type": "events"
          }
        ]
      },
      "products": {
        "data": [
          {
            "id": "100051479EDC6332",
            "type": "products"
          }
        ]
      },
      "offers": {
        "data": [
          {
            "id": "000000000001",
            "type": "offers"
          }
        ]
      }
    },
    "metadata": {
      "type": "cart-meta",
      "external-ids": [
        {
          "id": "850fafa0-3841-4db9-b7f0-ec2510f4aa76",
          "provider": "host",
          "cartOrigin": {
            "cluster": "ash1",
            "time": "2017-01-05T22:55:22.605Z"
          }
        }
      ]
    }
  },
  "_embedded": {
    "events": {
      "data": [
        {
          "id": "1k7ZvooyGACMkGw",
          "type": "events",
          "attributes": {
            "name": "Arkells with Frank Turner & The Sleeping Souls"
          },
          "relationships": {
            "products": {
              "data": [
                {
                  "id": "100051479EDC6332",
                  "type": "products"
                }
              ]
            },
            "offers": {
              "data": [
                {
                  "id": "000000000001",
                  "type": "offers"
                }
              ]
            }
          },
          "metadata": {
            "type": "event-meta",
            "source": {
              "id": "100051479EDC6332",
              "name": "ticketmaster"
            }
          }
        }
      ]
    },
    "products": {
      "data": [
        {
          "id": "100051479EDC6332",
          "type": "products",
          "attributes": {},
          "relationships": {
            "offers": {
              "data": [
                {
                  "id": "000000000001",
                  "type": "offers"
                }
              ]
            },
            "events": {
              "data": [
                {
                  "id": "1k7ZvooyGACMkGw",
                  "type": "events"
                }
              ]
            }
          }
        }
      ]
    },
    "offers": {
      "data": [
        {
          "id": "000000000001",
          "type": "offers",
          "attributes": {
            "name": "Standard Ticket",
            "description": "Standard Ticket"
          },
          "relationships": {
            "products": {
              "data": [
                {
                  "id": "100051479EDC6332",
                  "type": "products"
                }
              ]
            },
            "events": {
              "data": [
                {
                  "id": "1k7ZvooyGACMkGw",
                  "type": "events"
                }
              ]
            }
          }
        }
      ]
    },
    "payments": {
      "data": []
    },
    "deliveries": {
      "data": []
    }
  },
  "status": "200"
}
