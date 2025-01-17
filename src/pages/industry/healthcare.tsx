import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Phone, UserCheck, FileText, Calendar, TrendingUp } from "lucide-react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CustomerJourney } from "@/components/CustomerJourney";
import { CaseStudies } from "@/components/CaseStudies";

const HealthcarePage: NextPage = () => {
	const benefits = [
		{
			icon: <Phone className="h-6 w-6" />,
			title: "Phone Answering",
			description: "Free your front desk from constant phone ringing with our empathetic and soft-spoken VAs."
		},
		{
			icon: <Calendar className="h-6 w-6" />,
			title: "Appointment Scheduling",
			description: "Boost clinic efficiency with our scheduling services—quickly fill cancellations and minimize lost time."
		},
		{
			icon: <UserCheck className="h-6 w-6" />,
			title: "Patient Management",
			description: "Enhance patient communication and follow-ups while reducing no-shows."
		},
		{
			icon: <FileText className="h-6 w-6" />,
			title: "Insurance Claims",
			description: "Streamline insurance processing and improve revenue cycle management."
		},
		{
			icon: <Clock className="h-6 w-6" />,
			title: "Admin Support",
			description: "Handle paperwork, medical records, and routine administrative tasks."
		},
		{
			icon: <TrendingUp className="h-6 w-6" />,
			title: "Practice Growth",
			description: "Focus on patient care while we handle the operational details."
		}
	];

	return (
		<Layout>
			<Head>
				<title>Healthcare Virtual Assistants | WishUp</title>
				<meta 
					name="description" 
					content="Transform your healthcare practice with WishUp's virtual assistants. Handle patient management, scheduling, and admin tasks efficiently. Get started in 60 minutes."
				/>
			</Head>

			<div className="container mx-auto px-4 py-8">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<Badge variant="secondary" className="mb-4">Healthcare Virtual Assistants</Badge>
					<h1 className="text-4xl font-bold mb-4">Want to deliver better patient care?</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Get the best Virtual Assistants for Healthcare in 60 Minutes. Free your staff from administrative 
						burdens and focus on what matters most - your patients.
					</p>
					<Button size="lg" className="bg-primary">
						Get Free Consultation
					</Button>
				</section>

				{/* Benefits Grid */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">How We Help Healthcare Practices</h2>
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
					<h2 className="text-3xl font-bold mb-8 text-center">Real Results for Healthcare Practices</h2>
					<div className="grid md:grid-cols-4 gap-6">
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">30+</div>
								<div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">45%</div>
								<div className="text-sm text-muted-foreground">Fewer No-Shows</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">25%</div>
								<div className="text-sm text-muted-foreground">Revenue Increase</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="pt-6 text-center">
								<div className="text-3xl font-bold text-primary mb-2">40%</div>
								<div className="text-sm text-muted-foreground">More Patient Time</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<CustomerJourney />
				<CaseStudies />

				{/* CTA Section */}
				<section className="text-center mt-16">
					<Card className="bg-primary text-primary-foreground">
						<CardContent className="pt-6">
							<h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
							<p className="mb-6">Join hundreds of healthcare professionals who trust WishUp's virtual assistants</p>
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

export default HealthcarePage;