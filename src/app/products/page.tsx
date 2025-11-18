"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import styles from "../page.module.css";

const mockProducts = [
  { _id: "1", name: "T-Shirt White", price: 299, image: "/placeholder.png" },
  { _id: "2", name: "Hoodie Black", price: 499, image: "/placeholder.png" },
  { _id: "3", name: "Cap Red", price: 199, image: "/placeholder.png" },
  { _id: "4", name: "Jeans Blue", price: 699, image: "/placeholder.png" },
  { _id: "5", name: "Sneakers", price: 1299, image: "/placeholder.png" },
  { _id: "6", name: "Jacket", price: 1599, image: "/placeholder.png" },
];

export default function ProductsPage() {
  const [products] = useState(mockProducts);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.productsGrid}>
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
