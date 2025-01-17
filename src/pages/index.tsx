import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AffiliateDisclaimer } from "@/components/AffiliateDisclaimer";

export default function Home() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Healthcare Professional",
      content: "WishUp's virtual assistants have transformed my practice. Their healthcare expertise and professionalism are outstanding.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "The best investment for my startup. Their VAs handle everything from admin to project management efficiently.",
    },
    {
      name: "Emma Davis",
      role: "eCommerce Owner",
      content: "WishUp's bookkeeping services have streamlined our financial operations. Highly recommended!",
    },
  ];

  const categories = [
    {
      title: "Virtual Assistant",
      description: "Top 0.1% talent ready to start in 60 minutes",
      products: "250+ VAs",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Bookkeeping",
      description: "Expert QuickBooks & financial management",
      products: "30+ Experts",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Project Management",
      description: "Streamline operations & boost efficiency",
      products: "80+ Managers",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="hero-section rounded-3xl mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
            <div className="relative">
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Trusted by 900+ Happy Clients
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hire Top <span className="text-gradient">0.1% Virtual Assistants</span> in 60 Minutes
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Pre-vetted, highly skilled virtual assistants for inbox management, bookkeeping, project management, and more.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="gradient-border">
                  View Services
                </Button>
                </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Popular Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="gradient-border card-hover-effect">
                <CardHeader>
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-gradient">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {category.products}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <Card className="gradient-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardHeader className="text-center relative">
              <CardTitle className="text-3xl text-gradient">Why Choose Us</CardTitle>
              <CardDescription>We make product research easy and reliable</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-2 p-6 rounded-lg bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-gradient">Top 0.1% Talent</h3>
                  <p className="text-muted-foreground">Pre-vetted virtual assistants with proven expertise</p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-lg bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-gradient">60-Minute Onboarding</h3>
                  <p className="text-muted-foreground">Quick and seamless hiring process</p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-lg bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-gradient">Full-Time Support</h3>
                  <p className="text-muted-foreground">Dedicated assistants working on your schedule</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">What Our Users Say</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="gradient-border">
                    <CardContent className="pt-6">
                      <blockquote className="space-y-4">
                        <p className="text-lg italic">&ldquo;{testimonial.content}&rdquo;</p>
                        <footer>
                          <p className="font-semibold text-gradient">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Card className="gradient-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
            <CardHeader className="relative">
              <CardTitle className="text-3xl text-white">Ready to Scale Your Business?</CardTitle>
              <CardDescription className="text-white/90">
              Join 900+ businesses who trust WishUp's virtual assistants
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <Button size="lg" variant="secondary" className="font-semibold">
              Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}