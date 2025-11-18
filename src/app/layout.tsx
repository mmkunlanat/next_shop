import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Clothing Shop",
  description: "Modern Online Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
