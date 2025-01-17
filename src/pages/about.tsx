import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage: NextPage = () => {
  const stats = [
    { number: "900+", label: "Happy Clients" },
    { number: "850,000+", label: "Hours Saved" },
    { number: "70+", label: "Tools Mastered" },
    { number: "0.1%", label: "Top Talent" },
  ];

  return (
    <Layout>
      <Head>
        <title>About WishUp - Leading Virtual Assistant Services Since 2015</title>
        <meta 
          name="description" 
          content="Since 2015, WishUp has empowered 900+ businesses with top 0.1% virtual assistants. Learn about our mission to transform business efficiency through expert VA services."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">About WishUp</Badge>
          <h1 className="text-4xl font-bold mb-4">Empowering Businesses Since 2015</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            WishUp connects businesses with pre-vetted, top 0.1% virtual assistants to drive growth and efficiency.
          </p>
        </section>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            At WishUp, we're dedicated to transforming how businesses operate by providing access to exceptional virtual talent. 
            Our mission is to help businesses scale efficiently by connecting them with pre-vetted, highly skilled virtual assistants.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose WishUp</h2>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>Pre-vetted professionals with proven expertise in various domains</li>
            <li>Comprehensive 6-step screening process to ensure top 0.1% talent</li>
            <li>Quick 60-minute onboarding process</li>
            <li>Full-time, dedicated virtual assistants</li>
            <li>Expertise in 70+ no-code tools and technologies</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
          <p className="text-lg mb-6">
            From administrative tasks and bookkeeping to specialized services for healthcare professionals, realtors, 
            and startup founders, WishUp provides comprehensive virtual assistance solutions tailored to your needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;