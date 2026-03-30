"use client";

import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Bestsellers</h2>
          <p className="text-muted mt-1">Our most popular products</p>
        </div>
        <Link href="/products">
          <Button variant="outline">View All</Button>
        </Link>
      </div>
      <ProductGrid products={featured} />
    </section>
  );
}
