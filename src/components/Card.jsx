export default function Card({ title, image, price, rating }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <img src={image}></img>
      <p>${price}</p>
      <p>★{rating}</p>
    </div>
  );
}
