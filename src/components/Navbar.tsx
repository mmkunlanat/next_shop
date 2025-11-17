"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}><Link href="/">MyShop</Link></div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input placeholder="Search products..." className={styles.search} />
          <div className={styles.navLinks}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/products">Products</Link>
            <Link className={styles.link} href="/cart">Cart <span className={styles.cartBadge}>{cart.reduce((sum, i) => sum + (i.qty||1), 0)}</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
