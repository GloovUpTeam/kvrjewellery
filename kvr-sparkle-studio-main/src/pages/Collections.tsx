import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";

const collections = [
  {
    id: "nature-palette",
    name: "Nature Palette",
    description: "Inspired by the beauty of nature, featuring organic shapes and earthy tones.",
    image: productNecklace,
    itemCount: 24,
  },
  {
    id: "thora",
    name: "Thora",
    description: "Bold and contemporary designs for the modern woman who makes a statement.",
    image: productBangles,
    itemCount: 18,
  },
  {
    id: "gold-mangal",
    name: "Gold Mangal",
    description: "Traditional mangalsutra designs crafted with love and authenticity.",
    image: productEarrings,
    itemCount: 32,
  },
  {
    id: "heritage",
    name: "Heritage Collection",
    description: "Timeless pieces that celebrate our rich cultural heritage and traditions.",
    image: productRing,
    itemCount: 28,
  },
  {
    id: "bridal",
    name: "Bridal Splendor",
    description: "Exquisite bridal jewelry to make your special day even more memorable.",
    image: productNecklace,
    itemCount: 45,
  },
  {
    id: "everyday-elegance",
    name: "Everyday Elegance",
    description: "Subtle and sophisticated pieces perfect for daily wear.",
    image: productEarrings,
    itemCount: 36,
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-luxury py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each telling a unique story of craftsmanship and elegance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">
                    {collection.description}
                  </p>
                  <span className="text-xs text-accent font-medium">
                    {collection.itemCount} pieces
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
