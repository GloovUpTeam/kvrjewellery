import { useNavigate } from "react-router-dom";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "gold",
      name: "Gold",
      description: "22K & 24K Pure Gold",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      route: "/gold",
    },
    {
      id: "silver",
      name: "Silver",
      description: "Sterling Silver Collection",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=500&fit=crop",
      route: "/silver",
    },
    {
      id: "diamond",
      name: "Diamond",
      description: "Certified Diamonds",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop",
      route: "/collections/bridal",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-accent font-medium mb-2">Shop by Category</p>
          <h2 className="section-heading mb-4">Our Categories</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => navigate(category.route)}
              className="group relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              
              {/* Gold Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-light/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-left">
                <div className="w-12 h-0.5 bg-gold-gradient mb-3 transition-all duration-300 group-hover:w-20" />
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
