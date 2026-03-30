"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CartSidebar() {
  const { state, toggleCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {state.isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={toggleCart} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={toggleCart} className="p-1 text-muted hover:text-foreground cursor-pointer">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
              <p className="text-muted mb-4">Your cart is empty</p>
              <Link href="/products" onClick={toggleCart}>
                <Button>Browse Products</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                      <p className="text-sm text-primary font-semibold mt-0.5">
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 border border-border rounded hover:bg-gray-50 cursor-pointer"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 border border-border rounded hover:bg-gray-50 cursor-pointer"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto p-1 text-muted hover:text-red-500 cursor-pointer"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border px-4 py-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <Link href="/checkout" onClick={toggleCart} className="block">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                </Link>
                <Link href="/cart" onClick={toggleCart} className="block">
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
