import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const { cartItems, addToCart, error, setError, loading, setLoading } =
    useContext(CartContext);
  const [productAdded, setProductAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProduct(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <p>Ocurrio un error</p>;
  if (loading) return <p>Cargando producto...</p>;

  return (
    Object.keys(selectedProduct).length > 0 && (
      <>
        {productAdded && (
          <p className={styles.selected_product_notification}>
            {cartItems.find((item) => item.id === selectedProduct.id)
              ? "El producto ya esta en el carrito"
              : "Producto añadido al carrito"}
          </p>
        )}
        <div className={styles.selected_product_container}>
          <div className={styles.selected_product_img}>
            <img src={selectedProduct.image}></img>
            <p>{selectedProduct.description}</p>
          </div>
          <aside className={styles.selected_product_info}>
            <h1>{selectedProduct.title}</h1>
            <p>Calificacion {selectedProduct.rating.rate} </p>
            <p>${selectedProduct.price}</p>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                setProductAdded(true);
                setTimeout(() => {
                  setProductAdded(false);
                }, 1500);
              }}
            >
              Agregar al carrito
            </button>
            <Link to="/checkout">Comprar</Link>
          </aside>
        </div>
      </>
    )
  );
}
