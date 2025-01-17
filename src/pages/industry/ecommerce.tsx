import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Users, BarChart, Package, MessageSquare, TrendingUp } from "lucide-react";
import { CustomerJourney } from "@/components/CustomerJourney";
import { CaseStudies } from "@/components/CaseStudies";

const EcommercePage: NextPage = () => {
	const benefits = [
		{
			icon: <ShoppingCart className="h-6 w-6" />,
			title: "Order Processing",
			description: "Streamline order management, from processing to tracking and customer updates."
		},
		{
			icon: <Package className="h-6 w-6" />,
			title: "Inventory Management",
			description: "Monitor stock levels, update product listings, and coordinate with suppliers."
		},
		{
			icon: <MessageSquare className="h-6 w-6" />,
			title: "Customer Support",
			description: "Provide 24/7 customer service across multiple channels."
		},
		{
			icon: <Users className="h-6 w-6" />,
			title: "Customer Engagement",
			description: "Handle customer inquiries, reviews, and feedback management."
		},
		{
			icon: <BarChart className="h-6 w-6" />,
			title: "Data Analysis",
			description: "Track sales performance, customer behavior, and market trends."
		},
		{
			icon: <TrendingUp className="h-6 w-6" />,
			title: "Growth Support",
			description: "Scale your operations without increasing overhead costs."
		}
	];

	return (
		<Layout>
			<Head>
				<title>eCommerce Virtual Assistants | WishUp</title>
				<meta 
					name="description" 
					content="Scale your eCommerce business with WishUp's virtual assistants. Handle orders, inventory, customer support, and more efficiently. Get started in 60 minutes."
				/>
			</Head>

			<div className="container mx-auto px-4 py-8">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<Badge variant="secondary" className="mb-4">eCommerce Virtual Assistants</Badge>
					<h1 className="text-4xl font-bold mb-4">Ready to boost customer acquisition and loyalty?</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Get the best Virtual Assistant for eCommerce. We'll handle everything from product to profit.
					</p>
					<Button size="lg" className="bg-primary">
						Get Free Consultation
					</Button>
				</section>

				{/* Benefits Grid */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Support for Your eCommerce Journey</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{benefits.map((benefit, index) => (
							<Card key={index}>
								<CardHeader>
									<div className="mb-4 text-primary">{benefit.icon}</div>
									<CardTitle>{benefit.title}</CardTitle>
									<CardDescription>{benefit.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</section>

				{/* Success Metrics */}
				<section className="mb-16 bg-primary/5 rounded-lg p-8">
					<h2 className="text-3xl font-bold mb-8 text-center">Real Results for eCommerce Businesses</h2>
					<div className="grid md:grid-cols-4 gap-6">
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">25+</div>
								<div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">24/7</div>
								<div className="text-sm text-muted-foreground">Customer Support</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">35%</div>
								<div className="text-sm text-muted-foreground">Sales Growth</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">2x</div>
								<div className="text-sm text-muted-foreground">Faster Processing</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<CustomerJourney />
				<CaseStudies />

				{/* Market Size */}
				<section className="mb-16">
					<Card>
						<CardContent className="pt-6">
							<div className="text-center">
								<h2 className="text-2xl font-bold mb-4">Stay Competitive in a Growing Market</h2>
								<p className="text-muted-foreground mb-4">
									The eCommerce market value is expected to reach $4.23 trillion by the end of 2024. 
									Stay ahead with dedicated virtual assistant support.
								</p>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* CTA Section */}
				<section className="text-center">
					<Card className="bg-primary text-primary-foreground">
						<CardContent className="pt-6">
							<h2 className="text-3xl font-bold mb-4">Ready to Scale Your eCommerce Business?</h2>
							<p className="mb-6">Join successful eCommerce businesses that trust WishUp's virtual assistants</p>
							<Button size="lg" variant="secondary">
								Schedule Free Consultation
							</Button>
						</CardContent>
					</Card>
				</section>
			</div>
		</Layout>
	);
};

export default EcommercePage;