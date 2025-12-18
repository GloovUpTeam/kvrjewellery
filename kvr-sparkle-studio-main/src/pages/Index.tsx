import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PromoStrip from "@/components/home/PromoStrip";
import TrendingSection from "@/components/home/TrendingSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import VirtualShoppingSection from "@/components/home/VirtualShoppingSection";
import StoreLocatorSection from "@/components/home/StoreLocatorSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromoStrip />
        <TrendingSection />
        <CategoriesSection />
        <CollectionsSection />
        <VirtualShoppingSection />
        <StoreLocatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
