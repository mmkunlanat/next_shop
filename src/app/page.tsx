"use client"; // ต้องใส่ถ้าใช้ Client hooks ภายใน เช่น useCart

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Clothing Shop</h1>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
