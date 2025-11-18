"use client";

import { useCart } from "../../components/CartContext";
import Link from "next/link";
import styles from "./cart.module.css";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
          <Link href="/products" style={{ color: "var(--accent)" }}>
            Continue shopping
          </Link>
        </div>
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
              <tr style={{ borderBottom: "2px solid #eee" }}>
                <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Product</th>
                <th style={{ textAlign: "center", padding: "12px", fontWeight: "600" }}>Quantity</th>
                <th style={{ textAlign: "right", padding: "12px", fontWeight: "600" }}>Price</th>
                <th style={{ textAlign: "center", padding: "12px", fontWeight: "600" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className={styles.row}>
                  <td style={{ padding: "12px" }} className={styles.productName}>{item.name}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>{item.qty || 1}</td>
                  <td style={{ textAlign: "right", padding: "12px" }}>฿{(item.price * (item.qty || 1)).toLocaleString()}</td>
                  <td style={{ textAlign: "center", padding: "12px" }}>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        padding: "6px 12px",
                        background: "#ff6b6b",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "24px", textAlign: "right" }}>
            <h2>Total: ฿{total.toLocaleString()}</h2>
            <button
              style={{
                marginTop: "16px",
                padding: "12px 24px",
                background: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
