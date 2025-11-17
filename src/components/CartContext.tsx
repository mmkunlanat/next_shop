"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = { id: string; name: string; price: number; image?: string; qty?: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) return prev.map(p => p.id === item.id ? {...p, qty: (p.qty||1)+(item.qty||1)} : p);
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
