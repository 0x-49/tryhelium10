import React from "react";
import Layout from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data - in real application this would come from an API or CMS
const products = [
  {
    title: "Premium Wireless Headphones",
    description: "High-quality sound with active noise cancellation",
    price: "$299.99",
    rating: 4.8,
    category: "Audio",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  },
  {
    title: "Smart Home Hub",
    description: "Control your entire home with voice commands",
    price: "$199.99",
    rating: 4.6,
    category: "Smart Home",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  },
  {
    title: "4K Webcam",
    description: "Crystal clear video for remote work and streaming",
    price: "$149.99",
    rating: 4.7,
    category: "Accessories",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  },
  {
    title: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical switches for the ultimate gaming experience",
    price: "$149.99",
    rating: 4.5,
    category: "Peripherals",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  },
  {
    title: "Ultra-Wide Gaming Monitor",
    description: "34-inch curved display perfect for immersive gaming and productivity",
    price: "$499.99",
    rating: 4.9,
    category: "Monitors",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  },
  {
    title: "Portable SSD Drive",
    description: "1TB ultra-fast external SSD with USB-C connectivity",
    price: "$159.99",
    rating: 4.6,
    category: "Storage",
    imageUrl: "/images/rect.png",
    affiliateUrl: "#"
  }
];

export default function TechGadgets() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <section className="mb-8">
          <Badge variant="secondary" className="mb-4">Tech Gadgets</Badge>
          <h1 className="text-4xl font-bold mb-4">Latest Tech Gadgets</h1>
          <p className="text-xl text-muted-foreground">
            Discover cutting-edge technology products that enhance your digital lifestyle.
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
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="smart-home">Smart Home</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="peripherals">Peripherals</SelectItem>
                <SelectItem value="monitors">Monitors</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Products Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>

        {/* Trust Signals */}
        <section className="mt-16 bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Expert Reviews</h3>
              <p className="text-muted-foreground">Every product thoroughly tested by our team</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price Comparison</h3>
              <p className="text-muted-foreground">Find the best deals across multiple retailers</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Regular Updates</h3>
              <p className="text-muted-foreground">Latest products and deals updated daily</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}