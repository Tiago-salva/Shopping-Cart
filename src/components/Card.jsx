export default function Card({ title, image, price, rating }) {
  return (
    <div className="product_card">
      <h3>{title}</h3>
      <img src={image}></img>
      <p>★{rating}</p>
      <p>${price}</p>
    </div>
  );
}
