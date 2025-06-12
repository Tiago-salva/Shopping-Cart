import { createContext, useEffect, useState } from "react";

// Se crea el contexto
export const CartContext = createContext();

// Se crea todo lo que queremos que sea accesible globalmente
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  const addToCart = (item) => {
    const existingProduct = cartItems.some((product) => product.id === item.id);
    if (!existingProduct) {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const addQuantity = (item) => {
    const updatedCart = cartItems.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems
      .map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCartItems(updatedCart);
  };

  useEffect(() => {}, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        products,
        error,
        setError,
        setLoading,
        loading,
        cartItems,
        addToCart,
        addQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
