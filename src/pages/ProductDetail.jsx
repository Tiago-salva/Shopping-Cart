import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

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
        <div className={styles.selected_product_container}>
          <div className={styles.selected_product_img}>
            <img src={selectedProduct.image}></img>
            <p>{selectedProduct.description}</p>
          </div>
          <aside className={styles.selected_product_info}>
            <h1>{selectedProduct.title}</h1>
            <p>Calificacion {selectedProduct.rating.rate} </p>
            <p>${selectedProduct.price}</p>
            <button>Agregar al carrito</button>
            <Link to="/checkout">Comprar</Link>
          </aside>
        </div>
      </>
    )
  );
}
