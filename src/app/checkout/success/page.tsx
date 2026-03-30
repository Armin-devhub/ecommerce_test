"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { generateOrderNumber } from "@/lib/utils";
import { useMemo } from "react";

export default function CheckoutSuccessPage() {
  const orderNumber = useMemo(() => generateOrderNumber(), []);

  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
      <p className="text-muted mb-6">
        Your order has been placed successfully. We&apos;ll send you a confirmation email shortly.
      </p>
      <div className="bg-surface rounded-xl p-6 mb-8">
        <p className="text-sm text-muted mb-1">Order Number</p>
        <p className="text-lg font-mono font-bold text-primary">{orderNumber}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/products">
          <Button size="lg">Continue Shopping</Button>
        </Link>
        <Link href="/">
          <Button size="lg" variant="outline">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
