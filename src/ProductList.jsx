export default function ProductList({ products, onSelect }) {
  return (
    <div className="products">
      <h3>Products</h3>

      {products.map((p) => (
        <div className="product" key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => onSelect(p)}>Select</button>
        </div>
      ))}
    </div>
  );
}
