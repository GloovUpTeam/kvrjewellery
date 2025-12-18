import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Authenticity",
      description: "Every piece is hallmarked 916 certified, ensuring you receive only genuine quality.",
    },
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "Our master artisans bring decades of experience to create timeless pieces.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to make every moment sparkle.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in design, quality, and service.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-luxury text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About KVR Jewellers
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              Making every moment sparkle since generations. We are your trusted destination for certified gold, silver, and exquisite gift collections.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    KVR Jewellers has been a cornerstone of trust and elegance in Chittoor for generations. What started as a small family-owned shop has grown into a beloved destination for those seeking authentic, beautifully crafted jewelry.
                  </p>
                  <p>
                    Our commitment to quality is unwavering. Every piece that leaves our showroom carries the prestigious 916 Hallmark certification, ensuring that you receive nothing but the finest gold and silver jewelry.
                  </p>
                  <p>
                    We believe that jewelry is more than an accessory—it's an emotion, a memory, a celebration of life's precious moments. That's why we pour our heart into every design, every detail, every interaction with our valued customers.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                  <span className="font-serif text-6xl text-primary">KVR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container-luxury">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at KVR Jewellers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container-luxury text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Experience our collections in person at our Chittoor showroom. Our experts are ready to help you find the perfect piece.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">12-106, Bazaar Street, Chittoor</p>
              <p>Phone: <a href="tel:9849139997" className="text-primary hover:text-accent transition-colors">9849139997</a></p>
              <p>Email: <a href="mailto:kvrcustsupp@gmail.com" className="text-primary hover:text-accent transition-colors">kvrcustsupp@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
