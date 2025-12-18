import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

// Collection metadata
const collectionMeta: Record<string, { name: string; description: string }> = {
  "nature-palette": {
    name: "Nature Palette",
    description: "Inspired by the beauty of nature, featuring organic shapes and earthy tones.",
  },
  "thora": {
    name: "Thora",
    description: "Bold and contemporary designs for the modern woman who makes a statement.",
  },
  "gold-mangal": {
    name: "Gold Mangal",
    description: "Traditional mangalsutra designs crafted with love and authenticity.",
  },
  "heritage": {
    name: "Heritage Collection",
    description: "Timeless pieces that celebrate our rich cultural heritage and traditions.",
  },
  "bridal": {
    name: "Bridal Splendor",
    description: "Exquisite bridal jewelry to make your special day even more memorable.",
  },
  "everyday-elegance": {
    name: "Everyday Elegance",
    description: "Subtle and sophisticated pieces perfect for daily wear.",
  },
};

const CollectionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? collectionMeta[slug] : null;

  const { data: products, isLoading } = useQuery({
    queryKey: ["collection-products", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images(image_url, is_primary, alt_text),
          product_variants(variant_name, variant_price)
        `)
        .eq("is_active", true)
        .limit(20);

      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-luxury py-8 md:py-12">
        {/* Back Link */}
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collections
        </Link>

        {/* Collection Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            {meta?.name || "Collection"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {meta?.description || "Explore our curated collection of fine jewelry."}
          </p>
          <div className="divider-gold max-w-xs mx-auto mt-6" />
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square rounded-2xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => {
              const primaryImage = product.product_images?.find((img: any) => img.is_primary);
              const imageUrl = primaryImage?.image_url || product.product_images?.[0]?.image_url;

              return (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    weight: product.weight ? `${product.weight}g` : "N/A",
                    metal: product.metal_type || "Gold",
                    image: imageUrl || "/placeholder.svg",
                    inStock: product.stock_status === "in_stock",
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this collection yet.
            </p>
            <Link
              to="/gold"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Browse all products
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CollectionDetail;
