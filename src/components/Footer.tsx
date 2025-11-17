"use client"; // ใส่เฉพาะถ้า Footer ใช้ Client hooks (ไม่จำเป็นในตัวอย่างนี้ก็ได้)

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#f5f5f5",
      padding: "12px",
      textAlign: "center",
      borderTop: "1px solid #eee",
      marginTop: "24px"
    }}>
      © 2025 My Clothing Shop. All rights reserved.
    </footer>
  );
}
