import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImage from "@/assets/hero-jewelry.jpg";

const slides = [
  {
    id: 1,
    image: heroImage,
    badge: "916 Hallmark Certified",
    heading: "Making Every Moment",
    highlight: "Sparkle",
    subtext: "Discover certified gold, silver & gift collections. Shop online or visit our showroom in Chittoor.",
    cta: "Shop Now",
    route: "/gold",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop",
    badge: "New Collection",
    heading: "Bridal",
    highlight: "Elegance",
    subtext: "Exquisite bridal jewellery for your special day. Timeless designs that celebrate love.",
    cta: "Explore Bridal",
    route: "/collections/bridal",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1920&h=1080&fit=crop",
    badge: "Trending Now",
    heading: "Antique",
    highlight: "Heritage",
    subtext: "Traditional designs with modern craftsmanship. Celebrate our rich cultural heritage.",
    cta: "View Collection",
    route: "/collections",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  // Adjust duration for mobile
  const duration = isMobile ? 0.6 : 1.0;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Images with AnimatePresence for cross-fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: duration * 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={`${slide.heading} ${slide.highlight}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-luxury relative z-10 py-16">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: duration * 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient text-foreground text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                {slide.badge}
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration * 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6"
              >
                {slide.heading}{" "}
                <span className="text-gold-gradient">{slide.highlight}</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration * 0.8, delay: 0.35 }}
                className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed"
              >
                {slide.subtext}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration * 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    variant="hero"
                    size="xl"
                    className="group"
                    onClick={() => navigate(slide.route)}
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration * 0.8, delay: 0.65 }}
                className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-primary-foreground/20"
              >
                <div className="text-primary-foreground">
                  <p className="text-2xl font-serif font-bold">25+</p>
                  <p className="text-sm text-primary-foreground/70">Years of Trust</p>
                </div>
                <div className="text-primary-foreground">
                  <p className="text-2xl font-serif font-bold">10,000+</p>
                  <p className="text-sm text-primary-foreground/70">Happy Customers</p>
                </div>
                <div className="text-primary-foreground">
                  <p className="text-2xl font-serif font-bold">5,000+</p>
                  <p className="text-sm text-primary-foreground/70">Unique Designs</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/20 text-primary-foreground backdrop-blur-sm"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/20 text-primary-foreground backdrop-blur-sm"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="h-2 rounded-full"
            animate={{
              width: index === currentSlide ? 32 : 8,
              backgroundColor: index === currentSlide
                ? "#FE7704"
                : "rgba(255,255,255,0.5)",
            }}
            whileHover={{
              backgroundColor: index === currentSlide
                ? "#FE7704"
                : "rgba(255,255,255,0.7)"
            }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;