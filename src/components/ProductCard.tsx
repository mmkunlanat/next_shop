"use client";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="card">
        <img src={product.image} className="image" alt="product" />

        <h3 className="name">{product.name}</h3>
        <p className="price">{product.price} บาท</p>

        <button className="btn">สั่งซื้อ</button>
      </div>

      <style jsx>{`
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 15px;
          text-align: center;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
        }

        .image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
        }

        .name {
          font-size: 18px;
          margin: 10px 0 5px;
        }

        .price {
          color: #e60023;
          font-size: 18px;
          font-weight: bold;
        }

        .btn {
          width: 100%;
          margin-top: 12px;
          padding: 10px;
          border-radius: 12px;
          background: #442c18;
          color: #fff;
          border: none;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          background: #333;
        }
      `}</style>
    </>
  );
}
