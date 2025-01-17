import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from './ui/theme-toggle';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        router.pathname === href ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      {children}
    </Link>
  );

  const mainNavLinks = [
    { href: '/services/virtual-assistant', label: 'Virtual Assistant' },
    { href: '/services/bookkeeping', label: 'Bookkeeping' },
    { href: '/services/project-management', label: 'Project Management' },
  ];

  const industryNavLinks = [
    { href: '/industry/healthcare', label: 'Healthcare' },
    { href: '/industry/startups', label: 'Startups' },
    { href: '/industry/ecommerce', label: 'eCommerce' },
    { href: '/industry/real-estate', label: 'Real Estate' },
  ];

  const Logo = () => (
    <div className="flex items-center">
      <Image 
        src="/wishup_logo.png" 
        alt="WishUp Logo" 
        width={120} 
        height={40} 
        priority
      />
    </div>
  );

  return (
    <header className="w-full border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {mainNavLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              <div className="relative group">
                <span className="text-sm font-medium text-muted-foreground cursor-pointer">
                  Industries
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                  <div className="py-2">
                    {industryNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/blog">Blog</NavLink>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Get Free Consultation
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="py-2">
                    <span className="text-sm font-medium text-muted-foreground">Industries</span>
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {industryNavLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/pricing"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;