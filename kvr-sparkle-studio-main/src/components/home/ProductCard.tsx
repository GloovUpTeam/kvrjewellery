import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  weight: string;
  metal: string;
  image: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="group card-premium overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Stock Badge */}
          <div className="absolute top-3 left-3">
            {product.inStock ? (
              <span className="px-3 py-1 bg-green-500/90 text-primary-foreground text-xs font-medium rounded-full">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 bg-destructive/90 text-destructive-foreground text-xs font-medium rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            className="absolute top-3 right-3 p-2 rounded-full bg-card/80 hover:bg-card shadow-sm transition-all duration-300 hover:scale-110"
            aria-label="Add to wishlist"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="w-4 h-4 text-foreground hover:text-primary transition-colors" />
          </button>

          {/* Hover Action */}
          <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <Button 
              variant="secondary" 
              size="sm" 
              className="shadow-lg pointer-events-auto"
              aria-label="Quick view"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-serif font-semibold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          {/* Attributes */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{product.metal}</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>{product.weight}</span>
          </div>

          {/* Price */}
          <p className="text-xl font-serif font-bold text-foreground">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
