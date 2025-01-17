import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Search, Phone, Mail, FileText, TrendingUp } from "lucide-react";
import { CustomerJourney } from "@/components/CustomerJourney";
import { CaseStudies } from "@/components/CaseStudies";

const RealEstatePage: NextPage = () => {
	const benefits = [
		{
			icon: <Home className="h-6 w-6" />,
			title: "Listing Management",
			description: "Keep property listings updated across multiple platforms and manage property details."
		},
		{
			icon: <Search className="h-6 w-6" />,
			title: "Market Research",
			description: "Research property values, market trends, and competitor analysis."
		},
		{
			icon: <Phone className="h-6 w-6" />,
			title: "Lead Management",
			description: "Handle inquiries, follow-ups, and maintain your CRM system."
		},
		{
			icon: <Mail className="h-6 w-6" />,
			title: "Email Campaigns",
			description: "Create and manage email marketing campaigns for properties."
		},
		{
			icon: <FileText className="h-6 w-6" />,
			title: "Document Handling",
			description: "Process contracts, agreements, and maintain property documentation."
		},
		{
			icon: <TrendingUp className="h-6 w-6" />,
			title: "Business Growth",
			description: "Focus on closing deals while we handle administrative tasks."
		}
	];

	return (
		<Layout>
			<Head>
				<title>Real Estate Virtual Assistants | WishUp</title>
				<meta 
					name="description" 
					content="Scale your real estate business with WishUp's virtual assistants. Handle listings, leads, documentation, and more efficiently. Get started in 60 minutes."
				/>
			</Head>

			<div className="container mx-auto px-4 py-8">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<Badge variant="secondary" className="mb-4">Real Estate Virtual Assistants</Badge>
					<h1 className="text-4xl font-bold mb-4">Offload your admin tasks & grow your real estate business</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Get the best Virtual Assistant for Real Estate in 60 Minutes. Focus on what you do best - closing deals.
					</p>
					<Button size="lg" className="bg-primary">
						Get Free Consultation
					</Button>
				</section>

				{/* Benefits Grid */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">How We Help Real Estate Professionals</h2>
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
					<h2 className="text-3xl font-bold mb-8 text-center">Real Results for Real Estate Agents</h2>
					<div className="grid md:grid-cols-4 gap-6">
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">20+</div>
								<div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">100%</div>
								<div className="text-sm text-muted-foreground">Faster Response</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">40%</div>
								<div className="text-sm text-muted-foreground">Revenue Growth</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">3x</div>
								<div className="text-sm text-muted-foreground">More Listings</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<CustomerJourney />
				<CaseStudies />

				{/* CTA Section */}
				<section className="text-center">
					<Card className="bg-primary text-primary-foreground">
						<CardContent className="pt-6">
							<h2 className="text-3xl font-bold mb-4">Ready to Scale Your Real Estate Business?</h2>
							<p className="mb-6">Join successful real estate professionals who trust WishUp's virtual assistants</p>
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

export default RealEstatePage;