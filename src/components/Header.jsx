import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <header>
      {filterProducts.length > 0 && inputValue !== "" && (
        <div className="searched_products">
          {filterProducts.map((product, index) => (
            <Link to={`/products/${product.id}`} key={index}>
              <p>{product.title}</p>
            </Link>
          ))}
        </div>
      )}
      <Link to="/">Titulo</Link>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <nav>
        <ul>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/checkout">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
