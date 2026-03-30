"use client";

import { CartItem as CartItemType } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-surface shrink-0">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground">{item.product.name}</h3>
        <p className="text-sm text-primary font-semibold mt-1">{formatPrice(item.product.price)}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="p-2 hover:bg-gray-50 cursor-pointer"
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="px-3 text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="p-2 hover:bg-gray-50 cursor-pointer"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="p-2 text-muted hover:text-red-500 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
          <span className="ml-auto font-semibold">
            {formatPrice(item.product.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
