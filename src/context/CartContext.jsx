import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Generate a unique key for each customized item
  const getItemKey = (item) => {

    const variant = item.variant
      ? item.variant.name
      : "";

    const addons = item.addons
      ? item.addons
          .map(a => a.name)
          .sort()
          .join(",")
      : "";

  const note = item.instruction || "";

const comboChoices = item.comboChoices
  ? Object.entries(item.comboChoices)
      .sort()
      .map(([key, value]) => `${key}:${value}`)
      .join("|")
  : "";

return `${item.name}_${variant}_${addons}_${comboChoices}_${note}`;

  };

  const addToCart = (item) => {

    const itemKey = getItemKey(item);

    const existing = cart.find(
      cartItem => cartItem.itemKey === itemKey
    );

    if (existing) {

      setCart(

        cart.map(cartItem =>

          cartItem.itemKey === itemKey

            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
              }

            : cartItem

        )

      );

    } else {

      setCart([

        ...cart,

        {
          ...item,
          itemKey,
          quantity: 1
        }

      ]);

    }

  };

  const increaseQuantity = (itemKey) => {

    setCart(

      cart.map(item =>

        item.itemKey === itemKey

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      )

    );

  };

  const decreaseQuantity = (itemKey) => {

    setCart(

      cart
        .map(item =>

          item.itemKey === itemKey

            ? {
                ...item,
                quantity: item.quantity - 1
              }

            : item

        )
        .filter(item => item.quantity > 0)

    );

  };

  const clearCart = () => {

    setCart([]);

  };

  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart

      }}

    >

      {children}

    </CartContext.Provider>

  );

}