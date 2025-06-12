import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const { products, error, loading } = useContext(CartContext);

  if (error) return <p>Ocurrio un error</p>;
  if (loading) return <p>Cargando producto...</p>;

  return (
    <>
      <h1>Estos son los productos</h1>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
