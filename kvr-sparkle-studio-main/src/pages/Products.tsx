import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";

import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";

interface ProductsProps {
  category?: string;
}

const Products = ({ category: propCategory }: ProductsProps) => {
  const { category: paramCategory } = useParams();
  const category = propCategory || paramCategory || "all";

  const categoryTitles: Record<string, string> = {
    gold: "Gold Collection",
    silver: "Silver Collection",
    gifts: "Gift Collection",
    all: "All Products",
  };

  const categoryDescriptions: Record<string, string> = {
    gold: "Discover our exquisite 22K and 24K gold jewelry, crafted with precision and hallmarked for authenticity.",
    silver: "Explore our stunning silver collection featuring contemporary and traditional designs.",
    gifts: "Find the perfect gift for your loved ones from our curated collection of premium jewelry.",
    all: "Browse our complete collection of fine jewelry.",
  };

  // Placeholder products - will be replaced with Supabase data
  const allProducts = [
    {
      id: "1",
      title: "Elegant Diamond Necklace",
      price: 125000,
      originalPrice: 145000,
      image: productNecklace,
      category: "gold",
      metal: "22K Gold",
      weight: "18g",
      inStock: true,
    },
    {
      id: "2",
      title: "Traditional Gold Bangles",
      price: 85000,
      image: productBangles,
      category: "gold",
      metal: "22K Gold",
      weight: "24g",
      inStock: true,
    },
    {
      id: "3",
      title: "Pearl Drop Earrings",
      price: 45000,
      originalPrice: 52000,
      image: productEarrings,
      category: "gold",
      metal: "18K Gold",
      weight: "8g",
      inStock: true,
    },
    {
      id: "4",
      title: "Classic Solitaire Ring",
      price: 95000,
      image: productRing,
      category: "gold",
      metal: "22K Gold",
      weight: "6g",
      inStock: false,
    },
    {
      id: "5",
      title: "Silver Chain Necklace",
      price: 8500,
      image: productNecklace,
      category: "silver",
      metal: "925 Silver",
      weight: "15g",
      inStock: true,
    },
    {
      id: "6",
      title: "Silver Cuff Bracelet",
      price: 6500,
      image: productBangles,
      category: "silver",
      metal: "925 Silver",
      weight: "20g",
      inStock: true,
    },
    {
      id: "7",
      title: "Gift Box - Gold Earrings",
      price: 35000,
      image: productEarrings,
      category: "gifts",
      metal: "18K Gold",
      weight: "5g",
      inStock: true,
    },
    {
      id: "8",
      title: "Gift Set - Silver Ring",
      price: 4500,
      image: productRing,
      category: "gifts",
      metal: "925 Silver",
      weight: "4g",
      inStock: true,
    },
  ];

  const filteredProducts = category === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-luxury py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {categoryTitles[category] || categoryTitles.all}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {categoryDescriptions[category] || categoryDescriptions.all}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
