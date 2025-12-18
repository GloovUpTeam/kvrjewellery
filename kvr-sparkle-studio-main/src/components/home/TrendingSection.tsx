import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";

const TrendingSection = () => {
  const navigate = useNavigate();
  
  const trendingProducts = [
    {
      id: "1",
      title: "Traditional Bridal Necklace",
      price: 185000,
      weight: "22g",
      metal: "22K Gold",
      image: productNecklace,
      inStock: true,
    },
    {
      id: "2",
      title: "Designer Gold Bangles Set",
      price: 125000,
      weight: "18g",
      metal: "22K Gold",
      image: productBangles,
      inStock: true,
    },
    {
      id: "3",
      title: "Antique Jhumka Earrings",
      price: 45000,
      weight: "8g",
      metal: "22K Gold",
      image: productEarrings,
      inStock: true,
    },
    {
      id: "4",
      title: "Classic Finger Ring",
      price: 28000,
      weight: "5g",
      metal: "22K Gold",
      image: productRing,
      inStock: false,
    },
    {
      id: "5",
      title: "Temple Design Pendant",
      price: 65000,
      weight: "12g",
      metal: "22K Gold",
      image: productNecklace,
      inStock: true,
    },
    {
      id: "6",
      title: "Gold Chain Bracelet",
      price: 42000,
      weight: "8g",
      metal: "22K Gold",
      image: productBangles,
      inStock: true,
    },
    {
      id: "7",
      title: "Daily Wear Studs",
      price: 18000,
      weight: "3g",
      metal: "22K Gold",
      image: productEarrings,
      inStock: true,
    },
    {
      id: "8",
      title: "Diamond Nose Pin",
      price: 15000,
      weight: "1.5g",
      metal: "18K Gold",
      image: productRing,
      inStock: true,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-accent font-medium mb-2">Explore Our Collection</p>
          <h2 className="section-heading mb-4">What's Trending</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product, index) => (
            <div
              key={product.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:shadow-md transition-shadow"
            onClick={() => navigate('/gold')}
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
