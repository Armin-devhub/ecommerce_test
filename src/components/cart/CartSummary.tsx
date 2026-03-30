"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { getSubtotal, getTax, getTotal } from "@/lib/cart";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CartSummary() {
  const { state } = useCart();
  const subtotal = getSubtotal(state.items);
  const tax = getTax(subtotal);
  const total = getTotal(state.items);

  return (
    <div className="bg-surface rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="space-y-2 text-sm">
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
      </div>
      <div className="border-t border-border pt-4 flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      <Link href="/checkout" className="block">
        <Button className="w-full" size="lg">
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
}
