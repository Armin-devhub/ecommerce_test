import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your Style
          </h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-100">
            Shop the latest electronics, clothing, home goods, and accessories. Free shipping on all orders.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                Shop Now
              </Button>
            </Link>
            <Link href="/products?category=electronics">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Electronics
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/hero/1920/600')] bg-cover bg-center opacity-10" />
    </section>
  );
}
