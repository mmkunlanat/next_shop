import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
