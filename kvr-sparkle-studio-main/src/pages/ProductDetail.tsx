import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Heart, ShoppingBag, ArrowLeft, Loader2, Minus, Plus, Check } from "lucide-react";
import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";

interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  metal_type: string | null;
  weight: number | null;
  stock_status: string | null;
  sku: string;
}

interface ProductImage {
  id: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean | null;
}

// Sample products for demo purposes (when DB is empty)
const sampleProducts: Record<string, Product & { image: string }> = {
  "1": { id: "1", title: "Traditional Bridal Necklace", description: "Exquisite 22K gold bridal necklace with intricate traditional design. Perfect for weddings and special occasions.", price: 185000, metal_type: "22K Gold", weight: 22, stock_status: "in_stock", sku: "KVR-BRD-001", image: productNecklace },
  "2": { id: "2", title: "Designer Gold Bangles Set", description: "Beautiful set of designer gold bangles crafted with precision. Elegant daily wear choice.", price: 125000, metal_type: "22K Gold", weight: 18, stock_status: "in_stock", sku: "KVR-BNG-002", image: productBangles },
  "3": { id: "3", title: "Antique Jhumka Earrings", description: "Traditional antique-finish jhumka earrings with delicate craftsmanship.", price: 45000, metal_type: "22K Gold", weight: 8, stock_status: "in_stock", sku: "KVR-EAR-003", image: productEarrings },
  "4": { id: "4", title: "Classic Finger Ring", description: "Elegant classic gold finger ring suitable for daily wear.", price: 28000, metal_type: "22K Gold", weight: 5, stock_status: "out_of_stock", sku: "KVR-RNG-004", image: productRing },
  "5": { id: "5", title: "Temple Design Pendant", description: "Beautiful temple-inspired pendant with traditional motifs.", price: 65000, metal_type: "22K Gold", weight: 12, stock_status: "in_stock", sku: "KVR-PND-005", image: productNecklace },
  "6": { id: "6", title: "Gold Chain Bracelet", description: "Stylish gold chain bracelet perfect for casual and formal occasions.", price: 42000, metal_type: "22K Gold", weight: 8, stock_status: "in_stock", sku: "KVR-BRC-006", image: productBangles },
  "7": { id: "7", title: "Daily Wear Studs", description: "Simple and elegant gold stud earrings for everyday wear.", price: 18000, metal_type: "22K Gold", weight: 3, stock_status: "in_stock", sku: "KVR-STD-007", image: productEarrings },
  "8": { id: "8", title: "Diamond Nose Pin", description: "Delicate diamond nose pin set in 18K gold.", price: 15000, metal_type: "18K Gold", weight: 1.5, stock_status: "in_stock", sku: "KVR-NOS-008", image: productRing },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      // Check if it's a sample product ID (1-8)
      const sampleProduct = sampleProducts[id];
      if (sampleProduct) {
        setProduct(sampleProduct);
        setSelectedImage(sampleProduct.image);
        setLoading(false);
        return;
      }

      // Try fetching from Supabase (for UUID-based IDs)
      try {
        const [productRes, imagesRes] = await Promise.all([
          supabase.from("products").select("*").eq("id", id).maybeSingle(),
          supabase.from("product_images").select("*").eq("product_id", id).order("sort_order"),
        ]);

        if (productRes.data) {
          setProduct(productRes.data);
        }
        
        if (imagesRes.data && imagesRes.data.length > 0) {
          setImages(imagesRes.data);
          const primary = imagesRes.data.find((img) => img.is_primary) || imagesRes.data[0];
          setSelectedImage(primary.image_url);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-luxury py-16 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-luxury py-16 text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Button onClick={() => navigate("/gold")}>Back to Products</Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxury py-8 md:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-md">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">No image</span>
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img.image_url)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === img.image_url ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.alt_text || product.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                {product.title}
              </h1>
              <p className="text-muted-foreground">SKU: {product.sku}</p>
            </div>

            <div className="divider-gold" />

            <p className="text-4xl font-serif font-bold text-foreground">
              {formatPrice(product.price)}
            </p>

            {/* Attributes */}
            <div className="flex flex-wrap gap-4">
              {product.metal_type && (
                <div className="px-4 py-2 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">Metal</p>
                  <p className="font-medium">{product.metal_type}</p>
                </div>
              )}
              {product.weight && (
                <div className="px-4 py-2 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">Weight</p>
                  <p className="font-medium">{product.weight}g</p>
                </div>
              )}
            </div>

            {/* Hallmark Badge */}
            <div className="flex items-center gap-2 text-sm">
              <span className="badge-hallmark">
                <Check className="w-3 h-3 mr-1" />
                916 Hallmark Certified
              </span>
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            )}

            {/* Stock Status */}
            <div>
              {product.stock_status === "in_stock" ? (
                <span className="text-green-600 font-medium">✓ In Stock</span>
              ) : (
                <span className="text-destructive font-medium">Out of Stock</span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-muted transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 group"
                disabled={product.stock_status !== "in_stock"}
              >
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Wishlist
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
