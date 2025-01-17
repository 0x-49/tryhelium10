import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { href: "/services/virtual-assistant", label: "Virtual Assistant" },
        { href: "/services/bookkeeping", label: "Bookkeeping" },
        { href: "/services/project-management", label: "Project Management" },
        { href: "/services/inbox-management", label: "Inbox Management" },
        { href: "/services/calendar-management", label: "Calendar Management" },
      ],
    },
    {
      title: "Industries",
      links: [
        { href: "/industry/healthcare", label: "Healthcare" },
        { href: "/industry/startups", label: "Startups" },
        { href: "/industry/ecommerce", label: "eCommerce" },
        { href: "/industry/real-estate", label: "Real Estate" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
        { href: "/pricing", label: "Pricing" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/disclaimer", label: "Disclaimer" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4">About WishUp</h3>
            <p className="text-sm text-muted-foreground">
              Since 2015, WishUp has empowered 900+ small and medium businesses with skilled virtual assistants. We manage everything from daily tasks and bookkeeping to specialized services.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} All rights reserved.</p>


        </div>
      </div>
    </footer>
  );
};

export default Footer;