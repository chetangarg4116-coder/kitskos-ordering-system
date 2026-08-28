import coldCoffeeImg from "../assets/images/cold-coffee.jpg";
import vegSandwichImg from "../assets/images/veg-sandwich.jpg";
import tastyCornSandwichImg from "../assets/images/tasty-corn-sandwich.jpg";
import cheeseLoadedSandwichImg from "../assets/images/cheese-loaded-sandwich.jpg";
import paneerTikkaSandwichImg from "../assets/images/paneer-tikka-sandwich.jpg";
import tandooriPaneerSandwichImg from "../assets/images/tandoori-paneer-sandwich.jpg";
import paneerMaggiImg from "../assets/images/paneer-maggi.jpg";
import cheesyMaggiImg from "../assets/images/cheesy-maggi.jpg";
import makhaniMaggiImg from "../assets/images/makhani-maggi.jpg";
import kitskosSpecialMaggiImg from "../assets/images/kitskos-special-maggi.jpg";
import vegWrapImg from "../assets/images/veg-wrap.jpg";
import crispyWrapImg from "../assets/images/crispy-wrap.jpg";
import spicyWrapImg from "../assets/images/spicy-wrap.jpg";
import paneerWrapImg from "../assets/images/paneer-wrap.jpg";
import makhaniWrapImg from "../assets/images/makhani-wrap.jpg";
import whiteCheesePastaImg from "../assets/images/white-cheese-pasta.jpg";
import redSaucePastaImg from "../assets/images/red-sauce-pasta.jpg";
import mixSaucePastaImg from "../assets/images/mix-sauce-pasta.jpg";
import tandooriPastaImg from "../assets/images/tandoori-pasta.jpg";
import makhaniPastaImg from "../assets/images/makhani-pasta.jpg";
import vegDelightBurgerImg from "../assets/images/veg-delight-burger.jpg";
import spicyBurgerImg from "../assets/images/spicy-burger.jpg";
import crazyBurgerImg from "../assets/images/crazy-burger.jpg";
import paneerBurgerImg from "../assets/images/paneer-burger.jpg";
import cheeseBurgerImg from "../assets/images/cheese-burger.jpg";
import kitskosBurgerImg from "../assets/images/kitskos-burger.jpg";
import saltedFriesImg from "../assets/images/salted-fries.jpg";
import periPeriFriesImg from "../assets/images/peri-peri-fries.jpg";
import cheeseMasalaFriesImg from "../assets/images/cheese-masala-fries.jpg";
import cokeGlassImg from "../assets/images/coke-glass.jpg";
import mixFruitJuiceImg from "../assets/images/mix-fruit-juice.jpg";
import hotCoffeeImg from "../assets/images/hot-coffee.jpg";
import waterBottleImg from "../assets/images/water-bottle.jpg";
import teaImg from "../assets/images/tea.jpg";
import fruitBeerImg from "../assets/images/fruit-beer.jpg";
import greenAppleMojitoImg from "../assets/images/green-apple-mojito.jpg";
import masalaMojitoImg from "../assets/images/masala-mojito.jpg";
import watermelonMojitoImg from "../assets/images/watermelon-mojito.jpg";
import blueCuracaoMojitoImg from "../assets/images/blue-curacao-mojito.jpg";
import strawberryMojitoImg from "../assets/images/strawberry-mojito.jpg";
import vanillaShakeImg from "../assets/images/vanilla-shake.jpg";
import strawberryShakeImg from "../assets/images/strawberry-shake.jpg";
import butterscotchShakeImg from "../assets/images/butterscotch-shake.jpg";
import oreoShakeImg from "../assets/images/oreo-shake.jpg";
import chocolateShakeImg from "../assets/images/chocolate-shake.jpg";
import kitKatShakeImg from "../assets/images/kit-kat-shake.jpg";
import blackCurrantShakeImg from "../assets/images/black-currant-shake.jpg"; 
import kiwiShakeImg from "../assets/images/kiwi-shake.jpg";
import caramelShakeImg from "../assets/images/caramel-shake.jpg";
import brownieShakeImg from "../assets/images/brownie-shake.jpg";
import chocoLavaImg from "../assets/images/choco-lava.jpg";
import brownieImg from "../assets/images/brownie.jpg";
import kitKatBrownieImg from "../assets/images/kit-kat-brownie.jpg";
import vanillaIceCreamImg from "../assets/images/vanilla-ice-cream.jpg";
import butterscotchIceCreamImg from "../assets/images/butterscotch-ice-cream.jpg";
import springRollImg from "../assets/images/spring-roll.jpg";
import kurkureSpringRollImg from "../assets/images/kurkure-spring-roll.jpg";
import steamMomosImg from "../assets/images/steam-momos.jpg";

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
        image: vegSandwichImg,
        addons: []
      },
      {
        name: "Tasty Corn Sandwich",
        description: "Grilled sandwich filled with sweet corn and creamy flavours",
        price: 109,
        image: tastyCornSandwichImg,
        addons: []
      },
      {
        name: "Cheese Loaded Sandwich",
        description: "Grilled sandwich loaded with extra cheese and rich flavours",
        price: 119,
        image: cheeseLoadedSandwichImg,
        addons: []
      },
      {
        name: "Paneer Tikka Sandwich",
        description: "Grilled sandwich with spicy paneer tikka filling",
        price: 129,
        image: paneerTikkaSandwichImg,
        addons: []
      },
      {
        name: "Tandoori Paneer Sandwich",
        description: "Grilled sandwich with smoky tandoori paneer stuffing",
        price: 139,
        image: tandooriPaneerSandwichImg,
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
        image: paneerMaggiImg,
        addons: []
      },
      {
        name: "Cheesy Maggi",
        description: "Creamy Maggi loaded with melted cheese",
        price: 109,
        image: cheesyMaggiImg,
        addons: []
      },
      {
        name: "Makhani Maggi",
        description: "Rich and creamy makhani style Maggi",
        price: 119,
        image: makhaniMaggiImg,
        addons: []
      },
      {
        name: "Kitskos Spl. Maggi",
        description: "Special Kitskos style Maggi with unique flavours",
        price: 149,
        image: kitskosSpecialMaggiImg,
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
        image: vegWrapImg,
        addons: []
      },
      {
        name: "Crispy Wrap",
        description: "Crunchy crispy filling wrapped with tasty sauces",
        price: 89,
        image: crispyWrapImg,
        addons: []
      },
      {
        name: "Spicy Wrap",
        description: "Spicy and flavourful wrap with special sauces",
        price: 99,
        image: spicyWrapImg,
        addons: []
      },
      {
        name: "Paneer Wrap",
        description: "Wrap loaded with delicious paneer filling and spices",
        price: 129,
        image: paneerWrapImg,
        addons: []
      },
      {
        name: "Makhani Wrap",
        description: "Creamy makhani style wrap with rich flavours",
        price: 139,
        image: makhaniWrapImg,
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
        image: whiteCheesePastaImg,
        addons: []
      },
      {
        name: "Red Sauce Pasta",
        description: "Classic pasta cooked in tangy tomato red sauce",
        price: 129,
        image: redSaucePastaImg,
        addons: []
      },
      {
        name: "Mix Sauce Pasta",
        description: "Delicious combination of white and red sauce pasta",
        price: 139,
        image: mixSaucePastaImg,
        addons: []
      },
      {
        name: "Tandoori Pasta",
        description: "Fusion pasta with smoky tandoori flavours",
        price: 149,
        image: tandooriPastaImg,
        addons: []
      },
      {
        name: "Makhani Pasta",
        description: "Rich creamy makhani style pasta",
        price: 159,
        image: makhaniPastaImg,
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
        image: vegDelightBurgerImg,
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
        image: spicyBurgerImg,
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
        image: crazyBurgerImg,
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
        image: cheeseBurgerImg,
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
        image:  paneerBurgerImg,
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
        image: kitskosBurgerImg,
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
        image: saltedFriesImg,
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
        image: periPeriFriesImg,
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
        image: cheeseMasalaFriesImg,
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
        image: cokeGlassImg,
        addons: []
      },
      {
        name: "Mix Fruit Juice",
        description: "Fresh mixed fruit juice with natural flavours",
        price: 49,
        image: mixFruitJuiceImg,
        addons: []
      },
      {
        name: "Hot Coffee",
        description: "Hot coffee with rich and refreshing taste",
        price: 59,
        image: hotCoffeeImg,
        addons: []
      },
      {
        name: "Tea",
        description: "Freshly prepared hot tea",
        price: 39,
        image: teaImg,
        addons: []
      },
      {
  name: "Water Bottle",
  description: "Chilled drinking water",
  price: 20,
  image:  waterBottleImg,
  addons: []
},
      {
        name: "Fruit Beer",
        description: "Refreshing fruity beverage served chilled",
        price: 69,
        image: fruitBeerImg,
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
        image: greenAppleMojitoImg,
        addons: []
      },
      {
        name: "Masala Mojito",
        description: "Spicy twist on classic mojito with masala flavours",
        price: 99,
        image: masalaMojitoImg,
        addons: []
      },
      {
        name: "Watermelon Mojito",
        description: "Cool mojito with juicy watermelon flavour",
        price: 99,
        image: watermelonMojitoImg,
        addons: []
      },
      {
        name: "Blue Curacao Mojito",
        description: "Premium mojito with blue curacao flavour",
        price: 109,
        image: blueCuracaoMojitoImg,
        addons: []
      },
      {
        name: "Strawberry Mojito",
        description: "Refreshing mojito with sweet strawberry flavour",
        price: 109,
        image: strawberryMojitoImg,
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
        image: coldCoffeeImg,
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
        image: vanillaShakeImg,
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
        image: strawberryShakeImg,
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
        image: butterscotchShakeImg,
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
        image: oreoShakeImg,
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
        image: chocolateShakeImg,
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
        image:kitKatShakeImg,
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
        image: blackCurrantShakeImg,
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
        image: kiwiShakeImg,
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
        image: caramelShakeImg,
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
        image: brownieShakeImg,
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
        image: chocoLavaImg,
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
        image: brownieImg,
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
        image: kitKatBrownieImg,
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
        image: vanillaIceCreamImg,
        addons: []
      },
      {
        name: "Butterscotch",
        description: "Rich butterscotch ice cream",
        price: 69,
        image: butterscotchIceCreamImg,
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
        image: springRollImg,
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
        image: kurkureSpringRollImg,
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
        image: steamMomosImg,
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