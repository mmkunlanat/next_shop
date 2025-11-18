"use client";

import { CartItem, useCart } from "./CartContext";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const item: CartItem = {
      id: product._id || product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    };
    addToCart(item);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>฿{product.price}</p>
        <p className={styles.description}>A comfortable and stylish choice — perfect for everyday wear.</p>
        <button className={styles.cta} onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
