"use client";

import Link from "next/link";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";
import SearchBar from "@/components/ui/SearchBar";
import { useState } from "react";
import { Suspense } from "react";

function NavbarContent() {
  const { toggleCart, itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-primary">
              ShopNext
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm text-muted hover:text-foreground transition-colors">
                Products
              </Link>
            </div>
          </div>

          <div className="hidden md:block w-72">
            <Suspense>
              <SearchBar />
            </Suspense>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleCart} className="relative p-2 text-muted hover:text-foreground transition-colors cursor-pointer">
              <ShoppingBagIcon className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-muted hover:text-foreground cursor-pointer"
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
            <div>
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground"
            >
              Products
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function Navbar() {
  return <NavbarContent />;
}
