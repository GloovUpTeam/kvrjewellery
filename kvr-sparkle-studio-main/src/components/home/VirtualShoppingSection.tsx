import { Video, Calendar, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const VirtualShoppingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-2">Shop From Home</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Virtual Shopping Experience
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Can't visit our showroom? No problem! Book a live video call with our jewelry experts and browse our collection from the comfort of your home.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Live Video Call</h4>
                  <p className="text-sm text-primary-foreground/70">HD video with zoom feature</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Easy Scheduling</h4>
                  <p className="text-sm text-primary-foreground/70">Book at your convenience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Guidance</h4>
                  <p className="text-sm text-primary-foreground/70">Personalized recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Secure & Safe</h4>
                  <p className="text-sm text-primary-foreground/70">Private one-on-one session</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="xl" 
                asChild
              >
                <a 
                  href="https://wa.me/919849139997?text=Hi%2C%20I%20would%20like%20to%20start%20a%20video%20call%20for%20jewelry%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="w-5 h-5" />
                  Start Video Call Now
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                asChild
              >
                <a 
                  href="https://wa.me/919849139997?text=Hi%2C%20I%20would%20like%20to%20schedule%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Appointment
                </a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:pl-12">
            {/* Decorative Cards */}
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                <div className="aspect-video bg-foreground/10 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                    <Video className="w-10 h-10 text-accent-foreground" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-serif font-bold mb-2">Live Video Session</h4>
                  <p className="text-primary-foreground/70">Connect with our experts instantly</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float">
                Free Consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualShoppingSection;
