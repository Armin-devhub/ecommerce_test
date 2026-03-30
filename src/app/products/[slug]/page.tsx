"use client";

import { products, getProductBySlug } from "@/data/products";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductRating from "@/components/product/ProductRating";
import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/Toast";
import { ShoppingBagIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const foundProduct = getProductBySlug(slug);
  const { addItem } = useCart();
  const { showToast } = useToast();

  if (!foundProduct) {
    notFound();
  }

  const product = foundProduct;

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    addItem(product);
    showToast(`${product.name} added to cart!`);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-foreground">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery images={product.images} alt={product.name} />

        <div>
          <div className="flex gap-2 mb-3">
            {product.tags.includes("sale") && <Badge variant="sale">Sale</Badge>}
            {product.tags.includes("new") && <Badge variant="new">New</Badge>}
            {product.tags.includes("bestseller") && <Badge>Bestseller</Badge>}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

          <div className="mt-3">
            <ProductRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            {product.compareAtPrice && (
              <Badge variant="sale">
                Save {formatPrice(product.compareAtPrice - product.price)}
              </Badge>
            )}
          </div>

          <p className="mt-6 text-muted leading-relaxed">{product.description}</p>

          {product.features.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                    <CheckIcon className="w-4 h-4 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            {product.inStock ? (
              <Button size="lg" onClick={handleAddToCart} className="w-full sm:w-auto">
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            ) : (
              <Button size="lg" disabled className="w-full sm:w-auto">
                Out of Stock
              </Button>
            )}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
}
