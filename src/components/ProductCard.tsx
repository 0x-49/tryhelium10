import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  rating?: number;
  imageUrl: string;
  category: string;
  affiliateUrl: string;
}

export function ProductCard({
  title,
  description,
  price,
  rating,
  imageUrl,
  category,
  affiliateUrl,
}: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col gradient-border card-hover-effect">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {category}
          </Badge>
          {rating && (
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-gradient">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-gradient">{price}</p>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Top 0.1% Talent
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              60-Minute Onboarding
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Full-Time Support
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="mt-6">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" 
          asChild
        >
          <a 
            href={affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Get Started
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}