import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function PricingPlans() {
	const plans = [
		{
			name: "Kickstart Plan",
			description: "Perfect for businesses starting with virtual assistance",
			price: {
				monthly: "$1099",
				quarterly: "$999",
			},
			hours: "4 hrs/day",
			features: [
				"Pre-vetted top 0.1% VA",
				"Email & Calendar Management",
				"Administrative Tasks",
				"Customer Support",
				"60-Minute Onboarding",
				"Instant Replacement",
			],
			popular: false,
		},
		{
			name: "Growth Engine Plan",
			description: "Ideal for growing businesses needing full-time support",
			price: {
				monthly: "$1999",
				quarterly: "$1799",
			},
			hours: "8 hrs/day",
			features: [
				"All Kickstart features",
				"Dedicated Project Manager",
				"Priority Support",
				"Custom Workflow Setup",
				"Advanced Tools Training",
				"Performance Analytics",
				"30 seats in AI-powered office management app",
			],
			popular: true,
		},
	];

	return (
		<div className="grid md:grid-cols-2 gap-8">
			{plans.map((plan) => (
				<Card 
					key={plan.name} 
					className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
				>
					{plan.popular && (
						<div className="absolute -top-4 left-1/2 -translate-x-1/2">
							<Badge variant="secondary" className="bg-primary text-primary-foreground">
								Most Popular
							</Badge>
						</div>
					)}
					<CardHeader>
						<CardTitle>{plan.name}</CardTitle>
						<CardDescription>{plan.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="mb-4">
							<div className="text-4xl font-bold">{plan.price.monthly}</div>
							<div className="text-sm text-muted-foreground">per month</div>
							<div className="text-sm text-primary mt-1">
								Quarterly: {plan.price.quarterly}/month
							</div>
						</div>
						<div className="text-lg font-semibold mb-4">{plan.hours}</div>
						<ul className="space-y-2">
							{plan.features.map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</CardContent>
					<CardFooter>
						<Button 
							className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
							variant={plan.popular ? 'default' : 'outline'}
						>
							Get Started
							{plan.popular && <Badge className="ml-2">Limited Time Offer!</Badge>}
						</Button>
					</CardFooter>
				</Card>
			))}
			<div className="md:col-span-2 text-center mt-4">
				<p className="text-muted-foreground">
					All plans include: Free consultation • $100 OFF • Quality guarantee • Instant replacement
				</p>
			</div>
		</div>
	);
}