"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { getSubtotal, getTax, getTotal } from "@/lib/cart";
import Image from "next/image";

export default function OrderSummary() {
  const { state } = useCart();
  const subtotal = getSubtotal(state.items);
  const tax = getTax(subtotal);
  const total = getTotal(state.items);

  return (
    <div className="bg-surface rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3 mb-4">
        {state.items.map((item) => (
          <div key={item.product.id} className="flex gap-3">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white shrink-0">
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{item.product.name}</p>
              <p className="text-xs text-muted">Qty: {item.quantity}</p>
            </div>
            <span className="text-sm font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Tax (est.)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="border-t border-border pt-2 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
