export let CARTS = {
  subtotal: 930,
  shipping: 30,
  total: 950,
  sellers: [
    {
      id: 1,
      name: "FANTACY  TECHNOLOGY",
      subtotal: 900,
      shipping: 20,
      total: 920,
      items: [
        {
          id: 1,
          name: "Xiaomi Mi 4",
          price: 300,
          quantity: 1,
          thumb: "img/items/item_3.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        },
        {
          id: 1,
          name: "Xiaomi Mi 5",
          price: 300,
          quantity: 2,
          thumb: "img/items/item_3.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Jahurto Inexpensive",
      subtotal: 20,
      shipping: 10,
      total: 30,
      items: [
        {
          id: 1,
          name: "Zara coat",
          price: 20,
          quantity: 1,
          thumb: "img/items/item_5.jpg",
          options: [
            "XL",
            "Pink"
          ]
        }
      ]
    }
  ]
}
