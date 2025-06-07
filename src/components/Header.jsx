import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Titulo</Link>
      <input type="text" placeholder="Buscar"></input>
      <nav>
        <ul>
          <li>
            <Link to="products">Productos</Link>{" "}
          </li>
          <li>
            <Link to="checkout">Carrito</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
