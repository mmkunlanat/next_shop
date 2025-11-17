"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={{ background: "#fff", borderBottom: "1px solid #eee", padding: 12 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div><Link href="/">MyShop</Link></div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart ({cart.reduce((sum, i) => sum + (i.qty||1), 0)})</Link>
        </div>
      </div>
    </nav>
  );
}
