import React from "react";
import Layout from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Head from "next/head";

const tools = [
  {
    title: "ChatGPT Integration",
    description: "AI-powered virtual assistants trained in using ChatGPT for content creation and task automation",
    category: "AI Tools",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/tool/chat-gpt"
  },
  {
    title: "QuickBooks Expertise",
    description: "Certified bookkeepers skilled in QuickBooks for accurate financial management",
    category: "Finance",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/tool/quickbooks"
  },
  {
    title: "Google Workspace",
    description: "Virtual assistants proficient in Gmail, Calendar, and all Google Workspace tools",
    category: "Productivity",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/tool/google-workspace"
  },
  {
    title: "Zapier Automation",
    description: "Expert VAs who leverage Zapier for workflow automation and integration",
    category: "Automation",
    imageUrl: "/Wishup.jpg",
    affiliateUrl: "https://www.wishup.co/tool/zapier"
  }
];

const ProductivityToolsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Virtual Assistant Tools & Integrations | WishUp</title>
        <meta 
          name="description" 
          content="Discover how WishUp's virtual assistants leverage top productivity tools like ChatGPT, QuickBooks, and more to maximize your efficiency."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">Tools & Integrations</Badge>
          <h1 className="text-4xl font-bold mb-4">Powerful Tools, Expert Assistance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our virtual assistants are trained in 70+ no-code tools to streamline your operations and boost productivity.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="mb-2 inline-flex">{tool.category}</Badge>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={tool.affiliateUrl}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">70+ Tools</h3>
              <p className="text-muted-foreground">Comprehensive tool expertise</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Regular Training</h3>
              <p className="text-muted-foreground">Continuous skill updates</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Integration Support</h3>
              <p className="text-muted-foreground">Seamless tool implementation</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductivityToolsPage;