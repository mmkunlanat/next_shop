"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Image from "next/image";

const mockProducts = [
  { _id: "1", name: "Pink", price: 290, image: "/test.jpg" },
  { _id: "2", name: "Black", price: 290, image: "/Black.jpg" },
  { _id: "3", name: "Grey", price: 290, image: "/Grey.jpg" },
  { _id: "4", name: "Drak green", price: 290, image: "/Drak green.jpg" },
  { _id: "5", name: "Fuchsia", price: 290, image: "/Fuchsia.jpg" },
  { _id: "6", name: "Purple", price: 290, image: "/Purple.jpg" },
  { _id: "7", name: "Lime green", price: 290, image: "/Lime green.jpg" },
];

export default function HomePage() {
  const [products] = useState(mockProducts);

  return (
    <div className="pageLayout">

      {/* PROMO CARD BIG - แค่รูปภาพ */}
      <div className="promoCard">
        <Image
          src="/promo.jpg"
          alt="promo"
          fill
          style={{ objectFit: "cover", borderRadius: "18px" }}
        />
      </div>

      {/* PRODUCT GRID */}
      <div className="productsGrid">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      <style jsx>{`
        .pageLayout {
          max-width: 1200px;
          margin: 40px auto;
          display: grid;
          grid-template-columns: 1.1fr 1.4fr;
          gap: 30px;
        }

        .promoCard {
  position: relative;    /* เดิม */
  height: 842px;         /* A4 height */
  width: 595px;          /* A4 width */
  border-radius: 18px;
  overflow: hidden;
}

        .productsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        @media (max-width: 900px) {
          .pageLayout {
            grid-template-columns: 1fr;
          }

          .promoCard {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
