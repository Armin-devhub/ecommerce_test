import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">ShopNext</h3>
            <p className="text-sm text-muted">
              Your one-stop shop for electronics, clothing, home goods, and accessories.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-muted hover:text-foreground transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=electronics" className="text-sm text-muted hover:text-foreground transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="text-sm text-muted hover:text-foreground transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-sm text-muted hover:text-foreground transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-sm text-muted hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">&copy; 2026 ShopNext. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
