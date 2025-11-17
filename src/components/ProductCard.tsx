"use client";

import { CartItem, useCart } from "./CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const item: CartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    };
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={product.image || "/placeholder.png"} alt={product.name} />
      <h3>{product.name}</h3>
      <p>฿{product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
