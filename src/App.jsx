import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData); // products never change

  // ✅ total price recalculates ONLY if products change
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ stable handler reference
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div className="app">
      <h1>React Performance Optimization</h1>

      <div className="card">
        <h2>Total Price: ₹{totalPrice}</h2>

        <button
          className="counter-btn"
          onClick={() => setCounter(counter + 1)}
        >
          Counter: {counter}
        </button>

        <ProductList
          products={products}
          onSelect={handleSelectProduct}
        />
      </div>
    </div>
  );
}
