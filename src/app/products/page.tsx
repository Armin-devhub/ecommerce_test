"use client";

import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryFilter from "@/components/product/CategoryFilter";
import SearchBar from "@/components/ui/SearchBar";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const query = searchParams.get("q") ?? "";
  const sort = searchParams.get("sort") ?? "";

  const filtered = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter((p) => p.categoryId === category);
    }

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [category, query, sort]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {category ? products.find((p) => p.categoryId === category)?.categoryId.charAt(0).toUpperCase() + (products.find((p) => p.categoryId === category)?.categoryId.slice(1) ?? "") : "All Products"}
          </h1>
          <p className="text-muted text-sm mt-1">{filtered.length} products</p>
        </div>
        <SortSelect />
      </div>

      <div className="mb-6 sm:hidden">
        <SearchBar />
      </div>

      <div className="mb-6">
        <CategoryFilter />
      </div>

      <ProductGrid products={filtered} />
    </>
  );
}

function SortSelect() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? "";

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set("sort", e.target.value);
    } else {
      params.delete("sort");
    }
    window.location.search = params.toString();
  }

  return (
    <select
      value={sort}
      onChange={handleSort}
      className="px-3 py-2 border border-border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
      <option value="name">Name A-Z</option>
    </select>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Suspense>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
