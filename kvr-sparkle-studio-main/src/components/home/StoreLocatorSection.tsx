import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoreLocatorSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Visit Us</p>
          <h2 className="section-heading mb-4">Our Showroom</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Store Info Card */}
          <div className="card-premium p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              KVR Jewellers - Chittoor
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    12-106, Bazzar Street,<br />
                    Chittoor, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Store Timings</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 9:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Contact</h4>
                  <a 
                    href="tel:9849139997" 
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    +91 98491 39997
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=KVR+Jewellers+12-106+Bazzar+Street+Chittoor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-muted rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d79.1003!3d13.2151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDEyJzU0LjQiTiA3OcKwMDYnMDEuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KVR Jewellers Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
