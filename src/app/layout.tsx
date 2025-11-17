import "./globals.css"; // global styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
