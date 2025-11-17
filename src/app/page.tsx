"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";

// mock products
const mockProducts = [
  { _id: "1", name: "T-Shirt White", price: 299, image: "/test.jpg" },
  { _id: "2", name: "Hoodie Black", price: 499, image: "/placeholder.png" },
  { _id: "3", name: "Cap Red", price: 199, image: "/placeholder.png" },
  { _id: "4", name: "Jeans Blue", price: 699, image: "/placeholder.png" },
];

export default function HomePage() {
  const [products] = useState(mockProducts);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to My Clothing Shop</h1>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
