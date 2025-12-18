import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CollectionsSection = () => {
  const collections = [
    {
      title: "Bridal Collection",
      description: "Timeless pieces for your special day",
      slug: "bridal",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
    },
    {
      title: "Gold Mangalsutras",
      description: "Traditional symbols of marriage",
      slug: "gold-mangal",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop",
    },
    {
      title: "Nature Palette",
      description: "Inspired by the beauty of nature",
      slug: "nature-palette",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop",
    },
    {
      title: "Everyday Elegance",
      description: "Light & wearable designs",
      slug: "everyday-elegance",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Curated For You</p>
          <h2 className="section-heading mb-4">Our Collections</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Background */}
              <img 
                src={collection.image} 
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg md:text-xl font-serif font-bold mb-1 md:mb-2 group-hover:translate-y-[-4px] transition-transform">
                  {collection.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
