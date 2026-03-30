import { CartItem } from "@/types";

export function getSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function getTax(subtotal: number): number {
  return Math.round(subtotal * 0.08);
}

export function getTotal(items: CartItem[]): number {
  const subtotal = getSubtotal(items);
  return subtotal + getTax(subtotal);
}

export function getItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
