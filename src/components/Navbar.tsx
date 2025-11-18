"use client";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">JERSYONE SHOP</h2>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 15px 25px;
          background: #442c18;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
        }

        .menu {
          display: flex;
          gap: 20px;
          list-style: none;
        }

        .menu li:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
