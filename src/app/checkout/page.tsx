"use client";

import { useCart } from "@/context/CartContext";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function CheckoutPage() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBagIcon className="w-16 h-16 text-muted mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Nothing to checkout</h1>
        <p className="text-muted mb-6">Add some items to your cart first.</p>
        <Link href="/products">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
