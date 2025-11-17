import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>My Clothing Shop</div>
      <div className={styles.small}>© 2025 — Built with ❤️</div>
    </footer>
  );
}
