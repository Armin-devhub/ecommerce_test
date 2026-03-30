"use client";

import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProductRating from "./ProductRating";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/Toast";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product);
    showToast(`${product.name} added to cart!`);
  }

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-square bg-surface">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-2 left-2 flex gap-1">
            {product.tags.includes("sale") && <Badge variant="sale">Sale</Badge>}
            {product.tags.includes("new") && <Badge variant="new">New</Badge>}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <Badge variant="outOfStock">Out of Stock</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground truncate">{product.name}</h3>
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.inStock && (
              <Button size="sm" onClick={handleAddToCart}>
                <ShoppingBagIcon className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
