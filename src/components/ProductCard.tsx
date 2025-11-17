"use client";

import { CartItem, useCart } from "./CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const item: CartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    };
    addToCart(item);
  };

  return (
    <div className={styles.card}>
      <div style={{ position: "relative" }}>
        <img src={product.image} alt={product.name} />
        <div className={styles.priceTag}>฿{product.price}</div>
      </div>

      <div>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.meta}>Size: M • Color: Default</div>
      </div>

      <div>
        <button className={styles.button} onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
