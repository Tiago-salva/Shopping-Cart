import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const { cartItems, addQuantity, removeFromCart } = useContext(CartContext);
  const cartItemsTotalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <>
      {Object.keys(cartItems).length > 0 ? (
        <>
          <div className={styles.cart_items_container}>
            {cartItems.map((product) => (
              <div key={product.id}>
                <img src={product.image}></img>
                <h5>{product.title}</h5>
                <p>$ {product.price}</p>
                <div className={styles.cart_items_quantity}>
                  <button onClick={() => removeFromCart(product)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => addQuantity(product)}>+</button>
                </div>
                <p>Total: $ {product.price * product.quantity}</p>
              </div>
            ))}
          </div>
          <div className={styles.cart_items_total}>
            <p>Total: {Math.round(cartItemsTotalPrice * 100) / 100}</p>
          </div>
        </>
      ) : (
        <h1>No tienes productos en tu carrito</h1>
      )}
    </>
  );
}
