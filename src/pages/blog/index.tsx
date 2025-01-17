import { NextPage } from "next";
import Head from "next/head";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      title: "How to Use ChatGPT for Your Small Business",
      description: "Discover how to leverage ChatGPT with your virtual assistant to revolutionize your operations!",
      category: "Tools",
      date: "Feb 1, 2024",
      readTime: "11 min read",
      slug: "/blog/chatgpt-small-business",
    },
    {
      title: "10 Reasons You Need a Healthcare Virtual Assistant",
      description: "Learn how a virtual assistant can transform your healthcare practice and improve patient care.",
      category: "Healthcare",
      date: "Sep 20, 2023",
      readTime: "8 min read",
      slug: "/blog/healthcare-virtual-assistant",
    },
    {
      title: "Ecommerce Bookkeeping: Ultimate Guide For 2024",
      description: "Master your eCommerce finances with expert bookkeeping tips and best practices.",
      category: "Bookkeeping",
      date: "Apr 23, 2023",
      readTime: "9 min read",
      slug: "/blog/ecommerce-bookkeeping-guide",
    },
  ];

  return (
    <>
      <Head>
        <title>WishUp Blog - Virtual Assistant Insights & Tips</title>
        <meta 
          name="description" 
          content="Discover expert insights on virtual assistance, productivity tips, and industry best practices. Learn how to scale your business with virtual assistants."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
          <p className="text-muted-foreground">
            Expert advice on virtual assistance, productivity, and business growth
          </p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link href={post.slug} key={index}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;