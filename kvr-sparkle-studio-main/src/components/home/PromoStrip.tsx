import { Gift, Sparkles, Truck } from "lucide-react";

const PromoStrip = () => {
  const promos = [
    {
      icon: Sparkles,
      title: "Exclusive Offers",
      description: "Up to 25% off on making charges",
    },
    {
      icon: Gift,
      title: "Gift Cards Available",
      description: "The perfect gift for every occasion",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above ₹50,000",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gold-light to-gold-dark py-4">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {promos.map((promo, index) => (
            <div 
              key={promo.title}
              className="flex items-center gap-3 text-foreground"
            >
              <promo.icon className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm">{promo.title}</p>
                <p className="text-xs opacity-80">{promo.description}</p>
              </div>
              {index < promos.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-foreground/20 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoStrip;
