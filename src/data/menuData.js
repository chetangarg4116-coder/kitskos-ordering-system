const menu = [
  {
    category: "Grilled Sandwich",
    items: [
      {
        name: "Veg Sandwich",
        description: "Grilled sandwich loaded with fresh vegetables and delicious sauces",
        price: 99,
        image: "",
        addons: []
      },
      {
        name: "Tasty Corn Sandwich",
        description: "Grilled sandwich filled with sweet corn and creamy flavours",
        price: 109,
        image: "",
        addons: []
      },
      {
        name: "Cheese Loaded Sandwich",
        description: "Grilled sandwich loaded with extra cheese and rich flavours",
        price: 119,
        image: "",
        addons: []
      },
      {
        name: "Paneer Tikka Sandwich",
        description: "Grilled sandwich with spicy paneer tikka filling",
        price: 129,
        image: "",
        addons: []
      },
      {
        name: "Tandoori Paneer Sandwich",
        description: "Grilled sandwich with smoky tandoori paneer stuffing",
        price: 139,
        image: "",
        addons: []
      }
    ]
  },

  {
    category: "Maggie",
    items: [
      {
        name: "Veg Maggi",
        description: "Classic Maggi cooked with fresh vegetables and spices",
        price: 89,
        image: "",
        addons: []
      },
      {
        name: "Paneer Maggi",
        description: "Maggi loaded with soft paneer and tasty spices",
        price: 99,
        image: "",
        addons: []
      },
      {
        name: "Cheesy Maggi",
        description: "Creamy Maggi loaded with melted cheese",
        price: 109,
        image: "",
        addons: []
      },
      {
        name: "Makhani Maggi",
        description: "Rich and creamy makhani style Maggi",
        price: 119,
        image: "",
        addons: []
      },
      {
        name: "Kitskos Spl. Maggi",
        description: "Special Kitskos style Maggi with unique flavours",
        price: 149,
        image: "",
        addons: []
      }
    ]
  },  {
    category: "Wraps",
    items: [
      {
        name: "Veg Wrap",
        description: "Soft wrap filled with fresh vegetables and delicious sauces",
        price: 79,
        image: "",
        addons: []
      },
      {
        name: "Crispy Wrap",
        description: "Crunchy crispy filling wrapped with tasty sauces",
        price: 89,
        image: "",
        addons: []
      },
      {
        name: "Spicy Wrap",
        description: "Spicy and flavourful wrap with special sauces",
        price: 99,
        image: "",
        addons: []
      },
      {
        name: "Paneer Wrap",
        description: "Wrap loaded with delicious paneer filling and spices",
        price: 129,
        image: "",
        addons: []
      },
      {
        name: "Makhani Wrap",
        description: "Creamy makhani style wrap with rich flavours",
        price: 139,
        image: "",
        addons: []
      }
    ]
  },

  {
    category: "Pasta",
    items: [
      {
        name: "White Cheese Pasta",
        description: "Creamy white sauce pasta loaded with rich cheese flavour",
        price: 119,
        image: "",
        addons: []
      },
      {
        name: "Red Sauce Pasta",
        description: "Classic pasta cooked in tangy tomato red sauce",
        price: 129,
        image: "",
        addons: []
      },
      {
        name: "Mix Sauce Pasta",
        description: "Delicious combination of white and red sauce pasta",
        price: 139,
        image: "",
        addons: []
      },
      {
        name: "Tandoori Pasta",
        description: "Fusion pasta with smoky tandoori flavours",
        price: 149,
        image: "",
        addons: []
      },
      {
        name: "Makhani Pasta",
        description: "Rich creamy makhani style pasta",
        price: 159,
        image: "",
        addons: []
      }
    ]
  },

  {
    category: "Burger",
    items: [
      {
        name: "Veg Delight Burger",
        description: "Classic veg burger with patty, onion and special sauce",
        price: 59,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      },
      {
        name: "Spicy Burger",
        description: "Spicy burger with flavourful patty and sauces",
        price: 69,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      },
      {
        name: "Crazy Burger",
        description: "Loaded burger with tasty fillings",
        price: 79,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      },
      {
        name: "Cheese Burger",
        description: "Burger loaded with cheese and special sauce",
        price: 89,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      },
      {
        name: "Paneer Burger",
        description: "Burger with spicy paneer patty and flavours",
        price: 99,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      },
      {
        name: "Kitskos Burger",
        description: "Special Kitskos burger with unique flavours",
        price: 119,
        image: "",
        addons: [
          {
            name: "Extra Cheese",
            price: 20
          }
        ]
      }
    ]
  },  {
    category: "Fries",
    items: [
      {
        name: "Salted Fries",
        description: "Crispy golden french fries seasoned with classic salt",
        image: "",
        variants: [
          {
            name: "Half",
            price: 79
          },
          {
            name: "Full",
            price: 119
          }
        ]
      },
      {
        name: "Peri Peri Fries",
        description: "Crispy fries tossed with spicy peri peri seasoning",
        image: "",
        variants: [
          {
            name: "Half",
            price: 89
          },
          {
            name: "Full",
            price: 129
          }
        ]
      },
      {
        name: "Cheese Masala Fries",
        description: "Loaded fries with cheese and special masala flavour",
        image: "",
        variants: [
          {
            name: "Half",
            price: 119
          },
          {
            name: "Full",
            price: 149
          }
        ]
      }
    ]
  },

  {
    category: "Drinks",
    items: [
      {
        name: "Coke Glass",
        description: "Refreshing chilled coke served in a glass",
        price: 39,
        image: "",
        addons: []
      },
      {
        name: "Mix Fruit Juice",
        description: "Fresh mixed fruit juice with natural flavours",
        price: 49,
        image: "",
        addons: []
      },
      {
        name: "Hot Coffee",
        description: "Hot coffee with rich and refreshing taste",
        price: 59,
        image: "",
        addons: []
      },
      {
        name: "Tea",
        description: "Freshly prepared hot tea",
        price: 39,
        image: "",
        addons: []
      },
      {
        name: "Fruit Beer",
        description: "Refreshing fruity beverage served chilled",
        price: 69,
        image: "",
        addons: []
      }
    ]
  },

  {
    category: "Mojito",
    items: [
      {
        name: "Virgin Mojito",
        description: "Refreshing mint mojito with lime and chilled fizz",
        price: 89,
        image: "",
        addons: []
      },
      {
        name: "Green Apple Mojito",
        description: "Refreshing mojito with green apple flavour",
        price: 89,
        image: "",
        addons: []
      },
      {
        name: "Masala Mojito",
        description: "Spicy twist on classic mojito with masala flavours",
        price: 99,
        image: "",
        addons: []
      },
      {
        name: "Watermelon Mojito",
        description: "Cool mojito with juicy watermelon flavour",
        price: 99,
        image: "",
        addons: []
      },
      {
        name: "Blue Curacao Mojito",
        description: "Premium mojito with blue curacao flavour",
        price: 109,
        image: "",
        addons: []
      },
      {
        name: "Strawberry Mojito",
        description: "Refreshing mojito with sweet strawberry flavour",
        price: 109,
        image: "",
        addons: []
      }
    ]
  },  {
    category: "Shakes",
    items: [
      {
        name: "Cold Coffee",
        description: "Chilled coffee shake with rich coffee flavour",
        price: 89,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Vanilla Shake",
        description: "Classic creamy vanilla flavoured shake",
        price: 79,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Strawberry Shake",
        description: "Refreshing strawberry flavoured shake",
        price: 99,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Butterscotch Shake",
        description: "Creamy butterscotch flavoured shake",
        price: 109,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "OREO Shake",
        description: "Shake blended with crunchy Oreo cookies",
        price: 109,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Chocolate Shake",
        description: "Rich chocolate flavoured creamy shake",
        price: 109,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Kitkat Shake",
        description: "Chocolate shake blended with Kitkat pieces",
        price: 119,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Black Currant Shake",
        description: "Creamy shake with black currant flavour",
        price: 119,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Kiwi Shake",
        description: "Refreshing kiwi flavoured shake",
        price: 119,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Caramel Shake",
        description: "Rich creamy caramel flavoured shake",
        price: 129,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      },
      {
        name: "Brownie Shake",
        description: "Premium shake with brownie pieces",
        price: 159,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Shake",
            price: 30
          },
          {
            name: "Extra Flavour in Shake",
            price: 30
          }
        ]
      }
    ]
  },

  {
    category: "Desserts",
    items: [
      {
        name: "Chocolawa",
        description: "Warm chocolate dessert with rich chocolate centre",
        price: 79,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Dessert",
            price: 30
          }
        ]
      },
      {
        name: "Brownie",
        description: "Soft and delicious chocolate brownie",
        price: 99,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Dessert",
            price: 30
          }
        ]
      },
      {
        name: "Oreo Brownie",
        description: "Chocolate brownie with Oreo flavour",
        price: 109,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Dessert",
            price: 30
          }
        ]
      },
      {
        name: "Kitkat Brownie",
        description: "Chocolate brownie with Kitkat flavour",
        price: 119,
        image: "",
        addons: [
          {
            name: "Extra Ice Cream in Dessert",
            price: 30
          }
        ]
      }
    ]
  },

  {
    category: "Ice Cream",
    items: [
      {
        name: "Vanilla",
        description: "Classic creamy vanilla ice cream",
        price: 59,
        image: "",
        addons: []
      },
      {
        name: "Butterscotch",
        description: "Rich butterscotch ice cream",
        price: 69,
        image: "",
        addons: []
      },
      {
        name: "Chocolate",
        description: "Rich chocolate ice cream",
        price: 79,
        image: "",
        addons: []
      }
    ]
  },  {
    category: "Chinese",
    items: [
      {
        name: "Spring Roll",
        description: "Crispy spring roll filled with delicious vegetables",
        price: 99,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Kurkure Spring Roll",
        description: "Crunchy kurkure style spring roll with spicy flavours",
        price: 139,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Steam Momos (8pc)",
        description: "Soft steamed momos with delicious filling",
        price: 79,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Tandoori Momos",
        description: "Smoky tandoori style momos with spices",
        price: 149,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Makhani Momos",
        description: "Creamy makhani style momos",
        price: 199,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Fried Momos (8pc)",
        description: "Crispy fried momos with tasty filling",
        price: 109,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Kurkure Momos (8pc)",
        description: "Crunchy kurkure coated momos",
        price: 129,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Paneer Steam Momos",
        description: "Steamed momos with paneer stuffing",
        price: 100,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Paneer Fried Momos",
        description: "Fried momos with delicious paneer filling",
        price: 130,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      },
      {
        name: "Paneer Kurkure Momos",
        description: "Kurkure coated momos with paneer filling",
        price: 150,
        image: "",
        addons: [
          {
            name: "Extra Dip (Per Serving)",
            price: 20
          }
        ]
      }
    ]
  }
];

export default menu;