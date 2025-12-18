import { useState } from "react";
import { Search, ShoppingBag, Phone, Menu, X, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/", end: true },
    { label: "Gold", href: "/gold" },
    { label: "Silver", href: "/silver" },
    { label: "Collections", href: "/collections" },
    { label: "Gifts", href: "/gifts" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary/95 border-b border-primary-foreground/10">
        <div className="container-luxury py-2 flex justify-between items-center text-primary-foreground text-sm">
          <p className="font-medium">Making every moment sparkle ✨</p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:kvrcustsupp@gmail.com"
              className="hover:text-accent transition-colors"
            >
              kvrcustsupp@gmail.com
            </a>
            <a
              href="tel:9849139997"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              9849139997
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-luxury py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="KVR Jewellers - 916 Hallmark Jewellery Showroom"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                end={link.end}
                className={({ isActive }) =>
                  `font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${isActive
                    ? "text-accent after:w-full"
                    : "text-primary-foreground hover:text-accent after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, SKU..."
                className="w-full h-10 pl-4 pr-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent focus:bg-primary-foreground/20 transition-all"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/60" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Search Toggle */}
            <button
              className="lg:hidden text-primary-foreground p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Phone - Mobile */}
            <a
              href="tel:9849139997"
              className="md:hidden text-primary-foreground p-2"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 relative"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden mt-3 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, SKU..."
                className="w-full h-10 pl-4 pr-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/60" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="container-luxury py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                end={link.end}
                className={({ isActive }) =>
                  `font-medium py-3 px-4 rounded-lg transition-colors ${isActive
                    ? "text-accent bg-primary-foreground/10"
                    : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
