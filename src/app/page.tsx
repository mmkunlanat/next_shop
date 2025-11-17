"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

// ใช้ mock data แทน database
const mockProducts = [
  { _id: "1", name: "T-Shirt White", price: 299, image: "/placeholder.png" },
  { _id: "2", name: "Hoodie Black", price: 499, image: "/placeholder.png" },
  { _id: "3", name: "Cap Red", price: 199, image: "/placeholder.png" },
  { _id: "4", name: "Jeans Blue", price: 699, image: "/placeholder.png" },
];

export default function HomePage() {
  const [products] = useState(mockProducts);

  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Clothing Shop</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
