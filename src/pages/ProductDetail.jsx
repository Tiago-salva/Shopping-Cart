import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    selectedProduct && (
      <>
        <div>
          <h1>{selectedProduct.title}</h1>
          <img src={selectedProduct.image}></img>
          <p>${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
        </div>
      </>
    )
  );
}
