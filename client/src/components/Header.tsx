import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { COMPANY_NAME, APP_LOGO } from "@/const";
import { useCalendly } from "@/hooks/useCalendly";

const navItems = [
  { label: "Home", path: "/" },
  { 
    label: "Services", 
    path: "/services",
    submenu: [
      { label: "Services Overview", path: "/services" },
      { label: "AI Strategy Consulting", path: "/ai-strategy" },
      { label: "AI Implementation", path: "/ai-implementation" },
      { label: "AI Automation", path: "/ai-automation" },
    ]
  },
  { 
    label: "Industries", 
    path: "/industries",
    submenu: [
      { label: "Home Services", path: "/industries/home-services" },
      { label: "Professional Services", path: "/industries/professional-services" },
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "E-commerce", path: "/industries/ecommerce" },
      { label: "Financial Services", path: "/industries/financial-services" },
    ]
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();
  const { openCalendly } = useCalendly();

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={APP_LOGO} alt={COMPANY_NAME} className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.submenu ? (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      isActive(item.path) ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="bg-card border border-border rounded-md shadow-lg py-2 min-w-[220px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            href={subitem.path}
                            className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                              isActive(subitem.path) ? "text-accent font-medium" : "text-card-foreground"
                            }`}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <Link href="/account">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </Link>
            ) : (
              <Link href="/register">
                <Button variant="outline" size="sm">
                  Create Account
                </Button>
              </Link>
            )}
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={openCalendly}
            >
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`text-sm font-medium transition-colors hover:text-accent w-full text-left ${
                          isActive(item.path) ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.path}
                              href={subitem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`text-sm transition-colors hover:text-accent ${
                                isActive(subitem.path) ? "text-accent font-medium" : "text-foreground"
                              }`}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-accent ${
                        isActive(item.path) ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalendly();
                }}
              >
                Book a Strategy Call
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
