const pizzaAddons = [
  {
    name: "Extra Toppings",
    prices: {
      Small: 20,
      Medium: 40
    }
  },
  {
    name: "Extra Cheese",
    prices: {
      Small: 40,
      Medium: 70
    }
  },
  {
    name: "Pan Base (Soft Base)",
    prices: {
      Small: 30,
      Medium: 50
    }
  },
  {
    name: "Cheese Burst",
    prices: {
      Small: 60,
      Medium: 90
    }
  }
];

const menuData = [
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
  },

{
  category: "Pizza Mania",
  items: [
    {
      name: "Onion Pizza",
      description: "Fresh onion loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 79
    },
    {
      name: "Capsicum Pizza",
      description: "Fresh capsicum loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 79
    },
    {
      name: "Sweet Corn Pizza",
      description: "Golden corn loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 79
    }
  ]
},

{
  category: "Double Pizza",
  items: [
    {
      name: "Onion + Capsicum Pizza",
      description: "Onion and capsicum loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 109
    },
    {
      name: "Onion + Paneer Pizza",
      description: "Onion and paneer loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 109
    },
    {
      name: "Onion + Sweet Corn Pizza",
      description: "Onion and sweet corn loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      price: 109
    }
  ]
},

{
  category: "Kitskos Simple Pizza",
  items: [
    {
      name: "Margherita Pizza",
      description: "Loaded with double cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 149 },
        { name: "Medium", price: 249 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Cheese Corn Pizza",
      description: "Golden corn loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 149 },
        { name: "Medium", price: 249 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Cheese Onion Pizza",
      description: "Onion loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 149 },
        { name: "Medium", price: 249 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Cheese Capsicum Pizza",
      description: "Capsicum loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 149 },
        { name: "Medium", price: 249 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Paneer Pizza",
      description: "Paneer loaded with mozzarella cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 149 },
        { name: "Medium", price: 249 }
      ],
      addons: pizzaAddons
    }
  ]
},

{
  category: "Ultimate Pizza",
  items: [
    {
      name: "Mexican Lover",
      description: "Onion, Capsicum, Paneer",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 169 },
        { name: "Medium", price: 299 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Indian Choice",
      description: "Onion, Capsicum, Paneer",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 169 },
        { name: "Medium", price: 299 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Tandoori Paneer Pizza",
      description: "Onion, Capsicum, Paneer, Red Paprika",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 169 },
        { name: "Medium", price: 299 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Farm House Pizza",
      description: "Onion, Capsicum",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 169 },
        { name: "Medium", price: 299 }
      ],
      addons: pizzaAddons
    }
  ]
},

{
  category: "Special Pizza",
  items: [
    {
      name: "Kitskos Special",
      description: "Onion, Red Paprika, Paneer, Tomato",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 219 },
        { name: "Medium", price: 379 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Paneer Lover",
      description: "Capsicum, Paneer, Peri Peri, Black Olives, Loaded Cheese",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 219 },
        { name: "Medium", price: 379 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Loaded Cheese",
      description: "Onion and mozzarella cheese loaded pizza",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 219 },
        { name: "Medium", price: 379 }
      ],
      addons: pizzaAddons
    },

    {
      name: "Indo Western",
      description: "Onion, Tomato, Black Olive, Sweet Corn, Mushroom, Harissa Sauce",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 219 },
        { name: "Medium", price: 379 }
      ],
      addons: pizzaAddons
    }
  ]
},
{
  category: "Combo",
  items: [
    {
      name: "Tandoori Paneer Sandwich + Vanilla Shake + Salted Fries",
      description: "🥪🥤🍟",
      price: 249
    },
    {
      name: "Crispy Wrap + Salted Fries + Coke",
      description: "🌯🍟🥤",
      price: 149
    },
    {
      name: "Red Pasta / White Pasta + Mojito + Salted Fries",
      description: "🍝🍹🍟",
      price: 239,
      comboSelections: [
        {
          title: "Choose Pasta",
          options: ["Red Pasta", "White Pasta"]
        },
        {
          title: "Choose Mojito",
          options: [
            "Virgin Mojito",
            "Green Apple Mojito",
            "Masala Mojito",
            "Watermelon Mojito",
            "Blue Curacao Mojito",
            "Strawberry Mojito"
          ]
        }
      ]
    },
    {
      name: "Crazy Burger + Salted Fries + Coke",
      description: "🍔🍟🥤",
      price: 149
    },
    {
      name: "Paneer Burger + Salted Fries + Mix Fruit Juice",
      description: "🍔🍟🧃",
      price: 199
    },
    {
      name: "Any 3 Double Pizza",
      description: "🍕🍕🍕",
      price: 249,
      comboSelections: [
        {
          title: "Pizza 1",
          options: [
            "Onion + Capsicum",
            "Onion + Paneer",
            "Onion + Sweet Corn"
          ]
        },
        {
          title: "Pizza 2",
          options: [
            "Onion + Capsicum",
            "Onion + Paneer",
            "Onion + Sweet Corn"
          ]
        },
        {
          title: "Pizza 3",
          options: [
            "Onion + Capsicum",
            "Onion + Paneer",
            "Onion + Sweet Corn"
          ]
        }
      ]
    },
    {
      name: "Any 2 Medium Ultimate Pizza",
      description: "🍕🍕",
      price: 499,
      comboSelections: [
        {
          title: "Ultimate Pizza 1",
          options: [
            "Mexican Lover",
            "Indian Choice",
            "Tandoori Paneer Pizza",
            "Farm House Pizza"
          ]
        },
        {
          title: "Ultimate Pizza 2",
          options: [
            "Mexican Lover",
            "Indian Choice",
            "Tandoori Paneer Pizza",
            "Farm House Pizza"
          ]
        }
      ]
    },
    {
      name: "Any 2 Medium Special Pizza",
      description: "🍕🍕",
      price: 649,
      comboSelections: [
        {
          title: "Special Pizza 1",
          options: [
            "Kitskos Special",
            "Paneer Lover",
            "Loaded Cheese",
            "Indo Western"
          ]
        },
        {
          title: "Special Pizza 2",
          options: [
            "Kitskos Special",
            "Paneer Lover",
            "Loaded Cheese",
            "Indo Western"
          ]
        }
      ]
    },
    {
      name: "1 Special Medium Pizza + Any Mojito",
      description: "🍕🍹",
      price: 349,
      comboSelections: [
        {
          title: "Choose Pizza",
          options: [
            "Kitskos Special",
            "Paneer Lover",
            "Loaded Cheese",
            "Indo Western"
          ]
        },
        {
          title: "Choose Mojito",
          options: [
            "Virgin Mojito",
            "Green Apple Mojito",
            "Masala Mojito",
            "Watermelon Mojito",
            "Blue Curacao Mojito",
            "Strawberry Mojito"
          ]
        }
      ]
    },
    {
      name: "Any 1 Double Pizza + Crazy Burger + Cold Coffee",
      description: "🍕🍔☕",
      price: 229,
      comboSelections: [
        {
          title: "Choose Double Pizza",
          options: [
            "Onion + Capsicum",
            "Onion + Paneer",
            "Onion + Sweet Corn"
          ]
        }
      ]
    },
    {
      name: "Cold Coffee + Veg Sandwich",
      description: "☕🥪",
      price: 159
    },
    {
      name: "Coke + Veg Wrap",
      description: "🥤🌯",
      price: 99
    },
    {
      name: "Veg Maggie + Any Mojito",
      description: "🍜🍹",
      price: 169,
      comboSelections: [
        {
          title: "Choose Mojito",
          options: [
            "Virgin Mojito",
            "Green Apple Mojito",
            "Masala Mojito",
            "Watermelon Mojito",
            "Blue Curacao Mojito",
            "Strawberry Mojito"
          ]
        }
      ]
    },
    {
      name: "White Sauce Pasta + Fruit Beer",
      description: "🍝🍺",
      price: 159
    }
  ]
},
{
  category: "🍕 Build Your Own Pizza",
  items: [
    {
      name: "Build Your Own Pizza",
      description: "Choose up to 5 toppings",
      image: "/images/pizza.jpg",
      variants: [
        { name: "Small", price: 219 },
        { name: "Medium", price: 379 }
      ],

      customPizza: true,

      toppings: [
        "Onion",
        "Capsicum",
        "Tomato",
        "Black Olives",
        "Mushroom",
        "Paneer",
        "Green Chilli",
        "Jalapeño",
        "Red Paprika",
        "Sweet Corn"
      ],

      baseOptions: [
        {
          name: "Pan Base",
          prices: {
            Small: 30,
            Medium: 50
          }
        },
        {
          name: "Cheese Burst",
          prices: {
            Small: 60,
            Medium: 90
          }
        }
      ]
    }
  ]
}
];

export default menuData;