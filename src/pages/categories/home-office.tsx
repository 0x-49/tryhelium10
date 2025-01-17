import React from "react";
import Layout from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const services = [
  {
    title: "Virtual Executive Assistant",
    description: "Full-time dedicated assistant for inbox management, scheduling, and administrative tasks",
    price: "From $999/month",
    rating: 4.9,
    category: "Administrative",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/administrative-executive-assistant"
  },
  {
    title: "Virtual Bookkeeper",
    description: "Expert QuickBooks-certified professionals for financial management and bookkeeping",
    price: "From $1099/month",
    rating: 4.8,
    category: "Finance",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/bookkeeping-assistant"
  },
  {
    title: "Project Manager",
    description: "Skilled project managers to streamline operations and boost efficiency",
    price: "From $1299/month",
    rating: 4.7,
    category: "Management",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/service/project-management"
  },
  {
    title: "Virtual Receptionist",
    description: "Professional phone answering and customer support services",
    price: "From $899/month",
    rating: 4.6,
    category: "Customer Service",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/service/virtual-receptionist"
  }
];


const HomeOfficePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <section className="mb-8">
            <Badge variant="secondary" className="mb-4">Virtual Assistance</Badge>
            <h1 className="text-4xl font-bold mb-4">Home Office Virtual Assistant Services</h1>
            <p className="text-xl text-muted-foreground">
            Scale your home office operations with pre-vetted, top 0.1% virtual assistants from WishUp.
            </p>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Products Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
          <ProductCard key={index} {...service} />
          ))}
        </section>

        {/* Trust Signals */}
        <section className="mt-16 bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
                <h3 className="font-semibold mb-2">Top 0.1% Talent</h3>
                <p className="text-muted-foreground">Pre-vetted professionals with proven expertise</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">60-Minute Onboarding</h3>
                <p className="text-muted-foreground">Quick and seamless hiring process</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Full-Time Support</h3>
                <p className="text-muted-foreground">Dedicated assistants on your schedule</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomeOfficePage;